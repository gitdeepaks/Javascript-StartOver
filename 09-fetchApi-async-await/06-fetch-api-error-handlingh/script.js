function creatPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
        }),

        headers: {
            'Content-Type': 'application/json',

            token: 'abc123'
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })

}


creatPost({ title: 'My Post', body: "Hello there" })

