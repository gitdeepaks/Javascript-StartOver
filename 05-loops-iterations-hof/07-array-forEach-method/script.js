const socials = ['Twitter', 'Facebook', 'Google', 'instagram'];


// console.log(socials.__proto__);


// socials.forEach((social, index, arr) =>
//     console.log(`${index} - ${social}`)
// );

function logSocials(social) {
    console.log(social)
}


socials.forEach(logSocials())


const socialObj = [
    { name: 'Twitter' },
    { name: 'facebook' },
    { name: 'Instagram' },
    { name: 'LinkedIn' },
]

socialObj.forEach((items) => console.log(items.name))