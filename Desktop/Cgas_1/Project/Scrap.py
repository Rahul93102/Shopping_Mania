import requests
from bs4 import BeautifulSoup

# URL of the page you want to scrape
url = "https://www.tasteatlas.com/india"
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')
    
# Find all elements with the class 'specific-result_item-description' (adjust class name if needed)
descriptions = soup.select('div.search-results__item-info')
print(descriptions)

# Loop through the descriptions and extract the <p> tag content
for desc in descriptions:
    p_tag = desc.find('p')
    if p_tag:
        print(p_tag)
        print(p_tag.get_text())
