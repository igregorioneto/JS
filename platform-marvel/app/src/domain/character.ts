import { BaseEntity } from "./base";

export interface CharacterType extends BaseEntity {    
    appears_in: string[];
    fan_rating: number;
}