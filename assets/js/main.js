    var score = 0;
    // Declares reference dictionary support
    // Think of this as the mock dictionary.
    var referenceDictionary = ['letter', 'play', 'real', 'pay', 'lay', 'ray', 'let'];
    var wordChallenge = document.getElementById('wordChallenge');
    var wordResponse = document.getElementById('wordResponse');
    var mySolutions = document.getElementById('solutions')
    // prevent copy and paste of information into the input box
    //use case 
    wordResponse.onpaste = function(e) {
        e.preventDefault();
    }


    function resetHighlights(el) {
        for (var ind = 0; ind < el.children.length; ind++) {
            if (el.children[ind].classList.contains('text-highlight')) {
                el.children[ind].classList.remove('text-highlight')
            }
        }
    }
    var strippedWordChallenge = wordChallenge.innerText.replace(/\s+/g, ""); // Explicit spaces

    function gamePlay(responseValue) {
        var typedResponseLength = wordResponse.value.length
        for (var l = 0; l < typedResponseLength; l++) {
            // scan through all the letters
            // debugger;
            var letterIndex = strippedWordChallenge.indexOf(wordResponse.value[l]);
            if (letterIndex > -1) {
                var challengeLength = strippedWordChallenge.length
                var typedResponse = wordResponse.value
                for (var b = 0; b < challengeLength; b++) {
                    var eachLetterInChallenge = wordChallenge.children[l].innerHTML
                    var eachLetterInResponse = typedResponse[b]
                    if (eachLetterInResponse == eachLetterInChallenge) {
                        if (!wordChallenge.children[b].classList.contains("text-highlight")) {
                            return wordChallenge.children[b].classList.add('text-highlight');
                         
                        }
                    }

                }

            }
        }

    }


    wordResponse.addEventListener('keyup',function(e){
        e.preventDefault();
        console.log(e.target.value);
        if(e.keyCode === 8){
            resetHighlights(wordChallenge); // resets everything from the highlights
            console.log(wordChallenge.children);
            gamePlay(e.target.value);
        } else{
            gamePlay(e.target.value);
        }

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

