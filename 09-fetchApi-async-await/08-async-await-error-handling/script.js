const getUsers = async () => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('https://httpstat.us/404');
        if (response.ok) {
            throw new Error('Request failed');
        }
        const data = await response.text();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

const getPosts = async () => {

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await fetch('https://httpstat.us/500');
    if (!response.ok) {
        throw new Error('Request failed');
    }
    const data = await response.text();
    console.log(data)

}

// getUsers()
getPosts().catch((err) => console.log(err))