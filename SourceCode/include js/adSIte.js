const subBtn = document.getElementById("submitbtn");

const mainDiv = document.getElementById("main");

function ChangeText()
{
    mainDiv.innerHTML="<h1>Thank you!</h1><p>Your information has been received and is beingprocessed we will contact you later</p>";
}

subBtn.onclick = ChangeText;



