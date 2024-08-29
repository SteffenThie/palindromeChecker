// Die verschiedenen HTML Elemente holen und in Variablen packen
const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultMessage = document.getElementById('result');

const checkIfPalindrome = (input) => {

    if (input === '') {
        alert('Please input a value');
        return
    }

    // Nicht erwünschte Zeichen entfernen und lower case machen 
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    // Den String umkehren und checken, ob er dem ursprünglichen String entspricht
    const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join('');

    // Die Result-Message erstellen
    const resultMessageContent = isPalindrome ? `<strong>${input}</strong> is a palindrome` : `<strong>${input}</strong> is not a palindrome`;

    // Das vorherige pResult entfernen
    while (resultMessage.firstChild) {
        resultMessage.removeChild(resultMessage.firstChild);
    }

    // Klasse 'hidden' hinzufügen, um das Ergebnisfeld zu verstecken
    resultMessage.classList.add('hidden');

    const pResult = document.createElement('p');
    pResult.innerHTML = resultMessageContent;
    resultMessage.appendChild(pResult);
    resultMessage.classList.remove('hidden');
};

checkButton.addEventListener("click", () => {
    checkIfPalindrome(textInput.value);


});

textInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        checkIfPalindrome(textInput.value);
    }
});