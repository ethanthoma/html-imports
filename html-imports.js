const htmlImports = () =>
	document.querySelectorAll("link[rel=import]").forEach((e) => {
		if (e.hasAttribute("href")) {
			href = e.getAttribute("href");
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						e.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						e.innerHTML = "Page not found.";
					}
					e.style.display = "block";
				}
			};
			xhttp.open("GET", href, true);
			xhttp.send();
		}
	});
htmlImports();
document.addEventListener("htmx:afterSwap", htmlImports);
