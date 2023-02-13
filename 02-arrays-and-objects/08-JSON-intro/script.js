//Javascript Object Notation

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
}

const str = JSON.stringify(post)

console.log(str, id)

//Parse 

const obj = JSON.parse(str)


const post2 = [

    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body2',
    },

]

const str2 = JSON.stringify(post2)

console.log(str2)