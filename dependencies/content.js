window.addEventListener('load', function() {
	let converter = new showdown.Converter();
	converter.setFlavor('github');
	converter.setOption('simplifiedAutoLink', true);
	converter.setOption('strikethrough', true);
	converter.setOption('tables', true);
	converter.setOption('tasklists', true);
	converter.setOption('emoji', true);
	converter.setOption('underline', true);
	fetch('article.md').then(response => response.text()).then(function(text) {
		markdownText = converter.makeHtml(text);
		let article = document.createElement('ARTICLE');
		let container = document.createElement('DIV');
		container.setAttribute('class', 'container');
		container.setAttribute('id', 'article');
		container.innerHTML = markdownText;
		article.appendChild(container);
		document.body.appendChild(article);
	});
});