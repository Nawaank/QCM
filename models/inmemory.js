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
    let maxId = 0;
    //recupere l'id le plus grand
    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });
    // creation du QCM avec l id max
    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints),
            questions: rawObject.questions,
        }); console.log(qcm.questions)
    // ajout du QCM a la liste
    qcms.push(qcm);
}


module.exports = { qcms, addQcm};