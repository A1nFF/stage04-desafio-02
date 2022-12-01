const students = [
    {
        name: "João",
        resultOne: 7,
        resultTwo: 9,
    },
    {
        name: "Maria",
        resultOne: 7,
        resultTwo: 4,
    },
    {
        name: "Diego",
        resultOne: 7,
        resultTwo: 8,
    },
    {
        name: "Julia",
        resultOne: 3,
        resultTwo: 7,
    },
]


const mediaStudents = (resultOne, resultTwo) => {
    return ((resultOne + resultTwo) / 2).toFixed(2);
}

for (let media of students) {

    if(mediaStudents(media.resultOne, media.resultTwo) >= 7) {

        alert(`A média do(a) aluno(a) ${media.name} é: ${mediaStudents(media.resultOne, media.resultTwo)} \nParabéns, ${media.name}! Você foi aprovado(a) no concurso.`);

    } else {

        alert(`A média do(a) aluno(a) ${media.name} é: ${mediaStudents(media.resultOne, media.resultTwo)} \nNão foi dessa vez, ${media.name}. Tente novamente!`);
    }
}