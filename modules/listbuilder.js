const listbuilder = () => {
  const arr = JSON.parse(window.localStorage.getItem('bookarr'));
  const booklist = document.querySelector('#bookcontainer');
  arr.forEach((item) => {
    booklist.innerHTML += `<div class="book">
    <p class="title-author">"${item.title}" by ${item.author}</p>
    <label for="${arr.indexOf(item)}" hidden>Remove "${item.title}"</label>
    <button id=${arr.indexOf(item)} class="remover">Remove</button>
    </div>`;
  });
};

export default listbuilder;