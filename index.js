$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

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
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        // Remove "Yes" and "No" buttons when closing the envelope
        removeYesNoButtons();
        // Show the "Open for a surprise" button
        btn_open.show();
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
                showMessage("I respect that! Have a great day! 😁");
            });
        }
    }
    

    function removeYesNoButtons() {
        // Remove the "Yes" and "No" buttons and the wrapper div
        $(".yes-no-buttons").remove();
    }

    function showMessage(message) {
        // Create a message div and append it to the envelope
        var messageDiv = $("<div>")
            .addClass("message")
            .text(message);
        envelope.append(messageDiv);

        // Remove the message after a delay (adjust the delay as needed)
        setTimeout(function () {
            messageDiv.remove();
        }, 3000); // Remove the message after 3 seconds
    }
});

