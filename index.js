import { DateTime } from './modules/luxon.js';

import listbuilder from './modules/listbuilder.js';

import navigation from './modules/navigation.js';

import { record, list, form } from './modules/record.js';

document.querySelector('#date').innerHTML = DateTime.now().toFormat('MMMM dd, yyyy');

const deleting = (id) => {
  list.remove(id);
  window.location.reload();
};

window.addEventListener('DOMContentLoaded', () => {
  listbuilder();
  const removers = document.querySelectorAll('.remover');
  removers.forEach((remover) => remover.addEventListener('click', (e) => {
    const buttonindex = e.target.id;
    deleting(buttonindex);
  }));
});

const button = form.querySelector('#button');

button.addEventListener('click', () => {
  record();
});

navigation();
