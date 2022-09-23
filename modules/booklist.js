export function Book(title, author) {
  this.title = title;
  this.author = author;
}

export class BookList {
  constructor() {
    this.container = [];
  }

  add(title, author) {
    this.container = JSON.parse(window.localStorage.getItem('bookarr'));
    if (this.container === null) {
      this.container = [];
    }
    const newBook = new Book(title, author);
    this.container.push(newBook);
    window.localStorage.setItem('bookarr', JSON.stringify(this.container));
  }

  remove(id) {
    this.container = JSON.parse(window.localStorage.getItem('bookarr'));
    this.container.splice(id, 1);
    window.localStorage.setItem('bookarr', JSON.stringify(this.container));
  }
}