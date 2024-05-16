import { BaseEntity } from "./base";

export interface CharacterType extends BaseEntity {    
    info: string[];
    avaliations: number;
}