import * as readlineSync from 'readline-sync';
import { MyNode, List } from "./list";

function extractWords(text: string): string[] {
    return text.split(/\s+/).filter(word => word.length > 0);
}

function readTextFromUser(): string {
    return readlineSync.question('Digite o texto: ');
}

const userInputText = readTextFromUser();
const words = extractWords(userInputText);

const wordList = new List<string>();
words.forEach(word => {
    const wordNode = new MyNode<string>(word);
    wordList.add(wordNode);
});

const searchWord = readlineSync.question('Digite a palavra a ser buscada: ');

let currentPosition = 1;
let foundPositions: number[] = [];
let currentNode = wordList.start;
while (Object.keys(currentNode).length !== 0) {
    if (currentNode.value === searchWord) {
        foundPositions.push(currentPosition);
    }

    currentNode = currentNode.next;
    currentPosition++;
}

if (foundPositions.length > 0) {
    console.log(`A palavra '${searchWord}' foi encontrada nas posições: ${foundPositions.join(', ')}`);
} else {
    console.log(`A palavra '${searchWord}' não foi encontrada na lista.`);
}
