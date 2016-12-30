<script>
		/* Colors are in HSL

		You can find some beautiful colors here: 
		http://rgb.to/hsl/40,100,60

		*/

		/* Choose your colors :)*/
		var redDark = [0, 73, 41];
		var pinkToPurple = [328, 81, 29];
		var bluish = [251, 69, 34];
		var blue = [216, 85, 34];
		var blueGreen = [182, 100, 20];
		var green = [124, 55, 24]

		/* Type your name*/
		var myName = "Eleftheria";
		/* Use an array of colors*/
		var letterColors = [redDark, pinkToPurple, bluish, blue, blueGreen, green];

		/* Shape of letters (square || circle)*/
		/* I will pick "square" that s why I commented on circle*/
		bubbleShape = "square";
		/*
		bubbleShape = "circle";
		*/

		/* Call the function drawName, it takes two parameters, one for the name and one for the color's array*/
		drawName(myName, letterColors);
		/* Call function bounceBubbles. This function does not take any parameters */
		bounceBubbles();
	</script>