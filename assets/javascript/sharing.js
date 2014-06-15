
(function sharing() {

	var config = {
		height: 500,
		width: 500
	};

	function init() {

		// Select all sharing buttons with the class '.tracking'
		var links = $(".share");


		// Iteratively replace URLs and bind events
		for (var a = 0; a < links.length; a++) {
			links[a].onclick = openPopup;
		}
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

