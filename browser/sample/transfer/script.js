$(document).ready(function () {

	/**
     * Function to update our fee in the view
     */
	function updateFee() {

	}

	/**
     * Build transaction from form data and send
     */
	function send() {

	}

	// On amount change we update fee in view
	$("#amount").on('change keyup paste', function() {
	    updateFee();
	});

	// On message change we update fee in view
	$("#message").on('change keyup paste', function() {
	    updateFee();
	});

	// Call send function when click on send button
	$("#send").click(function() {
	  send();
	});

	// Initialization of fees in view
	updateFee();

});
