// Our very awesome dictionary. So awesome it needed its own file!
// Probably should replace this with an API call. - NOTE TO SELF.
var referenceDictionary = {
    'letterplay': ['letter', 'play', 'real', 'pay', 'lay', 'ray', 'let', 'peal', 'pet', 'eat','peat', 'tray', 'pray', 'tea', 'eat', 'tree', 'replay', 'repay', 'treat', 'late', 'pale', 'year'],
    'awesome' : ['awe', 'some', 'ewe', 'see', 'seam', 'seem'],
    'available' : ['mat', 'able', 'bill', 'bile', 'ail', 'label', 'veil', 'bale', 'avail', 'pail'],
    'appealing' : ['peal','pan','pile', 'pail', 'ping', 'appeal', 'pig', 'pale', 'pine', 'ape','pea', 'gape', 'apple', 'pane'],
    'undeniable' : ['able','lane', 'able','bale','line', 'bed', 'dine', 'bun', 'bile', 'lean', 'blend', 'be']
}


//each wordChallenge should have its own dictionary to avoid the target being flawed.
// for now letterplay
function matchWordToItsDictionary(challenge){
    var challengeWords = Object.keys(referenceDictionary);
    for (var d = 0; d < challengeWords.length; d ++ ){
        if (challenge === challengeWords[d]){
            return referenceDictionary[challenge];
        }
    }
}   