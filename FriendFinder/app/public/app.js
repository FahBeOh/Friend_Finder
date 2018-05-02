$(".btn").on("click", function(event) {
    event.preventDefault();

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

    console.log(userResults);

    $.post("/api/friends", userResults, function (data){
        if (data) {
            console.log(data)
        }
    })
})