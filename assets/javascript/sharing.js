
(function sharing() {

	var config = {
		height: 500,
		width: 500,
		url: "http://www.sz.de/tiananmen",
		text: "Digitalreportage zum Jahrestag des Tiananmen-Massakers:",
		hashtags: "tiananmen",
		author: "von @SZ",
		link: "a.share",
		textPlaceholder: "%TEXT%",
		hashtagsPlaceholder: "%HASHTAGS%",
		urlPlaceholder: "%URL%"
	};

	function init() {

		// Select all sharing buttons with the class '.tracking'
		var links = $(".share");


		// Iteratively replace URLs and bind events
		for (var a = 0; a < links.length; a++) {
			links[a].onclick = openPopup;
		}
	}

	// Replace the placeholder in the sharing link with the URL to be shared
	function replaceUrl(el) {

        var url = this.config.url;
		var oldUrl = el.href;
		var newUrl = oldUrl
			.replace(this.config.urlPlaceholder, url)
			.replace(this.config.textPlaceholder,
				this.config.text.split(' ').join('+') + ' ' + url + ' ' + this.config.author)
			.replace(this.config.hashtagsPlaceholder, this.config.hashtags);
		el.href = encodeURI(newUrl);
	}

	// Opens the sharing link in a new popup
	function openPopup(e) {

		// Ensure compatibility with older browsers
		e = (e ? e : window.event);
		var t = (e.target ? e.target : e.srcElement);

		// Set popup position, if screenwith is not avaiable use preset value
		var px = Math.floor(((screen.availWidth || 1024) - this.config.width) / 2),
			py = Math.floor(((screen.availHeight || 700) - this.config.height) / 2);

		// Open popup
		var popup = window.open(t.href, "social", "width=" + this.config.width +
			",height=" + this.config.height + ",left=" + px + ",top=" + py +
			",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");

		if (popup) {

			popup.focus();

			// Prevents default to have the popup in the same Window and
			// not opening the link in a new tab
			if (e.preventDefault) {
				e.preventDefault();

			}

			e.returnValue = false;
		}

		return !!popup;
	}

}());

