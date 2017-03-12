    var score = 0;
    // Declares reference dictionary support
    // Think of this as the mock dictionary.
    var referenceDictionary = ['letter', 'play', 'real', 'pay', 'lay', 'ray', 'let'];
    var wordChallenge = document.getElementById('wordChallenge');
    var wordResponse = document.getElementById('wordResponse');
    // prevent copy and paste of information into the input box
    //use case 
    wordResponse.onpaste = function(e) {
        e.preventDefault();
    }

    // The get letter count function creates a map that contains the count of all the unique
    // letters in our wordChallenge.
    // Use an array instead of an object 
    function getLetterCount(wordChallenge) {
        // Object that holds all the unique characters --> letterOccurrenceMap
        var letterOccurrenceMap = [];
        var wordArray = wordChallenge.innerText.split(" ");
        // loop through all the letters.
        for (i = 0; i < wordArray.length; i++) {
            count = 0;
            // have a reference array to be able to loop through
            for (b = 0; b < wordArray.length; b++) {
                if (wordArray[i] == wordArray[b]) {
                    count++
                }
                // Key --> letter
                // Value --> Count
                letterOccurrenceMap[wordArray[i]] = count;
            }
        }
        return letterOccurrenceMap
    }
    //Get the map from the above function
    var wordChallengeMap = getLetterCount(wordChallenge)
    var uniqueKeys = Object.keys(wordChallengeMap)
    var uniqueKeyLength = Object.keys(wordChallengeMap).length
    var strippedWordChallenge = wordChallenge.innerText.replace(/ +/g, "");

    function resetHighlights(el) {
        for (var ind = 0; ind < el.children.length; ind++) {
            if (el.children[ind].classList.contains('text-highlight')) {
                el.children[ind].classList.remove('text-highlight')
            }
        }
    }

    function gamePlay() {
        wordResponse.addEventListener('keyup', function(e) {
            for (var l = 0; l < wordResponse.value.length; l++) {
                // scan through all the letters
                var letterIndex = strippedWordChallenge.indexOf(wordResponse.value[l]);
                if (letterIndex > -1) {
                    for (var b = 0; b < strippedWordChallenge.length; b++) {
                        if (wordResponse.value[letterIndex] == wordChallenge.children[b].innerHTML && (!wordChallenge.children[b].classList.contains("text-highlight"))) {
                            return wordChallenge.children[b].classList.add('text-highlight');
                            // if (!wordChallenge.children[b].classList.contains("text-highlight")) {
                            //     return wordChallenge.children[b].classList.add("text-highlight");
                            // }
                        }
                    }

                } else {
                    console.log('Wassup');
                }
            }

        });
    }
    gamePlay();

    // This event listener allows us to be able to check on enter if the word is in our mock dictionary.
    wordResponse.addEventListener('keypress', function(e) {
        if (e.keyCode == 13) {
            var fullWord = wordResponse.value;
            var wordIndex = referenceDictionary.indexOf(fullWord.toLowerCase())
            if (wordIndex > -1) {
                console.log('The word ' + fullWord + " is in the dictionary. You got it!");
            } else {
                console.log('The word ' + fullWord + " is not in the dictionary. How could you!");
            }
            wordResponse.value = '';
            resetHighlights(wordChallenge);
        }
    })
