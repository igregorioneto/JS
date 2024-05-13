import { BaseEntity } from "./base";

export interface CharacterType extends BaseEntity {
    image_id: string;
    appears_in: string[];
    fan_rating: number;
}