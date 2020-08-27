window.addEventListener('load', function() {
	var converter = new showdown.Converter();
	fetch('article.md').then(response => response.text()).then(function(text) {
		markdownText = converter.makeHtml(text);
		var article = document.createElement('ARTICLE');
		var container = document.createElement('DIV');
		container.setAttribute('class', 'container');
		container.setAttribute('id', 'article');
		container.innerHTML = markdownText;
		article.appendChild(container);
		document.body.appendChild(article);
	});
});