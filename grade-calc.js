//student score, total possible score, generate a letter grade
// Example: 15/20 would return a string You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let grade = function (score, totalPoints) {
    percentage = Math.round(score / totalPoints * 100)

    if (percentage >= 90 && percentage <= 100) {
        return `${score}/${totalPoints} - You got an A (${percentage}%)`
    } else if (percentage >= 80 && percentage <= 89) {
        return `${score}/${totalPoints} - You got a B (${percentage}%)`
    } else if (percentage >= 70 && percentage <= 79) {
        return `${score}/${totalPoints} - You got a C (${percentage}%)`
    } else if (percentage >= 60 && percentage <= 69) {
        return `${score}/${totalPoints} - You got a D (${percentage}%)`
    } else {
        return `${score}/${totalPoints} - You got a F (${percentage}%)`
    }
}

console.log(grade(20, 100))
console.log(grade(81, 100))
console.log(grade(45, 50))
console.log(grade(30, 60))
console.log(grade(52, 60))