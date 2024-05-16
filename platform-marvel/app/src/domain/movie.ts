import { BaseEntity } from "./base";

export interface MovieType extends BaseEntity {
    info: string[];
    avaliations: number;
    type_launch: string;
}