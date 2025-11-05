let balance = 1000;

function play(userChoice) {
    let bet = parseInt(document.getElementById("betAmount").value);
    let resultBox = document.getElementById("result");
    let coin = document.getElementById("coin");
    let history = document.getElementById("history");

    // check bet is valid or not

    if (bet <= 10) {
        alert("Please Enter  Amount More Than 10");
        return
    }

    if (bet > balance) {
        alert("You Have Low Balance !!");
        return
    }

    // for flip coin

    coin.style.transform = "rotateY(1800deg)";
    // clera the result

    resultBox.textContent = "Flipping...";
    resultBox.style.color = "white";
    coin.textContent = "Flipping"

    setTimeout(() => {
        coin.style.transform = "rotateY(0deg)"

        let result = Math.random() < 0.5 ? "HEAD" : "TAIL"
        coin.textContent = result;

        // Win logic
        if (userChoice == result) {
            balance += bet;
            resultBox.textContent = "You Win !! " + result
            resultBox.style.color = "lime"
            addHistory(userChoice, "Win!", balance);
        } else {
            balance -= bet;
            resultBox.textContent = "You Lose Better Luck Next Time !! " + result
            resultBox.style.color = "red"
            addHistory(userChoice, "Lose!", balance);
        }

        //for updating the balance
        document.querySelector(".balance").textContent = "Balance : $" + balance;
    }, 1000)

    // for history

    function addHistory(choice, result, bal) {
        let history = document.getElementById("historyUpdate");
        let row = document.createElement("tr");
        row.innerHTML = `
  <td>${choice}</td>
  <td class="${result === 'Win!' ? 'win' : 'lose'}">${result}</td>
  <td>$${bal}</td>
`;

        history.prepend(row);
    }
}