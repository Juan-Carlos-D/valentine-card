$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var messageContainer = $(".message-container");

    envelope.click(function () {
        openEnvelope();
    });

    btn_open.click(function () {
        openEnvelope();
    });

    btn_reset.click(function () {
        closeEnvelope();
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        // Add "Yes" and "No" buttons after opening the envelope
        addYesNoButtons();
        // Hide the "Open for a surprise" button
        btn_open.hide();
        // Show the "Seal & Return" button
        btn_reset.show();
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        // Remove "Yes" and "No" buttons when closing the envelope
        removeYesNoButtons();
        // Show the "Open for a surprise" button
        btn_open.show();
        // Hide the "Seal & Return" button
        btn_reset.hide();
    }

    function addYesNoButtons() {
        // Check if buttons have been added before
        if ($(".yes-no-buttons").length === 0) {
            // Create a wrapper div for centering the buttons
            var buttonsWrapper = $("<div>").addClass("yes-no-buttons");
            envelope.append(buttonsWrapper);

            // Create and append the "Yes" button
            var btnYes = $("<button>")
                .attr("id", "btn_yes")
                .text("Yes")
                .addClass("yes-button")
                .hide(); // Initially hide the button
            buttonsWrapper.append(btnYes);

            // Create and append the "No" button
            var btnNo = $("<button>")
                .attr("id", "btn_no")
                .text("No")
                .addClass("no-button")
                .hide(); // Initially hide the button
            buttonsWrapper.append(btnNo);

            // Show the buttons with a delay (adjust the delay as needed)
            setTimeout(function () {
                btnYes.show();
                btnNo.show();
            }, 600);

            // Add event listeners
            btnYes.off("click").on("click", function () {
                showMessage("😍😍😍😍😍");
            });

            btnNo.off("click").on("click", function () {
                showMessage("I think your finger slipped 😁");
            });
        }
    }

    function removeYesNoButtons() {
        // Remove the "Yes" and "No" buttons and the wrapper div
        $(".yes-no-buttons").remove();
    }

    function showMessage(message) {
        // Check if message container exists, otherwise create it
        if (messageContainer.length === 0) {
            messageContainer = $("<div>").addClass("message-container");
            $("body").append(messageContainer);
        }
    
        // Create a message div and append it to the container
        var messageDiv = $("<div>")
            .addClass("message")
            .text(message);
    
        // Append the message div to the container
        messageContainer.append(messageDiv);
    
        // Fade out and remove the message after a delay (adjust the delay as needed)
        setTimeout(function () {
            messageDiv.fadeOut(500, function () {
                messageContainer.remove();
            });
        }, 3000); // Fade out the message after 3 seconds
    }
    
});
