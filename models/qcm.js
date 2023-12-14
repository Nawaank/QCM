class myQCM { #id; #name; #theme; #subject; #author; #nbpoints;

    constructor(qcmToCreeate) {
      this.#id = qcmToCreeate.id;
      this.#name = qcmToCreeate.name;
      this.#theme = qcmToCreeate.theme;
      this.#subject = qcmToCreeate.subject;
      this.#author = qcmToCreeate.author;
      this.#nbpoints = qcmToCreeate.nbpoints;
    }

    get id() {
        return this.#id;
    }
    get theme() {
        return this.#theme;
    }
    get name(){
        return this.#name;
    }
    get author(){
        return this.#author;
    }
    get nbpoints(){
        return this.#nbpoints
    }
    get subject(){
        return this.#theme;
    }
}


module.exports = myQCM;