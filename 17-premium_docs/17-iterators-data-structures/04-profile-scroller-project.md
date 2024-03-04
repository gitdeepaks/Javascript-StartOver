# Profile Scroller Project

In this project, we will use a simple generator function to create a dating app profile scroller. We are using people, but you could use any type of data.

## The HTML

Here is the HTML. There is a dummy person in the HTML, but we will be using JavaScript to add more people.

```html
<div class="container">
  <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
  <div class="profile-info">
    <h3>Jamie Williams</h3>
    <p>26 Years Old</p>
    <p>From London, UK</p>
    <p>Female looking for male</p>
    <button id="next">Show Next</button>
  </div>
</div>
``` 
## The CSS 

We have some simple CSS 

```css @import
url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
body { font-family: 'Poppins', sans-serif; background: #f5f5f5; font-size: 18px;
} .container { width: 400px; margin: 100px auto; padding: 40px 20px; background:
#fff; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 0 10px #ccc;
text-align: center; } img { border-radius: 50%; } button { background: purple;
color: #fff; border: 1px solid #ccc; border-radius: 10px; padding: 14px 25px;
margin: 10px; cursor: pointer; font-size: inherit; } button:hover { background:
#fff; color: purple; }
```

## The JavaScript

Let's create an array of people with their info.

```js
const people = [
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];
```

In a real-world app, this would be coming from an API.

Let's bring in everything we need from the DOM.

```js
const container = document.querySelector('.container');
const img = container.querySelector('img');
const profileInfo = container.querySelector('.profile-info');
const nextBtn = container.querySelector('#next');
```

Now we can create a generator function that will yield a person from the array. We will then set the generator to a variable called `generator`.

```js
function* peopleGenerator() {
  let index = 0;
  while (true) {
    yield people[index++ % people.length];
  }
}

const generator = peopleGenerator();
```

Now we will create the event listener for the button. When the button is clicked, we will get the next person from the generator and set the DOM elements to the new person's info. We will also make the initial 'click' to get the first person.

```js
nextBtn.addEventListener('click', () => {
  const person = generator.next().value;
  img.src = person.imageURL;
  profileInfo.querySelector('h3').textContent = person.name;
  profileInfo.querySelectorAll('p')[0].textContent = `${person.age} Years Old`;
  profileInfo.querySelectorAll('p')[1].textContent = `From ${person.location}`;
  profileInfo.querySelectorAll('p')[2].textContent = person.looking;
});

nextBtn.click();
```

Now we have a profile scroller. You can click the `next` button and it will show the next person. Feel free to add more people to the array.
