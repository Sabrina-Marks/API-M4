import { v4 as uuidv4 } from "uuid";

export class Cousers {
    constructor(title, description, languagem) {
        this.id = uuidv4(),
            this.title = title,
            this.description = description,
            this.languagem = languagem
    };
};