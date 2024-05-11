import { BaseEntity } from "./BaseEntity";

export interface MovieType extends BaseEntity {
    streaming_platform: string;
    critic_rating: number;
}