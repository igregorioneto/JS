export interface CardProps {
    name: string;
    description: string;
    backgroundImage: string;
    info: string[];
    avaliations: number;
    onShowModal?: () => void;
}

export interface CardModalProps {
    name: string;
    description: string;
    backgroundImage: string;
    info: string[];
    avaliations: number;
    titleAvaliations: string;
    isDescription: boolean;
    isSuggestion: boolean;
    titleSuggestion?: string;   
    showModal?: boolean; 
    onHide?: () => void;
}