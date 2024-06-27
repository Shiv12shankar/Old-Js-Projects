function CalcTip() {

    var amount = parseFloat(document.getElementById("billamount").value);
    var service = parseFloat(document.getElementById("rating").value);
    var nop = parseInt(document.getElementById("no-o-ppl").value);
    var mealType = document.getElementById("mealtype").value;

    const tipamt = document.getElementById("tipamount");
    const ttlamt = document.getElementById("totalamount");
    const app = document.getElementById("amountperperson");

    if (isNaN(amount)||isNaN(nop)) {
        ttlamt.textContent = "Please Enter Valid Information!";
        return;
    }
        let tip;
        switch (service) {
            case 1:
                tip = amount * 0.05;
                break;
            case 2:
                tip = amount * 0.10;
                break;
            case 3:
                tip = amount * 0.15;
                break;
            case 4:
                tip = amount * 0.20;
                break;
        }
        let totalamount = amount + tip;
        let amountperperson = totalamount / nop;
        if (mealType === "dinner") {
            tip += 5;
            totalamount += 5;
            amountperperson += 5;
        }
        else if (mealType === "lunch") {
            tip += 5;
            totalamount += 5;
            amountperperson += 5;
        }

        tipamt.innerHTML = 'Tip: Rs.' + tip.toFixed(2);
        ttlamt.innerHTML = 'Total Amount: Rs.' + totalamount.toFixed(2);
        app.innerHTML = 'Amount per person: Rs.' + amountperperson.toFixed(2);
}