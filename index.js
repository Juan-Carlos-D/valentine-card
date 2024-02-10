$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_yes = $(".yes-btn");

    envelope.click(function () {
        open();
    });

    btn_open.click(function () {
        open();
    });

    btn_reset.click(function () {
        close();
    });

    btn_yes.click(function () {
        showHeart(btn_yes);
        highlightYesButton();
        // Add your additional effects and logic here
        // For example, you can show a message, play a sound, or redirect to another page
        alert("Thank you for saying Yes!");
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }

    function showHeart(button) {
        // Implement the logic to show hearts or any other effects
        // You can customize this function based on your requirements
    }

    function highlightYesButton() {
        // Implement the logic to highlight the "Yes" button
        // You can customize this function based on your requirements
    }
});

