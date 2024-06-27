function Checkbtn() {
    var x = document.getElementById("numin").value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    var r = document.getElementById("result");
    var y = x.split().reverse().join();

    if (x === y) {
        r.innerHTML = x + " is a Palindrome!";
    }
    else {
        r.innerHTML = x + " is not a Palindrome!";
    }

}