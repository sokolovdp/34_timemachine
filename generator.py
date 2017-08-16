from staticjinja import make_site

index_html_context = {
    'background_color': 'lightblue',
    'number_p': 11}

index_js_context = {
    'timer_style': 'width: 150px; height: 50px; position: fixed; background: rgba(0, 0, 0, 0);z-index: +999999; padding: 5px auto; border: 2px solid black;',
    'image_style': 'height: 50px; float: left;',
    'text_style': 'float: left; height: 50px; font-size: 38px; vertical-align:middle;line-height: 50px;',
    'audio': True}

if __name__ == "__main__":
    site = make_site(outpath='timer', contexts=[
        ('index.html', index_html_context),
        ('index.js', index_js_context)])
    site.render()
