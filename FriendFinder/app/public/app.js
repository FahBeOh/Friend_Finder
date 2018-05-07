$(".btn").on("click", function(event) {
    // Form validation
    if (($("#nameInput").val().trim() == "") || ($("#urlInput").val().trim() == "")){
        event.preventDefault();
        alert("Friends need names and photos!");
        location.reload();
    }
    else {

    event.preventDefault();
    // Take user input and parse into JSON
    var userResults = {
        name: $("#nameInput").val().trim(),
        photo:$("#urlInput").val().trim(),
        scores:[
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };
    // Send user data to controller
    $.post("/api/friends", userResults, function (data){
        // Take data recieved from server "bestFriend match data", and update modal with data and display modal
        if (data) {
            console.log(data)
            $(".modal-body").html(`<h3>${data.name}!</h`);
            $(".modal").modal('toggle');
        };
    });
    // Reset form
    $("#nameInput").val("")
    $("#urlInput").val("")
    $("#q1").val("1");
    $("#q2").val("1");
    $("#q3").val("1");
    $("#q4").val("1");
    $("#q5").val("1");
    $("#q6").val("1");
    $("#q7").val("1");
    $("#q8").val("1");
    $("#q9").val("1");
    $("#q10").val("1");
}})