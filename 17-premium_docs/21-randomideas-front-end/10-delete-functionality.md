# Delete Functionality

Now we want to be able to delete ideas from the client. Let's start by adding the delete to the API service. I am also going to add an update, even though we are not going to use it in this project.

```js
 updateIdea(id, data) {
  return axios.put(`${this._apiUrl}/${id}`, data);
}

deleteIdea(id) {
  const username = localStorage.getItem('username')
    ? localStorage.getItem('username')
    : '';
  return axios.delete(`${this._apiUrl}/${id}`, {
    data: {
      username,
    },
  });
}
```

Now in the `components/ideaList.js` file, let's add an `addEventListeners` function that will add the event listeners to the delete buttons.

```js
addEventListeners() {
    this._ideaListEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-times')) {
        e.stopImmediatePropagation();
        const ideaId = e.target.parentElement.parentElement.dataset.id;
        this.deleteIdea(ideaId);
      }
    });
  }
```

We used `stopImmediatePropagation` to stop the event from bubbling up to the parent element. We also get the idea id from the dataset on the parent element. We don't have an data-id attribute on the element yet, so let's add it.

In the `render` function, add the `data-id` attribute to the `div` with the class of `card`:

```js
<div class='card' data-id='${idea._id}'>
  ${deleteBtn}
  <h3>${idea.text}</h3>
  <p class='tag ${tagClass}'>${idea.tag.toUpperCase()}</p>
  <p>
    Posted on <span class='date'>${idea.date}</span> by
    <span class='author'>${idea.username}</span>
  </p>
</div>
```

Now, create the `deleteIdea` function:

```js
 async deleteIdea(ideaId) {
    try {
      // Delete from server
      const res = await IdeasApi.deleteIdea(ideaId);
      this._ideas.filter((idea) => idea._id !== ideaId);
      this.getIdeas();
    } catch (error) {
      alert('You can not delete this resource');
    }
  }
```

We just filtered out the idea from the array and then called the `getIdeas` function to re-render the list.

### Hide Delete Button

Let's only show the delete button to people that own that idea. We can do that by checking for the username in the idea and comparing it to the username in local storage.

Here is the entire `render` function:

```js
render() {
  this._ideaListEl.innerHTML = this._ideas
    .map((idea) => {
      const tagClass = this.getTagClass(idea.tag);
      const deleteBtn =
        idea.username === localStorage.getItem('username')
          ? `<button class="delete"><i class="fas fa-times"></i></button>`
          : '';
      return `
    <div class="card" data-id="${idea._id}">
   ${deleteBtn}
    <h3>
      ${idea.text}
    </h3>
    <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
    <p>
      Posted on <span class="date">${idea.date}</span> by
      <span class="author">${idea.username}</span>
    </p>
  </div>
    `;
    })
    .join('');
  this.addEventListeners();
}
```

Now only ideas that you create should show the delete button
