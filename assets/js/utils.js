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

    // randomly select a word from the wordList and then return it.
    // this is what will become the text for the wordChallenge
    function getRandomWord (){
        var randomChallenge = wordList[Math.floor(Math.random()*wordList.length)];
        return randomChallenge;
    }
    
    // take random challenge and divide it into spans.
    function turnRandomWordIntoSpans(){
        var randomChallenge = getRandomWord();
        var spanned = ""
        for (var j =0 ; j < randomChallenge.length;j ++ ){
            spanned += "<span>" + randomChallenge[j] + "</span>"
        }
        return spanned
    }