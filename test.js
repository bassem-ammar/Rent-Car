function findCombinationsFromText(inputText) {
    const words = inputText.split('-');
    const combinations = [];
    function generateCombinations(combination, index) {
        if (index === words.length) {
            combinations.push(combination.slice());
            return;
        }
        const currentWord = words[index];
        combination.push(currentWord);
        generateCombinations(combination, index + 1);
        combination.pop();
        const hyphenatedParts = currentWord.split('_');
        if (hyphenatedParts.length > 1) {
            const newWord = hyphenatedParts.join(' ');
            combination.push(newWord);
            generateCombinations(combination, index + 1);
            combination.pop();
        }
    }
    generateCombinations([], 0);
    return combinations;
}
