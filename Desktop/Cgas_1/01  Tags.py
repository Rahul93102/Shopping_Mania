import requests
from bs4 import BeautifulSoup

with open("sample.html","r") as f: 
    html_doc = f.read()
    
soup = BeautifulSoup(html_doc,'html.parser')

# print(soup.prettify())

# print(soup.title,type(soup.title))
# print(soup.title) to get exact string details or name of the details there ==>  string print(soup.title.string)
# print(soup.div)

# print(soup.p['class']) # give the class of the p tag there

# print(soup.find_all('div')) # prints all the div elements present inside there

# print(soup.find(id="link3"))

# print(soup.find(_class="rahul1")) _ is added because here class is the reserved keyword


# print(soup.get_text()) # gives all the text from the page


# Get the url from the page : 
# for link in soup.find_all('a'):
    # print(link.get('href'))

# gives the class and id
# print(soup.select('div.italic'))
# print(soup.select('div#italic'))
 
    
# for rahul_div in soup.find_all(class_="rahul"):
    #for child in rahul_div.children:
    #print(child)
   
         
# find the name of the class and name
    # contd = soup.find(class_="rahul")
    # contd.name = "span"
    # contd["class"] = "myclass"
    # print(contd)
    
    
# Adding new content of tags
    # newtag = soup.new_tag('ul')

    # litag = soup.new_tag('li')
    # litag.string = 'Home'
    # newtag.append(litag)

    # litag = soup.new_tag('li')
    # litag.string = 'About'
    # newtag.append(litag)
    # print(newtag.prettify())


# def has_class_not_attr(tag): 
#     return tag.has_attr("class") and not tag.has_attr("id")

# result = soup.find_all(has_class_not_attr)
# print(result,"\n\n")