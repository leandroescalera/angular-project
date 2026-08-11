interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 80,
    showHp: () => {
        console.log(`Puntos de vida de ${strider.name}: ${strider.hp}`);
    }
};


strider.showHp();
healCharacter(strider, 20);
strider.showHp();

export { };

