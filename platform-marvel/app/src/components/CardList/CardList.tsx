import { BigRectangle, CardDescription, CardTitle, DetailLink, SmallRectangle } from "./CardList.styles"

interface CardListProps {
    name: string;
    description: string;
    backgroundImage: string;
}

export const CardList: React.FC<CardListProps> = ({ name, description, backgroundImage }) => (
    <BigRectangle backgroundImage={backgroundImage} >
        <SmallRectangle>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <DetailLink href="#">Ver detalhes</DetailLink>
        </SmallRectangle>
    </BigRectangle>
);