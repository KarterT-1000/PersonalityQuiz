export interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        type: PersonalityType;
    }[];
}

export type PersonalityType = 'friendly' | 'commander' | 'freedom' | 'ideal';