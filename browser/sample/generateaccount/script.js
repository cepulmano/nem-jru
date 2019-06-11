//import the nem-sdk
// This is not needed if you use the repl.js script available in the container
var nem = require("nem-sdk").default;

$(document).ready(function () {


    function generate() {

    }

    $("#generate").click(function() {
        account = generate();
        $('#privatekey').val(account.PRIVATE_KEY);
        $('#publickey').val(account.PUBLIC_KEY);
        $('#address').val(account.ADDRESS);
    });

});