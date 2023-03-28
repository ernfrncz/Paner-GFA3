function ran(){
    var num1 = parseInt(Math.random()*20)+1;
    document.getElementById("pop").innerHTML = num1;
    var num2 = parseInt(Math.random()*20)+1;
    document.getElementById("rock").innerHTML = num2;
    var num3 = parseInt(Math.random()*20)+1;
    document.getElementById("opm").innerHTML = num3;

    if (num1 > num2 && num1 > num3) {
        document.getElementById("most").innerHTML = "Pop (" + num1 + ")";
    } else if (num2 > num1 && num2 > num3) {
        document.getElementById("most").innerHTML = "Rock (" + num2 + ")";
    } else if (num3 > num1 && num3 > num2) {
        document.getElementById("most").innerHTML = "OPM (" + num3 + ")";
    } else if (num1 === num2) {
        document.getElementById("most").innerHTML = "Pop, Rock (" + num1 + ")";
    } else if (num1 === num3) {
        document.getElementById("most").innerHTML = "Pop, OPM (" + num1 + ")";
    } else if (num2 === num3) {
        document.getElementById("most").innerHTML = "Rock, OPM (" + num2 + ")";
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    document.getElementById("name").innerHTML = alphabet[randomIndex];

    var tmins = num2*num3;
    document.getElementById("tmins").innerHTML = "(" + tmins + " mins)";
    var hrs = Math.floor(tmins / 60);
    var mins = tmins % 60;
    document.getElementById("hours").innerHTML = hrs + "hr ";
    document.getElementById("mins").innerHTML = mins + "min";
}