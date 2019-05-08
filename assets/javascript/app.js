$(document).ready(function () {
    //timer
    var seconds;
    var time;
    //represents question user is currently on
    var currentQuestion;
    //correct/incorrect/unanswered questions
    var correctAnswer;
    var wrongAnswer;
    var unanswered;
    var answered;
    //user answer choice
    var userChoice;

    var text = {
        correct: "Giggity!",
        incorrect: "Aww, wrong answer, you'll get it next time..",
        noTime: "You've got to be quicker than that!",
        done: "Well Done!",
    };

    var triviaQuestions = [
        {
            question: "What's the name of Peter Griffin's talking dog?",
            choices: ["Meg", "Stewie", "Joe", "Brian", "Chris"],
            correct: 3,
            image: "assets/images/brian.gif",
            answerText: "Peter's dog is named Brian.",
        },

        {
            question: "What band was Lois' college boyfriend in?",
            choices: ["AC/DC", "KISS", "Queen", "Journey", "The Beatles"],
            correct: 1,
            image: "assets/images/kiss.gif",
            answerText: "Lois dated Gene Simmons before the fame.",
        },

        {
            question: "Whats is Peter's all-time favorite song?",
            choices: ["Surfin' Bird", "Surfin' USA", "The Word", "The Bird", "Free Bird"],
            correct: 0,
            image: "assets/images/surfinbird.gif",
            answerText: "The bird is the word!!",
        },

        {
            question: "When Peter finds out his house isn't part of the United States, what does he name his property?",
            choices: ["Petelandia", "St. Petersburg", "Petemaria", "Petoria", "The Repulic of Peter"],
            correct: 3,
            image: "assets/images/peter.gif",
            answerText: "Peter ruled the land of Petoria.",
        },
        {
            question: "What reality show does Brian go on?",
            choices: ["The Real World", "The Dog Whisperer", "Jersey Shore", "The Hills", "The Bachelorette"],
            correct: 4,
            image: "assets/images/brian2.gif",
            answerText: "Brian competed for love on The Bachelorette.",
        },
        {
            question: "Which farm animal is Peter always fighting in varioous episodes?",
            choices: ["A chicken", "A lamb", "A cow", "A horse", "A pig"],
            correct: 0,
            image: "assets/images/chicken.gif",
            answerText: "Ernie, the giant chicken, has a long history of violence with Peter."
        },
        {
            question: "Which country is Peter's real father from?",
            choices: ["Germany", "Italy", "Ireland", "The United States", "Scotland"],
            correct: 2,
            image: "assets/images/peter3.gif",
            answerText: "Peter is half Irish."
        },
        {
            question: "Who played R2-D2 in Family Guy's parody of Star Wars?",
            choices: ["Meg", "Quagmire", "Cleveland", "Lois", "Joe"],
            correct: 2,
            image: "assets/images/starwars.gif",
            answerText: "R2-D2 is voiced by Cleveland Brown."
        },
        {
            question: "Peter changed Meg's name on her birth certificate from Megan to:",
            choices: ["Megalith", "Megatron", "MegaTon", "Maggie", "Ron"],
            correct: 1,
            image: "assets/images/meg.gif",
            answerText: "Peter changed Meg's name to Megatron in her birth certificate."

        },
        {
            question: "What is the bartenders name at the pub that Peter goes to?",
            choices: ["Albert", "James", "George", "Vinny", "Horace"],
            correct: 4,
            image: "assets/images/drinking.gif",
            answerText: "Horace was the bartender at The Drunken Clam."

        },
        {
            question: "What is the name of Stewie's teddy bear?",
            choices: ["Rupert", "Robert", "Ripley", "Bob", "Stewie Jr."],
            correct: 0,
            image: "assets/images/rupert.gif",
            answerText: "Rupert is Stewie's best friend."

        },
        {
            question: "What sport does Lois take up during Season 9?",
            choices: ["Football", "Roller Derby", "Basketball", "Dance", "Boxing"],
            correct: 4,
            image: "assets/images/lois.gif",
            answerText: "Lois became unexpectedly good at boxing."
        },
        {
            question: "What is Peter's middle name?",
            choices: ["Guinness", "Budweiser", "Lowenbrau", "O'Shaughnessy", "Allen"],
            correct: 2,
            image: "assets/images/peter2.gif",
            answerText: "Peter's full name is Peter Lowenbrau Griffin."

        },
        {
            question: "What kind of dog is Brian?",
            choices: ["Labrador Retriver", "Mutt", "Beagle", "Boston Terrier", "Pug"],
            correct: 0,
            image: "assets/images/brian3.gif",
            answerText: "Brian is a white Labrador Retriever."

        },
        {
            question: "Which character's house is repeatedly destroyed in a running gag?",
            choices: ["Joe's", "Cleveland's", "Quagmire's", "Peter's", "Adam West's"],
            correct: 1,
            image: "assets/images/cleveland.gif",
            answerText: " `No, no, no, no, no, NO, NO!!!` -Cleveland Brown"
        },
        {
            question: "How long was Joe's wife Bonnie pregnant on the show?",
            choices: ["4 years", "8 months", "1 year", "6 years", "9 months"],
            correct: 3,
            image: "assets/images/joe.gif",
            answerText: "Bonnie was pregnant with Susie for 6 years. Wow!"
        },
        {
            question: "When Peter discovers he has a vestigial conjoined twin in his neck, what does he name it?",
            choices: ["Chip", "Peter", "Lil' Pete", "Bart", "Thomas"],
            correct: 0,
            image: "assets/images/peter4.gif",
            answerText: "Chip was eventually surgically removed from Peter's neck."


        },
        {
            question: "What kind of cosmetic surgery does Brian get?",
            choices: ["Nose job", "Liposuction", "New teeth", "Calf implants", "Breast augmentation"],
            correct: 2,
            image: "assets/images/brian4.gif",
            answerText: "Brian gets a new, human-like, set of teeth."

        },
        {
            question: "How many children do neighbors Joe and Bonnie Swanson have?",
            choices: ["0", "1", "2", "3", "4"],
            correct: 2,
            image: "assets/images/stewie.gif",
            answerText: "Joe and Bonnie have a baby daughter, Susie, and an older son, Kevin."
        },
        {
            question: "what is the name of the girl Stewie marries for a brief time?",
            choices: ["Molly", "Chelsea", "Rose", "Olivia", "Daisy"],
            correct: 3,
            image: "assets/images/stewie2.gif",
            answerText: "Olivia is the most famous toddler actress in Quahog."
        }
    ];

    // Hides Content at Start Up
    $("#gameArea").hide();

    // Start Button Click and Hide
    $("#startBtn").on("click", function () {
        $("#startGame").hide();
        newGame();
    });

    // Reset Button
    $("#startOverBtn").on("click", function () {
        $("#Res").hide();
        newGame();
    });


    //Start Game Function After Initial Click
    function newGame() {
        $("#gameArea").show();
        $("#Ans").hide();
        $("#Res").hide();
        correctAnswer = 0;
        wrongAnswer = 0;
        unanswered = 0;
        currentQuestion = 0;
        questions();
    }
 

    // Displays Question
    function questions() {
        $("#Ans").hide();
        $("#Qs").show();
        answered = true;

        // Prints Question from Array
        $(".question").html(triviaQuestions[currentQuestion].question);


        //Loops through possible choices and appends
        for (var i = 0; i <= 5; i++) {
            var list = $("<div>");
            list.text(triviaQuestions[currentQuestion].choices[i]);
            list.attr({ "data-index": i });
            list.addClass("thisChoice");
            $(".choices").append(list);
        }

        //Calls timer
        countdown();

        $(".thisChoice").on("click", function () {
            userChoice = $(this).data("index");
            clearInterval(time);
            shoAnswer();
        });
    }


    // Timer countdown
    function countdown() {
        seconds = 20;
        $("#time").html("00:" + seconds);
        answered = true;
        time = setInterval(countDownSho, 1000);
    }


    // Timer display
    function countDownSho() {
        seconds--;
        if (seconds < 10) {
            $("#time").html("00:0" + seconds);
            $("#time").css({ "color": "red" });
        } else {
            $("#time").html("00:" + seconds);
            $("#time").css({ "color": "#def" });
        }

        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            shoAnswer();
        }
    }

    //display answers
    function shoAnswer() {
        $("#Qs").hide();
        $("#Res").hide();
        $("#Ans").show();
        $(".thisChoice").empty();

        var rightAnswerText = triviaQuestions[currentQuestion].choices[triviaQuestions[currentQuestion].correct];
        var rightAnswerIndex = triviaQuestions[currentQuestion].correct;
        console.log(rightAnswerText);
        console.log(rightAnswerIndex);
        //gif images
        var gifLink = triviaQuestions[currentQuestion].image;
        var Giffy = $("<img>");
        Giffy.attr("Src", gifLink);
        Giffy.addClass("gifImg");
        $("#gif").html(Giffy);
        //gif text
        var gifText = triviaQuestions[currentQuestion].answerText;
        newCap = $("<div>");
        newCap.html(gifText);
        newCap.addClass("gifCap");
        $("#gifText").html(newCap);


        // Displays/counts user answered/unanswered questions
        if ((userChoice === rightAnswerIndex) && (answered === true)) {
            correctAnswer++;
            $("#text").html(text.correct);
            $("#correctAnswer").hide();
        } else if ((userChoice !== rightAnswerIndex) && (answered === true)) {
            wrongAnswer++;
            $("#text").html(text.incorrect);
            $("#correctAnswer").show().html("The right answer was: " + rightAnswerText);
        } else {
            unanswered++;
            $("#text").html(text.noTime);
            $("#correctAnswer").html("The answer was: " + rightAnswerText);
            answered = true;
        }

        //Answer reveal timer
        if (currentQuestion === (triviaQuestions.length - 1)) {
            setTimeout(results, 6000);
        } else {
            currentQuestion++;
            setTimeout(questions, 6000);
        }

    }

    function results() {
        $("#Ans").hide();
        $("#Qs").hide();
        $("#Res").show();
        $("#resultText").html(text.done);
        $("#correctAnswers").html("Correct Answers: " + correctAnswer);
        $("#wrongAnswers").html("Wrong Answers: " + wrongAnswer);
        $("#unanswered").html("Didn't Answer: " + unanswered);
        $("#startOverBtn").show();
        $("#startOverBtn").html("RESTART GAME");
    }


});