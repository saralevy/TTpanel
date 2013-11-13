// start with the option form hidden, openclose set to close and a default background of aqua
var openclose = "close";

$(document).ready(function(){	
	document.getElementById('expandable-panel-content').style.visibility = 'hidden';
	document.getElementById('expandable-panel-heading').style.background = 'aqua';
});

function changeLink()
{
	if (openclose == "close")
	{
		// OPEN: set form to visible, move form to right, set openclose to open
		document.getElementById('expandable-panel-content').style.visibility = "visible";
		document.getElementById('expandable-panel-content').style.zIndex="1";
		$(document.getElementById('expandable-panel-content')).animate({'margin-top':20});			
		$(document.getElementById('expandable-panel-content')).animate({'margin-left':180});			
		document.getElementById('opencloseicon').innerHTML = "<img src=img/close.png>";
		$('#expandable-panel-content').load('TTpanel.html');
		openclose = "open";
	} else {
		// CLOSE: hide form, change icon and set openclose to close
		document.getElementById('expandable-panel-content').style.visibility = 'hidden';
		document.getElementById('expandable-panel-content').style.zIndex="-1";
		document.getElementById('opencloseicon').innerHTML = "<img src=img/open.png>";
		openclose = "close";
	}
}


// One function per modifiable field
// These are called via onchange in the TTpanel.html form

// Update the Twitter Icon
function updatetwIcon(form)
{
	var x = form.twIcon.value;
	document.getElementById('twitIcon').innerHTML = "<img src=\"" + x + "\"/>";
}

// Update the text in the Twitter header
function updatetwText(form)
{
	var x = form.twText.value;
	document.getElementById('twitHeading').innerHTML = "<h2>" + x + "</h2>";
}

// Update the color of the text in the Twitter header
function updatetwHeadFcolor(form)
{
	var x = form.twHeadFcolor.value;
	document.getElementById('expandable-panel-heading').style.color = x;
}

// Update the background color of the Twitter header
function updatetwHeadBcolor(form)
{
	var x = form.twHeadBcolor.value;
	document.getElementById('expandable-panel-heading').style.background = x;
}

// Update the color of the text in the Twitter body
function updatetwBodyTextFcolor(form)
{
	var x = form.twBodyTextFcolor.value;
	var tweets = document.getElementsByClassName("txt");

	for(var i = 0; i < tweets.length; i++) {
		tweets[i].style.color = x;
	}
}

// Update the background color of the entire app
function updatefullBKcolor(form)
{
	var x = form.fullBKcolor.value;
	document.getElementById('twitter-ticker').style.background = x;
}

// Update the timestamp foreground color in the Twitter body
function updatetwBodyTimeFcolor(form)
{
	var x = form.twBodyTimeFcolor.value;
	var tweets = document.getElementsByClassName("time");

	for(var i = 0; i < tweets.length; i++) {
		tweets[i].style.color = x;
	}
}

// Update the timestamp background color in the Twitter tweets
function updatetwBodyBcolor(form)
{
	var x = form.twBodyBcolor.value;
	var tweets = document.getElementsByClassName("tweet");

	for(var i = 0; i < tweets.length; i++) {
		tweets[i].style.background = x;
	}
}

