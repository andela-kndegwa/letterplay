    var score = 0;
    // Declares reference dictionary support
    // Think of this as the mock dictionary.
    var wordList = ['awesome', 'letterplay', 'ambition', 'appealing', 'undeniable']
    // convert above to word list.
    var wordChallenge = document.getElementById('wordChallenge');
    // Get random word from the wordList and add spans to each letter.
    var spannedChallenge = turnRandomWordIntoSpans()
    wordChallenge.innerHTML = spannedChallenge
    // wordChallenge.innerText = getRandomWord();
    // get response form the user
    var wordResponse = document.getElementById('wordResponse');
    // prevent copy and paste of information into the input box
    //  use case --> There is no fun if you can copy and paste! 
    wordResponse.onpaste = function(e) {
        e.preventDefault();
    }


    function resetHighlights(el) {
        for (var ind = 0; ind < el.children.length; ind++) {
            el.children[ind].classList.remove('text-highlight')
        }
    }

    var strippedWordChallenge = wordChallenge.innerText.replace(/\s+/g, "").toLowerCase(); // Explicit spaces
    var timerDuration = strippedWordChallenge.length;
    function gamePlay(responseValue) {
        var typedResponse = wordResponse.value.toLowerCase()
        var typedResponseLength = typedResponse.length
        for (var l = 0; l < typedResponseLength; l++) {
            var letterIndex = strippedWordChallenge.indexOf(typedResponse[l]);
            if (letterIndex > -1) {
                var challengeLength = strippedWordChallenge.length
                for (var b = 0; b < challengeLength; b++) {
                    var eachLetterInChallenge = wordChallenge.children[b].innerHTML.toLowerCase()
                    var eachLetterInResponse = typedResponse[l].toLowerCase()
                    if (eachLetterInResponse === eachLetterInChallenge) {
                        if (!wordChallenge.children[b].classList.contains('text-highlight')) {
                            wordChallenge.children[b].classList.add('text-highlight');
                            break;
                        }

                    }

                }
            }
        }

    }

    // reset the highlights regardless of the key
    function startGamePlay(){
    wordResponse.addEventListener('keyup', function(e) {
        e.preventDefault();
        resetHighlights(wordChallenge)
        gamePlay(e.target.value);


    })
    }
    // get the currently displayed word.
    var challengeWord = document.getElementById("wordChallenge").innerText
    //show score
    var currentScore = document.getElementById("score");
    currentScore.innerText = score;
    //show target
    var currentTarget = document.getElementById("target");
    // get the right dictionary for the job.
    var referenceDictionary = matchWordToItsDictionary(challengeWord);
    currentTarget.innerText = referenceDictionary.length
    // For timer
    var wordChallengeLength = strippedWordChallenge.length


// This event listener allows us to be able to check on enter if the word is in our mock dictionary.
    wordResponse.addEventListener('keypress', function(e) {
        if (e.keyCode == 13) {
            var solutions = document.getElementById("solutions");
            var allResponses = solutions.getElementsByTagName("span");
            var fullWord = wordResponse.value.toLowerCase();
            var wordIndex = referenceDictionary.indexOf(fullWord.toLowerCase())
            solutionsMap = []
            solutionsLength = allResponses.length
            for(var i = 0; i < solutionsLength; i++ ){
                solutionsMap.push(allResponses[i].innerText)
            }
            solutionsMapIndex = solutionsMap.indexOf(fullWord)
            if (wordIndex > -1 && solutionsMapIndex < 0) {
                score = score + 1;
                currentScore.innerText = score;
                updateSolutions(fullWord)
            } else {
                updateFailedAttempts(fullWord);
            }
            wordResponse.value = '';
            resetHighlights(wordChallenge);
        }
    })

// solutions
function updateSolutions(solution){
    var solutions = document.getElementById("solutions");
    solutions.innerHTML += "<span class='solution'>" + solution.toString() +"</span>"
}
// failed attempts
function updateFailedAttempts(attempt){
    var solutions = document.getElementById("solutions");
    solutions.innerHTML += "<span class='wrong'>" + attempt.toString() +"</span>"
}


// refresh page

var refreshIcon = document.getElementsByClassName("refresh")[0]
refreshIcon.addEventListener('click', function(e){
    e.preventDefault();
    location.reload();
})

