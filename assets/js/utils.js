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

function splitEachWordInList(){
    var wordListLength = wordList.length;
    var splitWords = [];
    for (var j = 0 ; j < wordListLength; j ++){
        splitWord = [];
        var eachWord = wordList[j]
        // console.log(eachWord.length)
        for(var k = 0; k < eachWord.length; k ++){
            eachWord[k].innerHTML += "<span>"
            splitWord.push(eachWord[k])
        }
    splitWords.push(splitWord)
    }
}