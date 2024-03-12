Так начнём с того что вам лучше всего написать npm install или yarn intall(без разницы, что писать зависит от того на чём в работаете.)
После установления node_models попробуйте запустить проект через npm start. 
Теперь перейдем к документации, и так же снизу будет видео как работает само приложение.

Документация приложения для учета расходов
Actions
expenses.js
Содержит действия для управления списком расходов. Включает добавление, удаление и редактирование расходов.

filters.js
Содержит действия для фильтрации и сортировки расходов. Включает фильтрацию по тексту и сортировку по дате или сумме.

Components
AddExpenseForm.js
Форма для добавления новых расходов. Позволяет пользователю ввести данные о расходе и отправить их в хранилище.

ExpenseItem.js
Представляет отдельный расход в списке. Включает в себя детали расхода и предоставляет опции для редактирования или удаления.

ExpenseList.js
Отображает список всех расходов, используя ExpenseItem для каждого элемента и применяет фильтры и сортировку, выбранные пользователем.

FilterComponent.js
Предоставляет пользовательский интерфейс для ввода текста фильтрации, который обновляет список расходов в соответствии с пользовательским вводом.

SortComponent.js
Позволяет пользователю выбрать метод сортировки (по дате или сумме) из выпадающего списка. Изменение выбора обновляет порядок расходов в списке.

TotalExpenses.js
Рассчитывает и отображает общую сумму всех расходов, основываясь на текущем отфильтрованном и отсортированном списке.

Reducers
expenses.js
Управляет состоянием расходов в ответ на действия добавления, удаления и редактирования расходов.

filters.js
Управляет состоянием фильтров, включая текстовый фильтр и критерии сортировки.

index.js
Комбинирует все редюсеры в главный редюсер, который затем используется для создания главного хранилища Redux.

Selectors
expenses.js
Содержит селектор getVisibleExpenses, который принимает список всех расходов и объект фильтров, чтобы вывести отфильтрованный и отсортированный список расходов.

