// Функция для загрузки JSON и создания таблицы
let jsonData;
async function loadJsonAndCreateTable() {
    try {
        // Загрузка JSON-файла
        const response = await fetch('./static/price-forecasts.json');
        jsonData = await response.json();

        // Функция для создания таблицы на основе JSON-данных
        function createTable(jsonData) {
            const tableContainer = document.getElementById('table-price-forecasts');

            // Создаем заголовок таблицы
            const headerRow = document.createElement('div');
            headerRow.classList.add('table__row', 'table__row-header');
            headerRow.innerHTML = `
                                <div class="table__td">Month</div>
                                <div class="table__td">Minimum Price</div>
                                <div class="table__td">Maximum Price</div>
                                <div class="table__td">Average Price</div>
                            `;
            tableContainer.appendChild(headerRow);

            // Создаем строки данных
            jsonData.forEach(item => {
                const row = document.createElement('div');
                row.classList.add('table__row');
                row.innerHTML = `
                                    <div class="table__td">${item.month}</div>
                                    <div class="table__td">${item.minPrice}</div>
                                    <div class="table__td">${item.maxPrice}</div>
                                    <div class="table__td">${item.avgPrice}</div>
                                `;
                tableContainer.appendChild(row);
            });
        }

        function createMobileTable(jsonData) {
            const tableContainer = document.getElementById('table-price-forecasts');

            const headerRow = document.createElement('div');
            headerRow.classList.add('table__header');

            const select = document.createElement('select');
            select.classList.add('table__select-price', 'select-mobile')

            jsonData.forEach(item => {
                const option = document.createElement('option');
                option.textContent = item.month;
                option.setAttribute('data-min-price', item.minPrice);
                option.setAttribute('data-max-price', item.maxPrice);
                option.setAttribute('data-avg-price', item.avgPrice);

                select.appendChild(option);
            });

            headerRow.appendChild(select);
            tableContainer.appendChild(headerRow);

            const tableBody = document.createElement('div');
            tableBody.innerHTML = `
                                    <div class="table__row">
                                        <div class="table__td">Minimum Price</div>
                                        <div id="table-min-price" class="table__td">${jsonData[0].minPrice}</div> 
                                    </div>
                                     <div class="table__row">
                                        <div class="table__td">Maximum Price</div>
                                        <div id="table-max-price" class="table__td">${jsonData[0].maxPrice}</div> 
                                    </div>
                                     <div class="table__row">
                                        <div class="table__td">Average Price</div>
                                        <div id="table-avg-price" class="table__td">${jsonData[0].avgPrice}</div> 
                                    </div>
                `;
            tableContainer.appendChild(tableBody);

            new Choices('.table__select-price', {
                searchEnabled: false,
                itemSelectText: '',
                shouldSort: false,
                placeholderValue: '',
            });

            listenerTableSelectPrice();
        }


        // Создаем таблицу на основе загруженных JSON-данных
        if (window.innerWidth < 768) {
            createMobileTable(jsonData);
        } else {
            createTable(jsonData);
        }

    } catch (error) {
        console.error('Ошибка загрузки JSON:', error);
    }
}

// Вызов функции для загрузки JSON и создания таблицы
loadJsonAndCreateTable();

function listenerTableSelectPrice() {
    const tableSelectPrice = document.querySelector('.table__select-price');

    tableSelectPrice.addEventListener('change', function (event) {
        const activeId = document.querySelector('#table-price-forecasts .choices__item.is-selected').getAttribute('data-id')
        const tableMinPriceField = document.querySelector('#table-min-price');
        const tableMaxPriceField = document.querySelector('#table-max-price');
        const tableAvgPriceField = document.querySelector('#table-avg-price');


        const minPrice = jsonData[activeId - 1].minPrice;
        const maxPrice = jsonData[activeId - 1].maxPrice;
        const avgPrice = jsonData[activeId - 1].avgPrice;

        tableMinPriceField.innerText = minPrice;
        tableMaxPriceField.innerText = maxPrice;
        tableAvgPriceField.innerText = avgPrice;

    });
}