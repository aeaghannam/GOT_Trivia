// Abe’s Operational JS Comments: Last updated on 2017.04.05





//Abe comment pos variable added for progress tracking....(chA-chC = multidimensional array  Question array)

var pos = 0,
    test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// I attempted to create two addtional objects for the array "chD" and "chE" for two more radio buttons but efforts to do so didn't work


//Abe comment: Question array, last (X) represents answer:
var questions = [
    ["The show ‘Game of Thrones’ is based on what fantasy novel series?", "Dune", "A Song of Ice and Fire", "The Chronicles of Narnia", "B"],
    ["The ‘Song of Ice and Fire’ was written by?", "George R. R. Martin", "C. S. Lewis", "R.L. Stine", "A"],
    ["The events on the show take place on the fictional continents of _____ and ______?", "Oceania and Eurasia", "Westeros and Essos", "Coruscant and Endor", "B"],
    ["Which one of the houses listed below is NOT one of the ‘Great Houses of Westeros’?", "House Stark of Winterfell", "House Poe of Eldorado", "House Arryn of the Eyrie", "B"],
    ["What creature is represented on the sigil of House Stark?", "Serpent", "Direwolf", "Dragon", "B"],
    ["According to George R. R. Martin, the events of a ‘Song of Ice and Fire’ are inspired by what historical conflict?", "The Punic Wars", "The English Wars of the Roses", "The Opium Wars", "B"],
    ["What Great House deposed the Targaryen Dynasty during Robert's Rebellion and assumed leadership of the Iron Throne and the Seven Kingdoms?", "House Greyjoy", "House Baratheon", "House Stark", "B"],
    ["What region is the Sothern-most kingdom of the Seven Kingdoms located at the end of Westeros?", "The Stormlands", "Dorne", "The Vale", "B"],
    ["What are the ‘words’, official house motto, of House Greyjoy?", "Unbowed, Unbent, Unbroken", "Ours is the Fury", "We Do Not Sow", "C"],
    ["What song was played during the infamous massacre in S03, E09 (popularly known as ‘The Red Wedding’)?", "The Rains of Castamere", "A Lannister Always Pay His Debts", "The Light of the Seven", "A"],
    ["What location has NOT been used thus far during the filming of ‘Game of Thrones’?", "Ireland", "Croatia", "Greece", "C"],
    ["How are the primary manifestations of the sole deity of the ‘Faith of the Seven’, the chief religion of the Seven Kingdoms?", "The Lord Of Light, The Dark Lord of Terror, The Red God, The Nameless", "The Father, The Mother, The Maiden, The Crone, The Warrior, The Smith, The Stranger", "The High Sparrow, The Mad King, The Faith Militant, The Mother, The Father", "B"],
    ["The ‘Unsullied’, the elite warrior-eunuchs, were historically trained and sold in what costal Essos-based city?", "Astapor", "Qarth", "Pentos", "A"],
    ["The Warlocks of Qarth are a group of powerful sorcerers, headquartered in ______ and are recognizable by their blue lips, caused by their custom of drinking a substance known as ______.", "The Haunted Forest, Dragon Tears", "The House of the Undying, Shade of the Evening", "Castle Black, Ambrosia", "B"],
    ["According to the popular legend of Westeros, what race of creatures to first inhabit the continent before the advent of the Seven Kingdoms?", "The Children of the Forest", "The Old Gods", "The White Walkers", "A"]
];


// Abe comment getElementById function:
function get(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2> Final Score: You got " + correct + " of " + questions.length + " questions correct.</h2>";
        get("test_status").innerHTML = "Quiz Completed. Please can back for more content in the future!";

        // //attempt to create three diffrent ending messages, but it didn't seem to work...
        // function renderQuestion(){
        //   test = get("test");
        //   if(pos = 0){
        //     test.innerHTML = "<h2> Results: You got "+correct+" of "+questions.length+" questions correct. You are no GOT fan! </h2>";
        //     get("test_status").innerHTML = "You have completed the quiz, come back soon for addtional content!";
        //   } else if (pos <= 5) {
        //     test.innerHTML = "<h2> Results: You got "+correct+" of "+questions.length+" questions correct. FAN! </h2>";
        //     get("test_status").innerHTML = "You have completed the quiz, come back soon for addtional content!";
        //     } else {
        //       test.innerHTML = "<h2> Results: You got "+correct+" of "+questions.length+" questions correct.</h2>";
        //       get("test_status").innerHTML = "You have completed the quiz, come back soon for addtional content!";



        // Abe comment variable re-set
        pos = 0;
        correct = 0;


        // Abe comment stops rest of renderQuestion function running when test is completed
        return false;
    }
    get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "</h3>";
    // the += appends to the data we started on the line above
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer or Skip Question </button>";
}

function checkAnswer() {
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }

    // Abe comment checks if answer matches the correct choice
    if (choice == questions[pos][4]) {


        //each time there is a correct answer this value increases
        correct++;
    }
    // Abe comment changes position of which character user is on
    pos++;


    // Abe comment then the renderQuestion function runs again to go to next question
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
