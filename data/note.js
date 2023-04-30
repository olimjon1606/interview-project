// const tableEl = document.querySelector("table");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const pages = document.querySelector(".pages")
// const inputEl = document.querySelector(".input");


// function generateData(numRows) {
//     const data = [];
//     const columns = [
//         { name: "id", generator: () => faker.random.uuid() },
//         { name: "firstName", generator: () => faker.name.firstName() },
//         { name: "lastName", generator: () => faker.name.lastName() },
//         { name: "email", generator: () => faker.internet.email() },
//         { name: "phone", generator: () => faker.phone.phoneNumber() },
//         { name: "address", generator: () => faker.address.streetAddress() },
//         { name: "city", generator: () => faker.address.city() },
//         { name: "state", generator: () => faker.address.state() },
//         { name: "country", generator: () => faker.address.country() },
//         { name: "zipCode", generator: () => faker.address.zipCode() }
//     ];

//     for (let i = 0; i < numRows; i++) {
//         const row = {};
//         for (const column of columns) {
//             row[column.name] = column.generator();
//         }
//         data.push(row);
//     }
//     //   console.log(numRows)
//     return data;
// }
// const data = generateData(2000);
// const head = `<tr class="thead">
// <th>ID</th>
// <th>firstName</th>
// <th>lastName</th>
// <th>email</th>
// <th>phone</th>
// <th>address</th>
// <th>city</th>
// <th>state</th>
// <th>country</th>
// <th>zipCode</th>
// </tr> `

// let page = 1
// let dataString = []
// const maxPage = Math.ceil(data.length / 15)
// function generateTable(pageN, data) {
//     let tbody;
//     for (i = 0; i < data.length; i++) {
//         if (data[i] === undefined) {
//             break
//         }
//         dataString.push(`${data[i].id}, ${data[i].firstName},${data[i].lastName},${data[i].email},${data[i].phone}, ${data[i].address},${data[i].city},${data[i].state},${data[i].country},${data[i].zipCode}`)
//     }
//     for (i = 0; i < dataString.length; i++) {
//         if (data[i] === undefined) {
//             break
//         }
//         console.log(dataString[i])
//     }

// }
// function inputValueSearch() {
//     let dataafter
//     value = inputEl.value.toUpperCase()
//     console.log(dataString[0].search("value"))
//     for (i = 0; i < data.length; i++) {
//         // if (dataString[i].search(value) > -1) {
//         //     console.log(data[i])
//         // }
//     }

// }











// // tableEl.innerHTML = head + generateTable(page, data)
// // console.log(head + generateTable(page))