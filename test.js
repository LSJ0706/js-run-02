const users = [];

function calculateStatistics(users) {
  const newAge = users.reduce(
    (acc, cur) => {
      acc.maxAge = Math.max(acc.maxAge, cur.age);
      acc.averageAge += cur.age;
      return acc;
    },
    { averageAge: 0, maxAge: -Infinity }
  );
  newAge.averageAge = users.length > 0 ? result.totalAge / users.length : 0;
  newAge.maxAge = newAge.maxAge === -Infinity ? 0 : newAge.maxAge;
  return newAge;
}

console.log(calculateStatistics(users));
