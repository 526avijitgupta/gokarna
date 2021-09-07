from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from PIL import Image
import os


"""
Setup:
    pip install selenium pillow

    Add geckodriver to $PATH. Link: https://github.com/mozilla/geckodriver/releases
"""

BASE_URL = 'http://localhost:1313'
options = Options()
if os.path.exists('/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox'):
    options.binary_location = '/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox'
options.add_argument('--headless')
DRIVER = webdriver.Firefox(options=options)
# To offset screen size based on window size
DRIVER.set_window_size(1500, 1085)

SCREENSHOT_OPTIONS = [
    {'path': '/', 'filename': 'images/screenshot-{color_pref}-home.png'},
    {'path': '/posts/', 'filename': 'images/screenshot-{color_pref}-list.png'},
    {'path': '/posts/theme-documentation-basics/', 'filename': 'images/screenshot-{color_pref}-post.png'},
]

DARK_THEME = (34, 39, 45, 255)
LIGHT_THEME = (255, 255, 255, 255)

def get_dominant_color(img_path):
    pil_img = Image.open(img_path)
    img = pil_img.copy()
    img.convert("RGB")
    img.resize((1, 1), resample=0)
    dominant_color = img.getpixel((0, 0))
    return dominant_color

def take_screenshots(driver, screenshot_options):
    for opt in screenshot_options:
        driver.get(BASE_URL + opt['path'])
        color_a_filename = opt['filename'].format(color_pref='color-a')
        color_b_filename = opt['filename'].format(color_pref='color-b')

        driver.save_screenshot(color_a_filename)

        # Change theme by clicking the theme toggle button
        for elem in driver.find_elements_by_class_name('dark-theme-toggle'):
            # Hidden hamburger menu for mobile raises Exception on clicking
            if elem.is_displayed():
                elem.click()

        driver.save_screenshot(color_b_filename)

        for f in (color_a_filename, color_b_filename):
            if get_dominant_color(f) == LIGHT_THEME:
                os.rename(f, opt['filename'].format(color_pref='light'))
            elif get_dominant_color(f) == DARK_THEME:
                os.rename(f, opt['filename'].format(color_pref='dark'))
            else:
                raise Exception('Image does not match theme')

        print(f'Saved {opt["path"]}')

def merge_home_images():
    light_home = Image.open('images/screenshot-light-home.png')
    dark_home = Image.open('images/screenshot-dark-home.png')
    if light_home.size != dark_home.size:
        raise Exception('Image sizes should be same')

    width, height = light_home.size

    light_home_half = light_home.crop((0, 0, int(width/2), height))
    dark_home_half = dark_home.crop((int(width/2), 0, width, height))

    merged_img = Image.new('RGB', (width, height))
    # Since we are merging horizontally, we will keep the offset of x-axis
    x_offset = 0
    for img in (light_home_half, dark_home_half):
        merged_img.paste(img, (x_offset, 0))
        x_offset += img.size[0]

    merged_img.save('images/screenshot.png')
    merged_img.save('images/tn.png')
    print('Created merged image for hugo showcase')

take_screenshots(DRIVER, SCREENSHOT_OPTIONS)
merge_home_images()
DRIVER.quit()
