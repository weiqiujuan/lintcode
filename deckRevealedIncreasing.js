/**
 * @param {number[]} deck
 * @return {number[]}
 */
/*思路： 倒着解*/
const deckRevealedIncreasing = function (deck) {
    if (deck === null || deck.length < 1) {
        return deck
    }
    deck.sort((a, b) => {
        return b - a
    })
    let res = []
    for (let i = 0; i < deck.length; i++) {
        res.push(deck[i])
        res.push(res.shift())
    }
    res.unshift(res.pop())
    return res.reverse()
};

let main = deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])//[2,13,3,11,5,17,7]
console.log(main)