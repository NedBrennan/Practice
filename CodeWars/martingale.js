var testBank = 1000
var testOutcomes = [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0] // Expected result 1300

function martingale(bank, outcomes) {
    bet = 100
    len = outcomes.length
    balance = bank

    for (i = 0; i < len; i++) {
        if (outcomes[i] === 0) {
            balance = balance - bet
            bet = bet * 2
        }
        else {
            balance = balance + bet
            bet = 100
        }
    }
    return balance
}

martingale(testBank, testOutcomes)