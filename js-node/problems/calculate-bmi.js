function bmi(weight, height) {
    const calc = (weight / (height * height));
    if (calc <= 18.5) return "Underweight";
    if (calc <= 25.0) return "Normal";
    if (calc <= 30.0) return "Overweight";
    return "Obese";
}

;(() => {
    console.log(bmi(75, 1.75))
})()