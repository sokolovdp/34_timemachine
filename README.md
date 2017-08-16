# Timer for Websites 

This project uses "code injection" technique, to inject timer code into pages of different sites. 
For "injection"  we use extension **CJS** for Chrome browser [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija).

# Installing

To generate injection timer code run **generator.py** script (depends on staticjinja ver 0.3.3 package)
Code will be generated in the directory **/timer**. Then run shell file **start_http_server.bat** 
to start local http server, after this you can use url http://localhost:8000/index.js  to include in CJS

1) Open configuration of CJS click on the link "your own external scripts" browser extension on the site 
you want to control time, then paste http://localhost:8000/index.js link.

2) Timer code was uploaded to CDN [RawGit](https://rawgit.com/), so you can also the following link:  
https://cdn.rawgit.com/sokolovdp/34_timemachine/4a3516c3/index.js

3) You can upload into CJS short JS code from file **rawgit_starter.js**,  which will upload index.js from RawGit



# Project Goals

The code is written for educational purposes. Training course for web-developers - [DEVMAN.org](https://devman.org)
