    var score = 0;
    // Declares reference dictionary support
    // Think of this as the mock dictionary.
    var referenceDictionary = ['letter', 'play', 'real', 'pay', 'lay', 'ray', 'let'];
    var wordChallenge = document.getElementById('wordChallenge');
    var wordResponse = document.getElementById('wordResponse');
    var solutions = document.getElementById('solutions')
        // prevent copy and paste of information into the input box
        //use case 
    wordResponse.onpaste = function(e) {
        e.preventDefault();
    }


    function resetHighlights(el) {
        for (var ind = 0; ind < el.children.length; ind++) {
            el.children[ind].classList.remove('text-highlight')
        }
    }

    var strippedWordChallenge = wordChallenge.innerText.replace(/\s+/g, "").toLowerCase(); // Explicit spaces

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
    wordResponse.addEventListener('keyup', function(e) {
        e.preventDefault();
        resetHighlights(wordChallenge)
        gamePlay(e.target.value);


    })

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
