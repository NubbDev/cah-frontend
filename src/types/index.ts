export interface GameType {
    id: number;
    name: string;
    host: PlayerType;
    started: boolean;
    players: PlayerType[];
    maxPlayers: number;
    goal: number;
    cards: CardType[];
}

export interface PlayerType {
    id: number;
    name: string;
}

export interface CardType {
    id: string;
    name: string;
}

export const array_move = (arr: any[], old_index: number, new_index: number) => {
    if (new_index >= arr.length) {
        let k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}