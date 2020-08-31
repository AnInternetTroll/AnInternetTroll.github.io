fetch("/dependencies/results.json").then(response => response.json()).then(data => window.results = data);
window.addEventListener("load", function() {
	let searchBox = document.getElementById("searchBox");
	let resultBox = document.getElementById("livesearch");
	searchBox.addEventListener("input", function() {
		// console.log(searchBox.value);

		// Go through each item and check if it's what the user wants
		window.output = "";
		for (i in window.results) {
			if (window.results[i].title.toLowerCase().includes(searchBox.value.toLowerCase())) {
				window.output += `<a href="${window.results[i].url}">${window.results[i].title}</a><br />`;
				// console.log(window.results[i]);
			} else {
				window.output += "";
			}
		}
		if (window.output.length != 0 && searchBox.value.length != 0) {
			resultBox.style.display = "block";
			resultBox.innerHTML = window.output;
		} else {
			resultBox.style.display = "none";
		}
	});
});