// Load nem-browser library
var nem = require("nem-sdk").default;

// Connect using connector
function connect(connector){

}

function reconnect() {

}

function start(address) {

}

$(document).ready(function () {
    // Call connect function when click on start button
    $("#start").click(function() {
      start($("#address").val());
    });
});


