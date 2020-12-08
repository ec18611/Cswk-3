  /* This is to demonstrate how we use javascript to enable the tab content in the verticle tabs to be hiddin using Javascrpit */

function openTab(evt, name) {
	// step one declare all variables
  var i, tabcontent, tablinks;
  // step two get all elements with class="tabcontent" and hide them
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // step three get all elements with class="tablinks" and remove the class "active"
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // step four show the current tab, and add an "active" class to the link that opened the tab
  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// last step show the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

  /* This is to demonstrate hovering over images */

function init()
	{
		document.getElementById("bgirl").onmouseover = hoverOverD1;
		document.getElementById("bgirl").onmouseout = moveAwayD1;
		
		document.getElementById("bboy").onmouseover = hoverOverD2;
		document.getElementById("bboy").onmouseout = moveAwayD2;
	
	}
	
window.onload = init;


function hoverOverD1()
	{
	document.getElementById("bgirl").src="bgirl.png";
	
	}
				
function moveAwayD1()
	{
	document.getElementById("bgirl").src="bgirl.png";
	}
	
function hoverOverD2()
	{
	document.getElementById("bboy").src="bboy.png";
	
	}
		
			
function moveAwayD2()
	{
	document.getElementById("bboy").src="bboy.png";

	}
 