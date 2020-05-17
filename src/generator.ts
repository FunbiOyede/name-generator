import {Nouns,Adjectives} from './data';
export default class Generator{

    generate(): string{
        const randomeAdjective = Adjectives[Math.floor(Math.random() * Adjectives.length)];
        const randomNoun = Nouns[Math.floor(Math.random() * Nouns.length)];
        const randomName = randomeAdjective + randomNoun;
        return randomName

    }

}