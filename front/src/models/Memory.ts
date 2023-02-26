export type Slot = {
    card : {
        id: number;
        name: string;
        version: number;
        src: string;
    },
    isVisible: boolean;
    isWon: boolean;
}

export type Slots = Slot[] | [];

export type CardType = { id: number; name: string, version: number, src: string };

