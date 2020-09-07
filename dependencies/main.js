// VERY IMPORTANT EARLY STUFF
fetch("/dependencies/results.json")
	.then((response) => response.json())
	.then((data) => (window.results = data))
	.then(function (data) {
		let currentPage = window.results[location.pathname];
		// Title
		let titlePage = document.createElement("TITLE");
		titlePage.innerText = currentPage.title;
		document.body.appendChild(titlePage);
		// Embed stuff
		// Title (again)
		let embedTitle = document.createElement("META");
		embedTitle.setAttribute("property", "og:title");
		embedTitle.setAttribute("content", currentPage.title);
		document.head.appendChild(embedTitle);
		// Description
		let embedDescription = document.createElement("META");
		embedDescription.setAttribute("property", "og:description");
		embedDescription.setAttribute("content", currentPage.desc);
		document.head.appendChild(embedDescription);
		// Image
		if (currentPage.img) {
			let embedImage = document.createElement("META");
			embedImage.setAttribute("property", "og:image");
			embedImage.setAttribute("content", currentPage.img);
			document.head.appendChild(embedImage);
		}
		// URL
		let embedUrl = document.createElement("META");
		embedUrl.setAttribute("property", "og:url");
		embedUrl.setAttribute("content", location.href);
		document.head.appendChild(embedUrl);
	});
// Dependency object that everything else
// should be thrown into
let dependencies = document.createElement("dependencies");
// Javascript dependencies
// External first, then local
// Markdown converter
var showdown = document.createElement("SCRIPT");
showdown.setAttribute(
	"src",
	"https://cdnjs.cloudflare.com/ajax/libs/markdown-it/11.0.0/markdown-it.min.js"
);
showdown.setAttribute(
	"integrity",
	"sha512-0tDdhRf9dcDufaaOQQdvywK56y+cwomy6rjOrqk05N61cQOTdO2Cqqgq8EfXVBDXJe0TH9smqvDicQzMiBG14g=="
);
showdown.setAttribute("crossorigin", "anonymous");
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
dependencies.appendChild(MainCSS);
// HTML reused code
fetch("/dependencies/nav.html")
	.then((response) => response.text())
	.then(function (text) {
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
dependencies.appendChild(CharSet);
document.body.appendChild(dependencies);
