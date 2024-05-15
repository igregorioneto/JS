import { BaseEntity } from "./base";

export interface ComicType extends BaseEntity {
    store: string[];
    critic_rating: number;
}