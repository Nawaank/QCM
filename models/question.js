class question{ #id;#name;

    constructor(questionToCreate){
        this.#id = questionToCreate.id;
        this.#name = questionToCreate.name;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }
}

module.exports = question