export { rps }
export { rpsls }

function rps(move) {
    var opponent = Math.random();
    if (opponent < .33) {
        opponent = "rock";
    } else if (opponent <= .66) {
        opponent = "paper";
    } else if (opponent <= 1) {
        opponent = "scissors";
    }

    if (move === undefined) {
        return {'player': opponent};
    } else {
        move = move.toLowerCase();
    }

    let moves = ['rock', 'paper', 'scissors'];

    if (!moves.includes(move)) {
        return 'error';
    }

    var result;
    if (move === opponent) {
        //tie
        result = "tie";
    } else {
        switch (move) {
            case "rock":
                if (opponent === "scissors") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
            case "paper":
                if (opponent === "rock") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
            case "scissors":
                if (opponent === "paper") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
        }
    }

    return {'player': move, 'opponent': opponent, 'result': result};
}

function rpsls(move) {
    var opponent = Math.random()
    if (opponent < .2) {
        opponent = "rock";
    } else if (opponent <= .4) {
        opponent = "paper";
    } else if (opponent <= .6) {
        opponent = "scissors"
    } else if (opponent <= .8) {
        opponent = "lizard"
    } else if (opponent <= 1) {
        opponent = "spock"
    }
    if (move === undefined) {
        return {'player': opponent};
    } else {
        move = move.toLowerCase();
    }

    let moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    if (!moves.includes(move)) {
        return 'error';
    }

    var result;
    if (move === opponent) {
        //tie
        result = "tie";
    } else {
        switch (move) {
            case "rock":
                if (opponent === "scissors" || opponent === "lizard") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
            case "paper":
                if (opponent === "rock" || opponent === "spock") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
            case "scissors":
                if (opponent === "paper" || opponent === "lizard") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
            case "lizard":
                if (opponent === "spock" || opponent === "paper") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }

            case "spock":
                if (opponent === "scissors" || opponent === "rock") {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
        }
    }

    return {'player': move, 'opponent': opponent, 'result': result};
}