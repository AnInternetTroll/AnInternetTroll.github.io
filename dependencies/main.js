// Dependency object that everything else 
// should be thrown into
var dependencies = document.createElement("dependencies");

// Javascript dependencies
// External first, then local
var showdown = document.createElement("SCRIPT");
showdown.setAttribute("src", "https://unpkg.com/showdown/dist/showdown.min.js");
dependencies.appendChild(showdown);

var jQuery = document.createElement("SCRIPT");
jQuery.setAttribute("src", "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js");
// jQuery.setAttribute("integrity", "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj");
jQuery.setAttribute("crossorigin", "anonymous");
jQuery.defer = true;
dependencies.appendChild(jQuery);

var Popper = document.createElement("SCRIPT");
Popper.setAttribute("src", "https://code.jquery.com/jquery-3.5.1.slim.min.js");
// Popper.setAttribute("integrity", "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN");
Popper.setAttribute("crossorigin", "anonymous");
dependencies.appendChild(Popper);

var BootstrapJS = document.createElement("SCRIPT");
BootstrapJS.setAttribute("src", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js");
// BootstrapJS.setAttribute("integrity", "sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV");
BootstrapJS.setAttribute("crossorigin", "anonymous");
dependencies.appendChild(BootstrapJS);

var content = document.createElement("SCRIPT");
content.setAttribute("src", "/dependencies/content.js");
content.defer = true;
dependencies.appendChild(content);

var NavJS = document.createElement("SCRIPT");
NavJS.setAttribute("src", "/dependencies/nav.js");
dependencies.appendChild(NavJS);

if (location.pathname.includes("search")) {
	var SearchJS = document.createElement("SCRIPT");
	SearchJS.setAttribute("src", "/dependencies/search.js");
	dependencies.appendChild(SearchJS);
}

// CSS dependencies
// External first, then local

var BootstrapCSS = document.createElement("LINK");
BootstrapCSS.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
BootstrapCSS.setAttribute("integrity", "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z");
BootstrapCSS.setAttribute("crossorigin", "anonymous");
BootstrapCSS.setAttribute("rel", "stylesheet");
dependencies.appendChild(BootstrapCSS);

var MainCSS = document.createElement("LINK");
MainCSS.setAttribute("rel", "stylesheet");
MainCSS.setAttribute("href", "/dependencies/main.css");
dependencies.appendChild(MainCSS)

// HTML reused code
fetch('/dependencies/nav.html')
	.then(response => response.text())
	.then(function(text){
		var navbar = document.createElement("NAV");
		navbar.innerHTML = text;
		dependencies.appendChild(navbar);
});

// Misc
var ViewPort = document.createElement("META");
ViewPort.setAttribute("name", "viewport");
ViewPort.setAttribute("content", "width=device-width, initial-scale=1.0");
dependencies.appendChild(ViewPort);

var CharSet = document.createElement("META");
CharSet.setAttribute("charset", "utf-8");
dependencies.appendChild(CharSet)

document.body.appendChild(dependencies);
