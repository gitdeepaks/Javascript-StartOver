const library = [

    {
        title: 'ROad Ahead',
        auther: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Steve Jobs',
        auther: 'Walter',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Mocking Jay',
        auther: 'Jk Rowlings',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },

];


library[0].status.read = true
library[1].status.read = true
library[2].status.read = true


const { title: firstbook } = library[0];

console.log(firstbook)

//step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON)