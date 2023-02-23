function fetchUSers() {
    showSpimmer();
    fetch('https://randomuser.me/api')
        .then((res) => res.json()
            .then((data) => {
                hideSpimmer()
                displayUser(data.results[0])

            })
        )
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user')

    if (user.gender === 'male') {
        document.body.style.backgroundColor = '#383CC1'
    } else {
        document.body.style.backgroundColor = '#6A1B4D'
    }

    userDisplay.innerHTML = `
    <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>
    `
}

function showSpimmer() {
    document.querySelector('.spinner').style.dispay = 'block';
}

function hideSpimmer() {
    document.querySelector('.spinner').style.dispay = 'none';
}

document.querySelector('#generate').addEventListener('click', fetchUSers)

fetchUSers();