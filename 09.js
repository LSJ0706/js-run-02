/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.
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
  // TODO
}

// export를 수정하지 마세요.
export { calculateStatistics };
