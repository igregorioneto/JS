import { BaseEntity } from "./BaseEntity";

export interface ComicType extends BaseEntity {
    store: string;
    critic_rating: number;
}