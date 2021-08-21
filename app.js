var checkbtn = document.querySelector("#btn-check");
var input = document.querySelectorAll(".stock-inputs");
var output = document.querySelector("#output");

function checkProfitOrLoss(buyPrice, quantity, currentPrice) {

    if (buyPrice > 0 && quantity > 0 && currentPrice > 0) {

        if (currentPrice > buyPrice) {
            var profit = quantity * (currentPrice - buyPrice);
            var profitPercentage = (profit / buyPrice) * 100;

            output.innerText = "Your profit is " + profit +
                " and it is " + profitPercentage + "%";

        } else if (buyPrice > currentPrice) {
            var loss = quantity * (buyPrice - currentPrice);
            var lossPercentage = (loss / buyPrice) * 100;

            output.innerText = "Your loss is " + loss +
                " and it is " + lossPercentage + "%";

        } else {
            output.innerText = "You don't have any profit or loss...";
        }
    } else {
        output.innerText = "Please enter correct values in the above fields..";
    }

}

function calculateResult() {
    var buyPrice = Number(input[0].value);
    var quantity = Number(input[1].value);
    var currentPrice = Number(input[2].value);
    checkProfitOrLoss(buyPrice, quantity, currentPrice);
}

checkbtn.addEventListener("click", calculateResult);