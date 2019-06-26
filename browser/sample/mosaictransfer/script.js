$(document).ready(function () {


	/**     * Function to update our fee in the view
     */
	function updateFee() {

	}

	/**
     * Build transaction from form data and send
     */
	function send() {

	}

	/**
     * Function to attach a mosaic to the transferTransaction object
     */
	function attachMosaic() {

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

	// Call attachMosaic function when click on attachMosaic button
	$("#attachMosaic").click(function() {
	  attachMosaic();
	});

	// Initialization of fees in view
	updateFee();

});
