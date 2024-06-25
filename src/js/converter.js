// Инициализация Choices.js
const selects = document.querySelectorAll('.converter-select-js');
const choicesInstances = [];

selects.forEach((select, index) => {
    const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholderValue: '',
    });
    choicesInstances.push(choices); // Сохраняем экземпляры Choices.js
});

function swapValues() {
    const input1 = document.getElementById('converter-input-1');
    const input2 = document.getElementById('converter-input-2');
    let tempInputValue = input1.value;
    input1.value = input2.value;
    input2.value = tempInputValue;

    const select1Value = choicesInstances[0].getValue(true);
    const select2Value = choicesInstances[1].getValue(true);

    choicesInstances.forEach(choices => choices.destroy());

    // Меняем значения select
    selects[0].value = select2Value;
    selects[1].value = select1Value;

    choicesInstances[0] = new Choices(selects[0], {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholderValue: '',
    });
    choicesInstances[1] = new Choices(selects[1], {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholderValue: '',
    });
}

document.querySelector('.converter__swap').addEventListener('click', (event) => {
    event.preventDefault();
    swapValues();
});
