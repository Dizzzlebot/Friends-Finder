// var config = {
//     ".chosen-select": {},
//     ".chosen-select-deselect": {
//         allow_single_deselect: true
//     },
//     ".chosen-select-no-single": {
//         disable_search_threshold: 10
//     },
//     ".chosen-select-no-results": {
//         no_results_text: "Oops, nothing found"
//     },
//     ".chosen-select-width": {
//         width: "95%"
//     }

// };

//for (var selector in config) {
//  $(selector).chosen(config[selector]);
//}


// function validateForm() {
//   var isValid = true;
// $(".form-control").each(function () {
//   if ($(this).val() === "") {
//      isValid = false;
//   }
// });
// (".chosen-select").each(function () {

//   if ($(this).val() === "") {
//      isValid = false;
//  }



//});
// if (validateForm()) {

$("#submit-btn").on("click", (event) => {
    event.preventDefault();
    console.log("clicked");


    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val(),

        ]
    };

    $("#q10").val(""),

        // var currentURL = window.location.origin;

        $.post("/api/friends", userData, function (data) {
            console.log(data);
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);

            $("#resultModal").modal("toggle");
            alert("working");
        })
});