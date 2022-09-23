const navigation = () => {
  const listsection = document.querySelector('#listsection');

  const formsection = document.querySelector('#formsection');

  const contactsection = document.querySelector('#contactsection');

  const navigating = (id) => {
    if (id === 'listnav') {
      listsection.style.display = 'flex';
      formsection.style.display = 'none';
      contactsection.style.display = 'none';
      document.location.reload();
    }
    if (id === 'addnav') {
      listsection.style.display = 'none';
      formsection.style.display = 'flex';
      contactsection.style.display = 'none';
    }
    if (id === 'contactnav') {
      listsection.style.display = 'none';
      formsection.style.display = 'none';
      contactsection.style.display = 'flex';
    }
  };

  const navitems = document.querySelectorAll('.navitem');
  navitems.forEach((navitem) => {
    navitem.addEventListener('click', (e) => {
      const buttonindex = e.target.id;
      navigating(buttonindex);
    });
  });
};

export default navigation;
