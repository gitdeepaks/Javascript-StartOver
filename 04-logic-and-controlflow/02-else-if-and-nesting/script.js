const d = new Date(10, 39, 2023, 9, 0, 0)

const hour = d.getHours();


if (hour < 12) {
    console.log(`Good Morning ${d.getHours()}`)
} else if (hour < 18) {
    console.log(`Good Afternoon ${d.getHours()}`)
}
else {
    console.log(`Good Night ${d.gethours()}`)
}

//Nested If

if (hour < 12) {
    console.log(`Good Morning ${d.getHours()}`)

    if (hour === 6) {
        console.log('Wake Up')
    }
} else if (hour < 18) {
    console.log(`Good Afternoon ${d.getHours()}`)
}
else {
    console.log(`Good Night ${d.gethours()}`)
    if (hour >= 20) {
        console.log('zzzzzz')
    }
}

if (hour >= 7 && hour < 15) {
    console.log('its a worktime')
}

if (hour = 6 || hour === 20) {
    console.log('brush your teeth')
}