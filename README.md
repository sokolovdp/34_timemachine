# Timer for Websites 

This project uses "code injection" technique, to inject timer code into pages of different sites. It requires special extension for Chrome browser.

# Installing

To generate **index.js** injection code  was used **staticjinja** package.

Install extension for Chrome browser [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija).

1) Open configuration of [cjs](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) browser extension on the site you want to controll. Click on the link "your own external scripts", add path [TODO в качестве production хостинга файла с JavaScript подойдет GitHub - у каждого файла в репозитории есть свой URL, и этим можно воспользоваться]. Don`t forget to press "enable cjs for this host" to enable custom JS.

Then paste **index.js** with timer code into CJS window.

2) You can also load into CJS short  JS code from file **rawgit_starter.js**,  which will  index.js from RAW GIt CDN is in file: 

CDN link to source JS file is [here](https://cdn.rawgit.com/sokolovdp/34_timemachine/4a3516c3/index.js)



# Project Goals

The code is written for educational purposes. Training course for web-developers - [DEVMAN.org](https://devman.org)
