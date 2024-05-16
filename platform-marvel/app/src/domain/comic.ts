import { BaseEntity } from "./base";

export interface ComicType extends BaseEntity {
    info: string[];
    avaliations: number;
}