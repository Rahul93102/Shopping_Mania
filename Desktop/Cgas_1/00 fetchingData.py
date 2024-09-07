from bs4 import BeautifulSoup
import requests

# basic saving the contennt inside some path and url there 
def fetch_and_save_news_in_file(url,path):
    r = requests.get(url)
    with open(path,'w') as f:
        f.write(r.text)
    
url = "https://timesofindia.indiatimes.com/city/lucknow/no-schools-mkts-or-farming-life-comes-to-a-halt-in-wolf-territory/articleshow/113104947.cms"
fetch_and_save_news_in_file(url,'data/tmes.html')
    
    