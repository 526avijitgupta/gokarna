from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import sys

BASE_URL = 'http://localhost:1313'
options = Options()
options.add_argument("--headless")
driver = webdriver.Firefox(options=options)
screenshot_options = [
    {'path': '/', 'filename': 'screenshot-{color_pref}-home.png', 'resize': ''},
    {'path': '/posts/', 'filename': 'screenshot-{color_pref}-list.png', 'resize': ''}
]

for opt in screenshot_options:
    driver.get(BASE_URL + opt['path'])
    driver.save_screenshot(opt['filename'].format(color_pref='color-a'))
    for elem in driver.find_elements_by_class_name('dark-theme-toggle'):
        try:
            elem.click()
            print('Clicked')
        except:
            print('Except')
            pass
    driver.save_screenshot(opt['filename'].format(color_pref='color-b'))

    if opt['resize']:
        break

driver.quit()
