import { BaseEntity } from "./base";

export interface MovieType extends BaseEntity {
    streaming_platform: string[];
    critic_rating: number;
    type_launch: string;
}