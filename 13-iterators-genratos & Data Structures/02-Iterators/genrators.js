function* createTeamIterator(teams) {
  for (let index = 0; index < teams.length; index++) {
    yield teams[index];
  }
}

const teams = ["red", "green", "yellow", "blue"];

const iterator = createTeamIterator(teams);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const team of createTeamIterator(teams)) {
  console.log(team);
}

console.log([...createTeamIterator(teams)]);

const [first, second, third] = createTeamIterator(teams);

console.log(first, second, third);
