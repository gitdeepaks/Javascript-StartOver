# IdeaList Component

Before we fetch our ideas from the API, let's create a component for the list of ideas. Create a file called `IdeaList.js` inside the `components` folder. For now, we will just use dummy data in the file.

Add the following code:

```js
class IdeaList {
  constructor() {
    this._ideaListEl = document.querySelector('#idea-list');
    this._ideas = [
      {
        id: 1,
        text: 'Idea 1',
        tag: 'Business',
        username: 'John',
        date: '02/01/2023',
      },
      {
        id: 2,
        text: 'Idea 2',
        tag: 'Technology',
        username: 'Jill',
        date: '02/01/2023',
      },
    ];
  }

  render() {
    this._ideaListEl.innerHTML = this._ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea.tag);
        return `
    <div class="card">
    <button class="delete"><i class="fas fa-times"></i></button>
    <h3>
      ${idea.text}
    </h3>
    <p class="tag tag-technology">Technology</p>
    <p>
      Posted on <span class="date">${idea.date}</span> by
      <span class="author">${idea.username}</span>
    </p>
  </div>
    `;
      })
      .join('');
  }
}

export default IdeaList;
```

Now, delete the `div` elements with the class `card` from the `index.html` file. We will render the ideas using the `IdeaList` component.

In your `index.js` file, import the `IdeaList` component and create an instance of it. Call the `render` method on the instance.

```js
import IdeaList from './components/IdeaList';

const ideaList = new IdeaList();
ideaList.render();
```

### Colored Tags

Now, let's add some color to the tags. We will use the `tag` property of the idea to determine the color of the tag. We will create a method called `getTagClass` that will return the class name based on the tag. I already have classes in the css for tag-technology, tag-inventions and a few others. We will put the allowed tags in a `set`.

```js
class IdeaList {
  constructor() {
    this._ideaListEl = document.querySelector('#idea-list');
    this._ideas = [
      {
        id: 1,
        text: 'Idea 1',
        tag: 'Business',
        username: 'John',
        date: '02/01/2023',
      },
      {
        id: 2,
        text: 'Idea 2',
        tag: 'Technology',
        username: 'Jill',
        date: '02/01/2023',
      },
    ];
    this._validTags = new Set();
    this._validTags.add('technology');
    this._validTags.add('software');
    this._validTags.add('business');
    this._validTags.add('education');
    this._validTags.add('health');
    this._validTags.add('inventions');
  }

  getTagClass(tag) {
    tag = tag.toLowerCase();
    let tagClass = '';
    if (this._validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = '';
    }
    return tagClass;
  }

  render() {
    this._ideaListEl.innerHTML = this._ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea.tag);
        return `
      <div class="card">
      <button class="delete"><i class="fas fa-times"></i></button>
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
  }
}

export default IdeaList;
```

Now, the tags that are in the set, will have a color. The rest will be black.
