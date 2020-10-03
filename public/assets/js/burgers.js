$(document).ready(function() {

    $("#burgerInput").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),

            //   sleepy: $("[name=sleepy]:checked").val().trim()
        };

        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



    $(function() {
        $(".change-devoured").on("click", function(event) {
            console.log("button works!");
            var id = $(this).data("id");
            var newDevoured = $(this).data("newDevoured");

            var newDevouredState = {
                devoured: newDevoured
            };

            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevouredState
            }).then(
                function() {
                    console.log("changed  to", newDevoured);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });




        $(".delete-burger").on("click", function(event) {
            console.log("button works!");
            var id = $(this).data("id");

            // Send the DELETE request.
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(
                function() {
                    console.log("deleted burger", id);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });





    });
});