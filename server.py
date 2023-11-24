from flask import Flask, render_template, request
import xml.etree.ElementTree as ET

app = Flask(__name__)

#-------------------------------------------------Function to update XML data-------------------
def update_xml(title, keyword, content, summary):
    tree = ET.parse('data.xml')
    root = tree.getroot()

    root.find('./information/title').text = title
    root.find('./information/keyword').text = keyword
    root.find('./information/content').text = content
    root.find('./information/summary').text = summary

    tree.write('data.xml', xml_declaration=True, encoding='UTF-8')

#------------------------------------------------------Display XML route-----------------------
@app.route('/')
def display_xml():
    tree = ET.parse('data.xml')
    root = tree.getroot()

    title = root.find('./information/title').text
    keyword = root.find('./information/keyword').text
    content = root.find('./information/content').text
    summary = root.find('./information/summary').text

    return render_template('cornellnote.html',
                           title=title,
                           keyword=keyword,
                           content=content,
                           summary=summary)

#---------------------------------------------------------------Save XML route---------------
@app.route('/save', methods=['POST'])
def save_xml():
    title = request.form['title']
    keyword = request.form['keyword']
    content = request.form['content']
    summary = request.form['summary']

    update_xml(title, keyword, content, summary)

    return "Data saved successfully!"


#-----------------------------------------DEBUG-------------------------------

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
