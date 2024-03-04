# IdeaForm Component

Now that we have a Modal component, I also want to have a component for the form. Let's create a file called `IdeaForm.js` inside the `components` folder.

Add the following code:

```js
import IdeaList from './IdeaList';

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector('#form-modal');
  }

  addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();

    if (
      !this._form.elements.text.value ||
      !this._form.elements.tag.value ||
      !this._form.elements.username.value
    ) {
      alert('Please enter all fields');
      return;
    }

    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    console.log(idea);

    // Clear fields
    this._form.elements.text.value = '';
    this._form.elements.tag.value = '';
    this._form.elements.username.value = '';

    this.render();

    document.dispatchEvent(new Event('closemodal'));
  }

  render() {
    this._formModal.innerHTML = `
    <form id="idea-form">
    <div class="form-control">
      <label for="idea-text">Enter a Username</label>
      <input type="text" name="username" id="username" value="${
        localStorage.getItem('username') ? localStorage.getItem('username') : ''
      }" />
    </div>
    <div class="form-control">
      <label for="idea-text">What's Your Idea?</label>
      <textarea name="text" id="idea-text"></textarea>
    </div>
    <div class="form-control">
      <label for="tag">Tag</label>
      <input type="text" name="tag" id="tag" />
    </div>
    <button class="btn" type="submit" id="submit">Submit</button>
  </form>
    `;
    this._form = document.querySelector('#idea-form');
    this.addEventListeners();
  }
}

export default IdeaForm;
```

So we created a class for the form component and we are rendering the HTML from our JavaScript. We are also adding event listeners to the form. We are also storing the form in a property so we can access it later.

We need the modal to close when the form is submitted. We can do this by dispatching an event from the form component. We can listen for this event in the modal component.

```js
document.dispatchEvent(new Event('closemodal'));
```

Now, in the `components/Modal.js` file, we can listen for this event and close the modal. Add this to the `addEventListeners` method:

```js
document.addEventListener('closemodal', () => this.close());
```

Go to your HTML and remove the form from the modal. We are going to render it with JavaScript.

```html
<div id="modal" class="modal">
  <div id="form-modal" class="modal-box"></div>
</div>
```

Bring in your IdeaForm component in the `index.js` file and render it.

```js
import IdeaForm from './components/IdeaForm';
const ideaForm = new IdeaForm();
ideaForm.render();
```

Now your form should display and submit.
