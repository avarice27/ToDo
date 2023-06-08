export const getTodoFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);

    let todoItems = null;

    try {
    const parsedJSON = JSON.parse(value);

    if (Array.isArray(parsedJSON)) {
        todoItems = parsedJSON;
    }
    } catch (e) {
      // jika tidak valid, set array kosong
    todoItems = [];
    }

    return todoItems;
};

  // Save todo ke local storage
export const saveTodoToLocalStorage = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));
