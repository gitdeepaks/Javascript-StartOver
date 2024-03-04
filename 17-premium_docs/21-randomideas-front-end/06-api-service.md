# API Service

Now, we will fetch our data from the backend. In the `ideaList` component, delete the hardcoded objects and make `ideas` an empty array.

```js
this._ideas = [];
```

Create the file `services/ideasApi.js` and add the following code:

```js
import axios from 'axios';

class IdeasApi {
  constructor() {
    this._apiUrl = 'http://localhost:5000/api/ideas';
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }
}

export default new IdeasApi();
```

Now, since we are using `axios` to make the API call, we need to install it. Run the following command in the terminal:

```bash
npm install axios
```

In the `index.js` file, import the `ideasApi` service and call the `getIdeas` method and add the following code.

```js
import IdeasApi from '../services/ideasApi';

class IdeaList {
  constructor() {
    this._ideaListEl = document.querySelector('#idea-list');
    this._ideas = [];
    this.getIdeas();

    this._validTags = new Set();
    this._validTags.add('technology');
    this._validTags.add('software');
    this._validTags.add('business');
    this._validTags.add('education');
    this._validTags.add('health');
    this._validTags.add('inventions');
  }

  async getIdeas() {
    try {
      const res = await IdeasApi.getIdeas();
      this._ideas = res.data.data;
      this.render();
    } catch (error) {
      console.log(error);
    }
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

We are calling the `getIdeas` method in the constructor. This will fetch the ideas from the API and render them on the page.

## Enabling CORS

You will probably get an error that says your request is being blocked by CORS. This is because the API is running on a different port than the frontend. To fix this, we need to enable CORS in the backend. In the `server.js` file, add the following code:

```js
const cors = require('cors');

// cors middleware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);
```

You need to install cors in the backend, so make sure you are in the root folder in the terminal and type

```bash
npm install cors
```

Also, when you start your backend server, do not use Nodemon. Start or restart it with `npm start`

Now, when you make your request from your frontend, you should see the ideas. If you don't, check the console for any errors.

You can also open up postman and make a POST request to add an idea and you should see it reflect in the browser.
