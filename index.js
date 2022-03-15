let writeNumber = prompt("Введите пожалуйста значение: ");
let exam;
writeNumber = +writeNumber;
exam = typeof writeNumber;
if (isNaN(writeNumber) === true && exam === "number") {
    alert('Упс, кажется, вы ошиблись, вы не нашли Настю :(')
} else if (writeNumber % 2 === 0) {
    alert('Число четное, значит Настя принцесса')
} else {
    alert('Число не четное, значит Настя королева')
}

