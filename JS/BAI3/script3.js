function goBack() {
    alert('This Message Appears When you exit a page!!!!!!!');
    window.location.href = "../home.html";
}

function showGoodbyeMessage() {
    alert('This Message Appears When you exit a page!!!!!!!');
}

window.onbeforeunload = function () {
    return "This Message Appears When you exit a page!!!!!!!";
};