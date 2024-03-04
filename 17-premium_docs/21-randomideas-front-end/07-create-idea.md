# Create Idea via Form & POST Request

Now, we want to be able to submit our form and create a new idea. We will use the `POST` method to do this. We will also use the `axios` library to make the API call.

In the `services/ideasApi.js` file, add the following method to the class:

```js
 createIdea(data) {
    return axios.post(this._apiUrl, data);
  }
```

Now go to `components/ideaForm.js` and add the following code:

```js
import IdeasApi from '../services/ideasApi';
```

Make the `handleSubmit` method `async` and add the following code:

```js
async handleSubmit(e) {
    e.preventDefault();

    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    // Add idea to server
    const newIdea = await IdeasApi.createIdea(idea);

    // Clear fields
    this._form.elements.text.value = '';
    this._form.elements.tag.value = '';
    this._form.elements.username.value = '';

    document.dispatchEvent(new Event('closemodal'));
  }

```

### Update the DOM

We also want the DOM to get updated, so let's create a method in the `ideaList` component

```js
addIdeaToList(idea) {
    this._ideas.push(idea);
    this.render();
  }
```

Now, bring in the `ideaList` component in the `components/ideaForm.js` file and add the following code right under where we called the IdeasApi.createIdea method:

```js

import IdeaList from './IdeaList';

 constructor() {
    this._formModal = document.querySelector('#form-modal');
    this._ideaList = new IdeaList(); // <--- Add this line
  }


// Add idea to list
this._ideaList.addIdeaToList(newIdea.data.data);
```

Now, try and add a new idea via the form.
