import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    driver_license: string;

    @Column()
    is_admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(name: string, email: string, password: string, driver_license: string, is_admin: boolean) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.driver_license = driver_license;
        this.is_admin = is_admin;
        this.created_at = new Date();

        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User }