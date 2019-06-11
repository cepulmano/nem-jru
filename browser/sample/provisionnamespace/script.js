// Load nem-browser library
var nem = require("nem-sdk").default;

$(document).ready(function () {

	/**
     * Function to update our fee in the view
     */
	function updateFee() {

	}

	/**
     * Build transaction from form data and send
     */
	function rent() {

	}

	// On amount change we update fee in view
	$("#parentname").on('change keyup paste', function() {
	    updateFee();
	});

	// On message change we update fee in view
	$("#namespacename").on('change keyup paste', function() {
	    updateFee();
	});

	// Call send function when click on send button
	$("#rent").click(function() {
	  rent();
	});

});