/* app.js - Joshua Eagles - 301078033 - 2020-10-08 */

let titleSuffix = " - Joshua Eagles Portfolio";

if (document.title == "Contact Me" + titleSuffix)
{
	let submitButton = document.getElementById("submit");

	// Adds an event listener for the submit button that will print the form to the console and then redirect to the home page
	submitButton.addEventListener("click", (event) => 
	{
		event.preventDefault();

		let firstName = document.getElementById("firstName").value;
		let lastName = document.getElementById("lastName").value;
		let contactNumber = document.getElementById("contactNumber").value;
		let email = document.getElementById("email").value;
		let message = document.getElementById("message").value;

		let returnMessage = "First Name: " + firstName;
		returnMessage += "\nLast Name: " + lastName;
		returnMessage += "\nContact Number: " + contactNumber;
		returnMessage += "\nEmail: " + email;
		returnMessage += "\nMessage: " + message;

		window.alert(returnMessage);

		window.location.href="/home";
	});
}
