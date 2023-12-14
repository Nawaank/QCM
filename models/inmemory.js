// importer la classe Qcm
const Qcm = require('./qcm');
const question = require('./question');

// remplacer les simples chaines de caracteres par des instances de la classe Qcm
const qcms = [
    new Qcm({ id: 0, name: 'Introduction Vanilla JS', nbpoints: 20, subject: 'Javascript' }),
    new Qcm({ id: 1, name: 'Framework Frontend', nbpoints: 20, subject: 'Angular' }),
    new Qcm({ id: 2, name: 'Framework Backend', nbpoints: 10, subject: 'Express' }),
];


const addQcm = (rawObject) => {
    //FIXME: fonction qui ajoute un element a la liste et incremente l'id
    let maxId = 0;
    //recupere l'id le plus grand
    qcms.forEach((qcm) => {
        if (maxId < qcm.Id) {
            maxId = qcm.id;
        }
    });
    // creation du QCM avec l id max
    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints)
        });
    // ajout du QCM a la liste
    qcms.push(qcm);
}
//////////////////// QUESTION ////////////////////////////////

const question = [
    new Question ({id: 0, name: 'Pourquoi feur ? '}),
    new Question ({id: 1, name: 'Pourquoi canard ?'})
];

const addQuestion =(rawObject) => {
    let maxId = 0;
    questions.forEach((question) => {
        if (maxId < question.id) {
            maxId = question.id;
        }
    });

    const question = new Question(
        {
            id: maxId + 1,
            name: rawObject.name,
        });
    questions.push(question)
}

module.exports = { qcms, addQcm , questions, addQuestion};