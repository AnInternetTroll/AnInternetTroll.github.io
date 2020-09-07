window.addEventListener("load", function () {
	options = {
		html: true, // Enable HTML tags in source
		xhtmlOut: true, // Use '/' to close single tags (<br />).
		// This is only for full CommonMark compatibility.
		breaks: true, // Convert '\n' in paragraphs into <br>
		langPrefix: "language-", // CSS language prefix for fenced blocks. Can be
		// useful for external highlighters.
		linkify: true, // Autoconvert URL-like text to links

		// Enable some language-neutral replacement + quotes beautification
		typographer: false,

		// Double + single quotes replacement pairs, when typographer enabled,
		// and smartquotes on. Could be either a String or an Array.
		//
		// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
		// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
		quotes: "“”‘’" /*) {
			return "";
		},
		*/,

		// Highlighter function. Should return escaped HTML,
		// or '' if the source string is not changed and should be escaped externally.
		// If result starts with <pre... internal wrapper is skipped.
		/*
		highlight: function (/*str, lang*/
	};
	let converter = window.markdownit(options);
	fetch("article.md")
		.then((response) => response.text())
		.then(function (text) {
			markdownText = converter.render(text);
			let article = document.createElement("ARTICLE");
			let container = document.createElement("DIV");
			container.setAttribute("class", "container");
			container.setAttribute("id", "article");
			container.innerHTML = markdownText;
			article.appendChild(container);
			document.body.appendChild(article);
		});
});
