async function asyncSeries(tasks) {
  const results = [];

  for (const task of tasks) {
    const result = await task();
    results.push(result);
  }
  return results;
}

//useage

const asyncTasks = [
  () => Promise.resolve(1),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
  () => Promise.resolve(3),
];

asyncSeries(asyncTasks).then((res) => console.log(res));
