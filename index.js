const form = document.querySelector('#form');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

class BookList {
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

const list = new BookList();

function record() {
  const title = form.querySelector('#title');
  const author = form.querySelector('#author');
  const titlename = title.value;
  const authorname = author.value;
  list.add(titlename, authorname);
}

window.addEventListener('load', () => {
  const arr = JSON.parse(window.localStorage.getItem('bookarr'));
  const booklist = document.querySelector('#bookcontainer');
  arr.forEach((item) => {
    booklist.innerHTML += `<div class="book">
    <p class="title-author">"${item.title}" by ${item.author}</p>
    <button id=${arr.indexOf(item)} onclick="deleting(this.id)" class="remover">Remove</button>
    </div>`;
  });
});

// eslint-disable-next-line no-unused-vars
function deleting(id) {
  list.remove(id);
  window.location.reload();
}

form.addEventListener('submit', () => {
  record();
});

const listnav = document.querySelector('#listnav');
const listsection = document.querySelector('#listsection');

const addnav = document.querySelector('#addnav');
const formsection = document.querySelector('#formsection');

const contactnav = document.querySelector('#contactnav');
const contactsection = document.querySelector('#contactsection');

listnav.addEventListener('click', () => {
  listsection.style.display = 'flex';
  listnav.style.cssText = `color: blue;
  cursor: auto;`;
  formsection.style.display = 'none';
  addnav.style.cssText = 'color: black; cursor: pointer;';
  contactsection.style.display = 'none';
  contactnav.style.cssText = 'color: black; cursor: pointer;';
});

addnav.addEventListener('click', () => {
  formsection.style.display = 'flex';
  addnav.style.cssText = `color: blue;
  cursor: auto;`;
  listsection.style.display = 'none';
  listnav.style.cssText = 'color: black; cursor: pointer;';
  contactsection.style.display = 'none';
  contactnav.style.cssText = 'color: black; cursor: pointer;';
});

contactnav.addEventListener('click', () => {
  contactsection.style.display = 'flex';
  contactnav.style.cssText = `color: blue;
  cursor: auto;`;
  listsection.style.display = 'none';
  listnav.style.cssText = 'color: black; cursor: pointer;';
  formsection.style.display = 'none';
  addnav.style.cssText = 'color: black; cursor: pointer;';
});