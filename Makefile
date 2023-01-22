sass:
	sass ./sass/style.sass:./css/style.css -s compressed -w

browsersync:
	browser-sync start -c bs-config.js
