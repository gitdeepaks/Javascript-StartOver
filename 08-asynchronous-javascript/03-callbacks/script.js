// document.querySelector('button').addEventListener('click', toggle);

// function toggle(e) {
//     e.target.classList.toggle('danger');
// }


const posts = [

    { tile: 'Post One', body: 'Hello, world!' },
    { tile: 'Post Two', body: 'Hello, world!!!!' },

];

function createPosts(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000)
}


function getPosts() {
    setTimeout(() => {
        posts.forEach(function (post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.tile}</strong> -${post.body} `
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}

createPosts({ tile: 'Post Three', body: 'Hello, world!!!!!' }, getPosts)

