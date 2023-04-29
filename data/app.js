function generateData(numRows) {
    const data = [];
    const columns = [
        { name: "id", generator: () => faker.random.uuid() },
        { name: "firstName", generator: () => faker.name.firstName() },
        { name: "lastName", generator: () => faker.name.lastName() },
        { name: "email", generator: () => faker.internet.email() },
        { name: "phone", generator: () => faker.phone.phoneNumber() },
        { name: "address", generator: () => faker.address.streetAddress() },
        { name: "city", generator: () => faker.address.city() },
        { name: "state", generator: () => faker.address.state() },
        { name: "country", generator: () => faker.address.country() },
        { name: "zipCode", generator: () => faker.address.zipCode() }
    ];

    for (let i = 0; i < numRows; i++) {
        const row = {};
        for (const column of columns) {
            row[column.name] = column.generator();
        }
        data.push(row);
    }
    //   console.log(numRows)
    return data;
}
const tableEl = document.querySelector(".table")
const data = generateData(2000);

function generateTable() {
    let tbody;
    for (i = 0; i < data.length; i++) {
        tbody += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].firstName}</td>
                    <td>${data[i].lastName}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].phone}</td>
                    <td>${data[i].address}</td>
                    <td>${data[i].city}</td>
                    <td>${data[i].state}</td>
                    <td>${data[i].country}</td>
                    <td>${data[i].zipCode}</td>
                </tr>`
    }
    return tbody
}
// table.innerHTML = table + generateTable()
console.log(tableEl.innerHTML  ) // you need to show this data in data-table with all the features
