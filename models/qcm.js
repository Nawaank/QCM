class Qcm { #id; #name; #subject; #nbpoints; #questions;

    constructor(qcmToCreeate) {
      this.#id = qcmToCreeate.id;
      this.#name = qcmToCreeate.name;
      this.#subject = qcmToCreeate.subject;
      this.#nbpoints = qcmToCreeate.nbpoints;
      this.#questions = qcmToCreeate.questions;
    }

    get id() {
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    get nbpoints(){
        return this.#nbpoints
    }
    get subject(){
        return this.#subject;
    }
    get questions(){
        return this.#questions;
    }
}

module.exports = Qcm;