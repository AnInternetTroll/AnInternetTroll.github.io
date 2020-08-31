// Dependency object that everything else 
// should be thrown into
let dependencies = document.createElement("dependencies");
// Javascript dependencies
// External first, then local
// Markdown converter
var showdown = document.createElement("SCRIPT");
showdown.setAttribute("src", "https://unpkg.com/showdown/dist/showdown.min.js");
dependencies.appendChild(showdown);
// JavaScript that writes the main content
let content = document.createElement("SCRIPT");
content.setAttribute("src", "/dependencies/content.js");
content.defer = true;
dependencies.appendChild(content);
// JavaScript helper for the navigation bar
let NavJS = document.createElement("SCRIPT");
NavJS.setAttribute("src", "/dependencies/nav.js");
dependencies.appendChild(NavJS);
// Specific JavaScript for the search page
if (location.pathname.includes("search")) {
	let SearchJS = document.createElement("SCRIPT");
	SearchJS.setAttribute("src", "/dependencies/search.js");
	dependencies.appendChild(SearchJS);
}
// CSS dependencies
// External first, then local
let MainCSS = document.createElement("LINK");
MainCSS.setAttribute("rel", "stylesheet");
MainCSS.setAttribute("href", "/dependencies/main.css");
dependencies.appendChild(MainCSS)
// HTML reused code
fetch('/dependencies/nav.html').then(response => response.text()).then(function(text) {
	let navbar = document.createElement("NAV");
	navbar.innerHTML = text;
	document.body.appendChild(navbar);
});
// Misc
let ViewPort = document.createElement("META");
ViewPort.setAttribute("name", "viewport");
ViewPort.setAttribute("content", "width=device-width, initial-scale=1.0");
dependencies.appendChild(ViewPort);
let CharSet = document.createElement("META");
CharSet.setAttribute("charset", "utf-8");
dependencies.appendChild(CharSet)
document.body.appendChild(dependencies);