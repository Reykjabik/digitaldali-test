$(function() {

	var userName;
	var $start = $("#get-started");
	var $time = $("#time");
	var $userInput = $("#username");
	var message1 = "Hey Digital Dali! How do you like my task?";
	var $outputMess1 = $("#outputMessage1");
	var message2 = "Looks good! How about meeting tomorrow for your interview? ;)";
	var $outputMess2 = $("#outputMessage2");

	$start.click(function(ev){
		userName = $userInput.val();
		localStorage.setItem("storedUserName",userName);
		
		// We check that the username is not empty
		if (userName == "") {
			ev.preventDefault();
			alert("Please, write your username");

		// If the username begins with a letter
		} else if(/^[a-zA-Z]/.test(userName)){
			alert("Welcome " + userName + "!");

		// Otherwise it won't be a valid username
		} else {
			ev.preventDefault();
			alert("A valid username cannot only start with letters. Please, try again.");
		}
	});

	// Once we change to the chat page...
	if ($("body").data("title") === "chat") {

		var d = new Date();				// Get current local time
		var amOrPm;						// This variable tells us whether we need AM or PM
		var hour;
		var minutes;
		if(d.getHours() < 12) {			// Any number below 12 doesn't need to change
			amOrPm = "AM";
			hour = d.getHours();

		} else { 
			amOrPm = "PM";
			if(d.getHours() == 12){		// Number 12 should remain as it is
				hour = d.getHours()%13;
			} else {
				hour = "0" + d.getHours()%12;	// Numbers over 12 should go back to 1, 2...
			}							// 13 = 1; 14 = 2; 15 = 3; ...
		}

		// 2 digit numbers. 01 instead of 1; 02 instead of 2, ...
		minutes = (d.getMinutes() < 10? "0":"") + d.getMinutes();

		$time.append("<p>TODAY AT "+ hour + ":" + minutes + " " +  amOrPm + "</p>");

		// ... append the messages to its outputs.
    	$outputMess1.append("<p class=\"message\">" + message1 + "</p>");
    	$outputMess1.append("<p class=\"time\">5 minutes ago - Javier</p>");
    	$outputMess2.append("<p class=\"message\">" + message2 + "</p>");
    	$outputMess2.append("<p class=\"time right\">5 minutes ago - " + localStorage.getItem("storedUserName") + "</p>");
	}
});