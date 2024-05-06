let students = [
    {
        name: "Lipe",
        grade1: 9.0,
        grade2: 8.0,
    },   
    {
        name: "Bia",
        grade1: 7.0,
        grade2: 6.0,
    }, 
    {
        name: "Gui",
        grade1: 5.0,
        grade2: 4.0,
    },
    {
        name: "Jeff",
        grade1: 7.0,
        grade2: 8.0,
    }
]

function calcAverage(number1, number2){
    return (number1 + number2) / 2;
}

for(let student of students){
    let average = calcAverage(student.grade1, student.grade2)
    alert(`A média do aluno ${student.name} foi ${average}. O aluno está ` + (average >= 7 ? 'aprovado.' : 'reprovado.')) 
}