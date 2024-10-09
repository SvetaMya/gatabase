// Структура данных
const jobs = ["Руководитель", "Программист", "Контент менеджер", "Стажер"];
const employees = [
  ["Антон", 0],
  ["Юля", 1],
  ["Коля", 1],
  ["Ира", 2],
  ["Катя", 3],
];
const employeeTable = document.getElementById("employeeElem");
const jobTable = document.getElementById("jobElem");

// Функция подготовки данных
function prepareData(id) {
  let result;
  switch (true) {
    case /^\d+$/.test(id) && id < jobs.length:
      result = employees.filter((item) => item[1] === parseInt(id));
      break; // Если индекс, то вернуть отфильтрованную таблицу
    case id === "all":
      result = employees; // Если все, то вернуть всех
      break;
    default:
      result = employees; // В другом случае, вернуть всех
      break;
  }
  return result;
}

// Функция для печати таблиц
function printTables(table, array) {
  if (!table) {
    alert("Таблица не найдена");
    return;
  }
  let header = `<tr>
    <th class="th">Имя</th>`;
  if (table === jobTable) {
    header += '<th class="th">Должность</th>';
  }
  header += "</tr>";

  let htmlTable = "";

  array.forEach((item) => {
    htmlTable =
      htmlTable +
      `<tr>
            <td class="td">${item[0]}</td>`;

    if (table === jobTable) {
      htmlTable = htmlTable + `<td class="td">${jobs[item[1]]}</td>`;
    }
    htmlTable += "</tr>";
  });

  table.innerHTML = header + htmlTable;
}

// Создание кнопки
function createButton(i) {
  let button = document.createElement("button");
  document.body.append(button);
  if (i === "all") {
    button.textContent = "Показать всех";
  } else {
    button.textContent = jobs[i];
  }
  button.addEventListener("click", () => {
    printTables(jobTable, prepareData(i));
  });
}

// Добавление кнопок
function addButton() {
  if (!jobTable) {
    alert("Таблица должностей не найдена");
    return;
  }
  for (let i = 0; i < jobs.length; i++) {
    createButton(i);
  }
  createButton("all");
}

// Вывод таблиц и кнопок
printTables(jobTable, prepareData("all"));
printTables(employeeTable, prepareData(""));
addButton();
