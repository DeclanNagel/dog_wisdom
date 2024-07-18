//daily message project 

//daily messages
//const Messages = ['Be yourself; everyone else is already taken','Happiness is not by chance, but by choice','Strive not to be a success, but rather to be of value', 'None but ourselves can free our minds.'];
//generates random index
//let randomIndex = Math.random() * Messages.length; 



function getAnswer() {
    var answer = document.getElementsByName("answer");

    const Messages = ['Be yourself; everyone else is already taken', 'Happiness is not by chance, but by choice', 'Strive not to be a success, but rather to be of value', 'None but ourselves can free our minds.'];
    
    var outputDiv = document.getElementById("output");
    var selectedAnswer = "";

    for (var i = 0; i < answer.length; i++) {
        if(answer[i].checked) {
            selectedAnswer = answer[i].value;
            break;
        }
    }

    if (selectedAnswer === "yes") {
        var randomIndex = Math.floor(Math.random() * Messages.length);
        outputDiv.innerText = Messages[randomIndex];
    } else {
        outputDiv.innerText = "get out of here or else i will bite you hehe";
    }

};

