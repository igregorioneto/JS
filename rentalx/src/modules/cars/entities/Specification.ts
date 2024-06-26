import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("specifications")
class Specification {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.created_at = new Date();
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Specification };