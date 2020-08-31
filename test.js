let obj = {
	"/": {
		"title" :"home", 
		"desc": "yo momma"
	},
	"/portofolio/": {
		"title" :"portofolio", 
		"desc": "me"
	}
}

for (k, v in obj.items()) {
	console.log(k);
	console.log(v);
}