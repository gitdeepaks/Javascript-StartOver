# Modal Component

Now, we want to create a Modal that includes a form to add a new idea. We are not using Bootstrap or anything, so we need to do this from scratch. The CSS already includes the transition and classes to show and hide the modal.

We are breaking everything into components as if we were using a framework. Let's create a folder called `components` and a file called `Modal.js` inside that folder.

Add the following:

```js
class Modal {
  constructor() {
    this._modal = document.querySelector('#modal');
    this._modalBtn = document.querySelector('#modal-btn');
    this.addEventListeners();
  }

  addEventListeners() {
    this._modalBtn.addEventListener('click', this.open.bind(this));
    window.addEventListener('click', this.outsideClick.bind(this));
  }

  open() {
    this._modal.style.display = 'block';
  }

  close() {
    this._modal.style.display = 'none';
  }

  outsideClick(e) {
    if (e.target === this._modal) {
      this.close();
    }
  }
}

export default Modal;
```

We are using the `querySelector` method to get the modal and the button in the constructor. We are also adding an event listener to the button to open the modal and to the window to close the modal if the user clicks outside of it. We are using the `bind` method to make sure that the `this` keyword is referring to the class. We have a method to open the modal and a method to close the modal. We also have a method to check if the user clicked outside of the modal and close it if they did. Finally, we are exporting the class so we can use it in other files.

Now bring it into your 'index.js' file and create an instance of the class.

```js
import Modal from './components/Modal';
new Modal();
```

Now you should be able to click on the modal button and open the modal.
