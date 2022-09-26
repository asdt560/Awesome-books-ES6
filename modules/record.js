import { BookList } from './booklist.js';

export const form = document.querySelector('#form');

export const list = new BookList();

export const record = () => {
  const title = form.querySelector('#title');
  const author = form.querySelector('#author');
  const titlename = title.value;
  const authorname = author.value;
  list.add(titlename, authorname);
};
