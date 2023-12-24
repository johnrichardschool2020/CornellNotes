from flask import Flask, render_template, request, url_for, jsonify, redirect
import xml.etree.ElementTree as ET

app = Flask(__name__)





#------Function to create or reset the XML file with default content---------------------------
def reset_xml():
    with open('data.xml', 'w') as xml_file:
        xml_file.write("""<root>
        <title></title>
        <content></content>
        <keyword></keyword>
        <summary></summary>
</root>
""")





#-------------------------------------------------Open Knowledge Website-----------------
# Route for website.html
@app.route('/')
def website():
    # Reset the XML file to default content
    reset_xml()
    return render_template('website.html')





#-------------------------------------------------Function to update XML data-------------------
import xml.etree.ElementTree as ET

def update_xml(title, keyword, content, summary):
    # Parse the XML file
    tree = ET.parse('data.xml')
    root = tree.getroot()

    # Find the information element
    information = root

    # Update title
    title_element = information.find('./title')
    if title_element is not None:
        title_element.text = f"{title_element.text or ''} {title}".strip()
    else:
        new_title_element = ET.SubElement(information, 'title')
        new_title_element.text = title

    # Update keyword
    keyword_element = information.find('./keyword')
    if keyword_element is not None:
        keyword_element.text = f"{keyword_element.text or ''} {keyword}".strip()
    else:
        new_keyword_element = ET.SubElement(information, 'keyword')
        new_keyword_element.text = keyword

    # Update content
    content_element = information.find('./content')
    if content_element is not None:
        content_element.text = f"{content_element.text or ''} {content}".strip()
    else:
        new_content_element = ET.SubElement(information, 'content')
        new_content_element.text = content

    # Update summary
    summary_element = information.find('./summary')
    if summary_element is not None:
        summary_element.text = f"{summary_element.text or ''} {summary}".strip()
    else:
        new_summary_element = ET.SubElement(information, 'summary')
        new_summary_element.text = summary

    # Convert the ElementTree back to a string and remove extra whitespaces
    xml_content = ET.tostring(root, encoding='utf-8').decode().strip()

    # Rewrite the XML file
    with open('data.xml', 'w') as xml_file:
        xml_file.write(xml_content)






#------------------------------------------------------Display XML route-----------------------
@app.route('/cornell_note')
def display_xml():
    # Parse the XML file
    tree = ET.parse('data.xml')
    root = tree.getroot()

    # Extract data from XML
    title = root.find('./title').text
    keyword = root.find('./keyword').text
    content = root.find('./content').text
    summary = root.find('./summary').text

    return render_template('cornellnote.html',
                           title=title,
                           keyword=keyword,
                           content=content,
                           summary=summary)





#------------------ADD SELECTED TEXT TO TITLE,KEYWORD,CONTENT,SUMMARY---------------------------
@app.route('/add_to_title', methods=['GET','POST','PATCH'])
def add_to_title():
    selected_text = request.form.get('text', '')
    update_xml(title=selected_text, keyword="", content="", summary="")
    return f'Title: {selected_text} updated'

@app.route('/add_to_keyword', methods=['GET','POST','PATCH'])
def add_to_keyword():
    selected_text = request.form.get('text', '')
    update_xml(title="", keyword=selected_text, content="", summary="")
    return f'Keyword: {selected_text} updated'

@app.route('/add_to_content', methods=['GET','POST','PATCH'])
def add_to_content():
    selected_text = request.form.get('text', '')
    update_xml(title="", keyword="", content=selected_text, summary="")
    return f'Content: {selected_text} updated'

@app.route('/add_to_summary', methods=['GET','POST','PATCH'])
def add_to_summary():
    selected_text = request.form.get('text', '')
    update_xml(title="", keyword="", content="", summary=selected_text)
    return f'Summary: {selected_text} updated'




#---------------------------------------------SAVE DATA-----------------------------
@app.route('/save_data', methods=['PATCH'])
def save_data():
    data = request.data.decode('utf-8')

    # Parse the received XML data
    received_root = ET.fromstring(data)

    # Read the existing XML file
    tree = ET.parse('data.xml')
    root = tree.getroot()

    # Update each element in data.xml with the corresponding values from the received data
    for child in received_root:
        element_name = child.tag
        existing_element = root.find(f"./{element_name}")
        if existing_element is not None:
            existing_element.text = child.text

    # Save the updated XML back to data.xml
    tree.write('data.xml')

    return jsonify({'status': 'success'})




#-----------------------------------------DEBUG-------------------------------

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
