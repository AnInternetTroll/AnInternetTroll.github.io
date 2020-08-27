query = new URL(location.href);
query = query.searchParams.get("q"); 
var mainResults = document.createElement("DIV");
// Go through each item and check if it's what the user wants
var output = "";
setTimeout(function() {
	for (i in window.results) {
		if (window.results[i].title.toLowerCase().includes(query)) {
			output += `<h2><a href="${window.results[i].url}">${window.results[i].title}</a></h2><p>${window.results[i].desc}</p>`;
			console.log(output);
		} else {
			output += "";
		}
	}
	if (output.length != 0) {
		mainResults.style.display = "block";
		mainResults.innerHTML = output;
	} else {
		mainResults.innerHTML = "No item could be found";
		// mainResults.style.display = "none";
	}
}, 1000);
window.addEventListener("load", function() {
	setTimeout(function() {
		var article = document.getElementById("article");
		article.innerText = "";
		article.appendChild(mainResults);
	}, 1000)
});