function calculateBMI() {

    var weight = document.getElementById("weightInput").value;
    var heightValue = document.getElementById("heightInput").value;
    var height = heightValue / 100;
    var bmi = weight / height ** 2;
    bmi = Math.round(bmi * 10) / 10;

    var result = document.getElementById("result");

    if (bmi < 18.5) {
        result.innerText = bmi + " -- Underweight";
    } else if (bmi => 18.5 && bmi <= 24.9 ) {
        result.innerText = bmi + " -- Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerText = bmi + " -- Overweight";
    }
}


// underweight = < 18.5
// normal = 18.5 - 24.9
// overweight = 25 - 29.9 