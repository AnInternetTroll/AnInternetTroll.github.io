query = new URL(location.href);
query = query.searchParams.get("q").toLowerCase();
let mainResults = document.createElement("DIV");
// Go through each item and check if it's what the user wants
setTimeout(function() {
	let results = window.results;
	let output = "";
	for (i in results) {
		if (window.results[i].hidden != true) {
			if (results[i].title.toLowerCase().includes(query)) {
				output += `<h2><a href="${results[i].url}">${results[i].title}</a></h2><p>${results[i].desc}</p>`;
			} else {
				output += "";
			}
		}
	}
	if (output.length != 0) {
		mainResults.style.display = "block";
		mainResults.innerHTML = output;
	} else {
		mainResults.innerHTML = "No item could be found";
		// mainResults.style.display = "none";
	}
}, 400);
window.addEventListener("load", function() {
	setTimeout(function() {
		let article = document.getElementById("article");
		article.innerText = "";
		article.appendChild(mainResults);
	}, 200);
});