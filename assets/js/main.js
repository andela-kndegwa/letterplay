    var score = 0;
    // Declares reference dictionary support
    // Think of this as the mock dictionary.
    var referenceDictionary = ['letter', 'play', 'real', 'pay', 'lay', 'ray', 'let'];
    var wordChallenge = document.getElementById('wordChallenge');
    var wordResponse = document.getElementById('wordResponse');
    // prevent copy and paste of information into the input box
    wordResponse.onpaste = function(cp){
        cp.preventDefault();
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
    var wordChallengeMap = getLetterCount(wordChallenge);
            // add event listener on key up on input to be able to ensure we get every letter typed.
            wordResponse.addEventListener("keyup", function(e) {
                e.preventDefault();
                if (wordResponse.value.length > 0){
                    // create an array from the word being passed into the input for the
                    // purpose of being able to get each and every letter on the console
                    var arrayFromWord = Array.from(wordResponse.value);
                    // assign length of the array gotten
                    var responseLength = Array.from(wordResponse.value).length;
                    var lastLetterOfWordResponse = arrayFromWord[responseLength - 1]
                        // assign index of letter in word to letterIndex as play the  wordChallenge
                        // NOTE : IndexOf checks for case
                        // Remove the white space because of the addition of spans to every letter.
                    var letterIndex = wordChallenge.innerText.replace(/ +/g, "").indexOf(lastLetterOfWordResponse);
                    // show where that letter exists
                    if (letterIndex > -1) {
                        console.log('The letter ' + lastLetterOfWordResponse + " is at position " + letterIndex.toString() + " of the word:" + wordChallenge.innerText);
                        wordChallenge.children[letterIndex].classList.add('text-highlight');
                    } else {
                        console.log('The letter ' + lastLetterOfWordResponse + " does not exist in that word.");
                    }
                }
            })
    
    wordResponse.addEventListener('keypress', function(e){
         console.log(e.keyCode);
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
        }
    })