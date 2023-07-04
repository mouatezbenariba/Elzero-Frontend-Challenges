// let points = document.querySelectorAll('.table__points');
// let test = [];

// let firstPerson = {
//   name: 'Mahmoud',
//   result: 0,
// };

// let secondPerson = {
//   name: 'Sayed',
//   result: 0,
// };

// for (let i = 0; i < points.length; i++) {
//   if (i % 2 === 0) {
//     firstPerson.result += Number(points[i].textContent);
//   } else {
//     secondPerson.result += Number(points[i].textContent);
//   }
// }

// if (firstPerson.result > secondPerson.result) {
//   test = [firstPerson, secondPerson];
// } else {
//   test = [secondPerson, firstPerson];
// }

// let total = document.createElement('table');
// total.classList.add('table');
// total.innerHTML = `
//         <caption>
//           Total Points
//         </caption>
//         <tr>
//           <td class="table__name">${test[0].name}</td>
//           <td class="table__points">${test[0].result}</td>
//         </tr>
//         <tr>
//           <td class="table__name">${test[1].name}</td>
//           <td class="table__points">${test[1].result}</td>
//         </tr>
// `;

// document.querySelector('.container').appendChild(total);

let points = document.querySelectorAll('.table__points');
let users = document.querySelectorAll('.table:first-child tr .table__name');
let usersList = [];

// get the users
for (let i = 0; i < users.length; i++) {
  usersList.push({
    name: users[i].textContent,
    result: 0,
  });
}

// sum the points
for (let i = 0; i < points.length; i++) {
  if (i % 2 === 0) {
    usersList[0].result += Number(points[i].textContent);
  } else {
    usersList[1].result += Number(points[i].textContent);
  }
}

// if (usersList[0].result > usersList[1].result) {
//   usersList = [usersList[0], usersList[1]];
// } else {
//   usersList = [usersList[1], usersList[0]];
// }

usersList.sort((a, b) => b.result - a.result);

let total = document.createElement('table');
total.classList.add('table');
total.innerHTML = `
        <caption>
          Total Points
        </caption>
        <tr>
          <td class="table__name">${usersList[0].name}</td>
          <td class="table__points">${usersList[0].result}</td>
        </tr>
        <tr>
          <td class="table__name">${usersList[1].name}</td>
          <td class="table__points">${usersList[1].result}</td>
        </tr>
`;

document.querySelector('.container').appendChild(total);
