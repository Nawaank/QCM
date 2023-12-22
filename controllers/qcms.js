const {qcms, addQcm, addQuestion, questions} = require('../models/inmemory');

const displayQcms = (req, res) => {
    for (let qcm of qcms) {
        console.log(qcm.id);
    }

    res.render('qcms', {qcms: qcms});
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    console.log(id);
    const qcm = qcms.find((element) => element.id === id);
    res.render('qcm', {qcm: qcm});
}

const displayQcmJson = (req, res) => {
    res.json({qcms});
}

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};

const createNewQcm = (req, res) => {

    addQcm({
        name: req.body.name,
        subject: req.body.subject,
        nbpoints: req.body.nbpoints,
        questions: req.body.questions
    });
    res.redirect('/qcms');
};

module.exports = {displayQcms, displayFormQcm, createNewQcm, displayQcmJson, displayQcmDetailed};