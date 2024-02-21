/**
 * Задание 1
 */

class Library {
  #books = [];

  constructor(arrBooks = []) {
    if (arrBooks.length !== new Set(arrBooks).size) {
        throw new Error("This array is not unique");
    }
    this.#books = arrBooks;
  };

  get allBooks() {
    return this.#books;
  };

  addBook(title) {

    if (this.hasBook(title)) {
      throw new Error("This book is already in the library");
    } else {
      this.#books.push(title);
    }
}

  removeBook(title) {
    if (!this.hasBook(title)) {
      throw new Error("This book is not in the library");
    } else {
      this.#books.splice(this.#books.indexOf(title), 1);
    }
  };

  hasBook(title) {
    return this.#books.includes(title);
  };
}

let library = new Library(['Война и Мир', 'Бедная Лиза', 'Стихи А.С. Пушкин', 'Бородино']);
 console.log(library.allBooks);

library.addBook('Подход к понимаю сверточных нейронных сетей методом кейсов');
 console.log('Добавление книги. Общая библиотека содержит: ', library.allBooks);

 library.removeBook('Над пропастью во ржи');
 console.log('Удаление книги. Общая библиотека содержит:' , library.allBooks);

