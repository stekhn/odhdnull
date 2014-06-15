
$(document).ready(function(){
	sharing.init();
});


var sharing = {

	config: {
		height: 500,
		width: 500,
		url: "http://walterrenner.github.io/odhdnull/",
		text: "Brazillion - Alternatively investing the world cup billions: ",
		hashtags: "worldcup",
		author: "@opendatahackday",
		link: "a.share",
		textPlaceholder: "%TEXT%",
		hashtagsPlaceholder: "%HASHTAGS%",
		urlPlaceholder: "%URL%"
	},

	init: function() {

		// Select all sharing buttons with the class '.tracking'
		var links = $(".share");
		console.log(links);


		// Iteratively replace URLs and bind events
		for (var a = 0; a < links.length; a++) {
			sharing.replaceUrl(links[a]);
			links[a].onclick = sharing.openPopup;
		}
	},

	// Replace the placeholder in the sharing link with the URL to be shared
	replaceUrl: function(el) {
        var url = sharing.config.url;
		var oldUrl = el.href;
		var newUrl = oldUrl
			.replace(sharing.config.urlPlaceholder, url)
			.replace(sharing.config.textPlaceholder,
				sharing.config.text.split(' ').join('+') + ' ' + url + ' ' + sharing.config.author)
			.replace(sharing.config.hashtagsPlaceholder, sharing.config.hashtags);
		el.href = encodeURI(newUrl);
	},

	// Opens the sharing link in a new popup
	openPopup: function(e) {

		// Ensure compatibility with older browsers
		e = (e ? e : window.event);
		var t = (e.target ? e.target : e.srcElement);

		// Set popup position, if screenwith is not avaiable use preset value
		var px = Math.floor(((screen.availWidth || 1024) - sharing.config.width) / 2),
			py = Math.floor(((screen.availHeight || 700) - sharing.config.height) / 2);

		// Open popup
		var popup = window.open(t.href, "social", "width=" + sharing.config.width +
			",height=" + sharing.config.height + ",left=" + px + ",top=" + py +
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
};

