// Task 1
export function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 2; i <= 20; i++) {
  console.log(`${i} is prime: ${isPrime(i)}`);
}

// Task 2

export const randomArray = [54, 9, 87, 23, 45, 78, 31, 69, 4, 92]
export function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length === 0) {
    return { min: 0, max: 0 };
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min: min, max: max };
}

const result = findMinMax(randomArray);
console.log('min and max:', result);

// Task 3
export const user = {
  name: 'Albert Tenigin',
  age: 29,
  email: 'aa.tenigin@talantiuspeh.ru',
  greet() {
    console.log(`hiiiiiii, ${this.name}!`);
  }
};

export function displayUserInfo(userObj) {
  console.log(`name: ${userObj.name}, age: ${userObj.age}, email: ${userObj.email}`);
}
displayUserInfo(user);
user.greet();

// Task 4
export const students = ['YR', 'Nastya Z.', 'MD', 'Grigoryan', 'XZ'];

for (let i = 0; i < students.length; i++) {
  console.log(`student ${students[i]}, ur number: ${i}`);
}

export function findLongestName(students) {
  let longestName = '';
  for (const student of students) {
    if (student.length > longestName.length) {
      longestName = student;
    }
  }
  return longestName;
}

export const longestName = findLongestName(students);
console.log(`most longest name: ${longestName}`);

// Task 5
export function formatDate(date) {
    let year = String(date.getFullYear());
    let month = String(date.getMonth());
    let day = String(date.getDate());
    let hour = String(date.getHours());
    let min = String(date.getMinutes());

    if (day.length < 2) {
        day = '0' + day;
    }
    if (month.length < 2) {
        month = '0' + month;
     }
    
    if (hour.length < 2) {
        hour = '0' + hour;
    }

    if (min.length < 2) {
        min = '0' + min;
    }

    return `${year}/${month}/${day} ${hour}:${min}`;
}

let currentdate = new Date(Date.now());
console.log(formatDate(currentdate));

export function getDiffdate(one, oth) {
    return Math.abs(one.getDate() - oth.getDate())
}

let oth = new Date ('September 11, 2001 10:10:10');
console.log(getDiffdate(currentdate, oth))