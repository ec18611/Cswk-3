
function hoverOverD1()
	{
	document.getElementById("Dude1").src="TextHairdresser1.jpg";
	
	}
				
function moveAwayD1()
	{
	document.getElementById("Dude1").src="Hairdresser1.jpg";
	}
	
function hoverOverD2()
	{
	document.getElementById("Dude2").src="TextHairdresser2.png";
	
	}
		
			
function moveAwayD2()
	{
	document.getElementById("Dude2").src="Hairdresser2.png";
	}
	
	
function hoverOverD3()
	{
	document.getElementById("Dude3").src="TextHairdresser3.jpg";
	
	}
		
			
function moveAwayD3()
	{
	document.getElementById("Dude3").src="Hairdresser3.jpg";
	}


function hoverOverD4()
	{
	document.getElementById("Dude4").src="TextHairdresser4.jpg";
	
	}
		
			
function moveAwayD4()
	{
	document.getElementById("Dude4").src="Hairdresser4.jpg";
	}

function init()
	{
		document.getElementById("Dude1").onmouseover = hoverOverD1;
		document.getElementById("Dude1").onmouseout = moveAwayD1;
		
		document.getElementById("Dude2").onmouseover = hoverOverD2;
		document.getElementById("Dude2").onmouseout = moveAwayD2;
		
		document.getElementById("Dude3").onmouseover = hoverOverD3;
		document.getElementById("Dude3").onmouseout = moveAwayD3;
			
		document.getElementById("Dude4").onmouseover = hoverOverD4;
		document.getElementById("Dude4").onmouseout = moveAwayD4;
	
	}
	
window.onload = init;
		