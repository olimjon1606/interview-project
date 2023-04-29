const tableEl = document.querySelector("table");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pages = document.querySelector(".pages")


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
const data = generateData(2000);
const head = `<tr class="thead">
<th>ID</th>
<th>firstName</th>
<th>lastName</th>
<th>email</th>
<th>phone</th>
<th>address</th>
<th>city</th>
<th>state</th>
<th>country</th>
<th>zipCode</th>
</tr> `
let page = 1
const maxPage = Math.ceil(data.length / 15)
function generateTable(pageN) {
    let tbody;
    for (i = (page - 1) * 15; i < 15 * page; i++) {
        if(data[i]===undefined){
            break
        }
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
tableEl.innerHTML = head + generateTable(page)
// console.log(head + generateTable(page))

pages.innerHTML = `Page ${page} of ${maxPage}`

nextBtn.addEventListener("click", () => {
    page++
    if (page > 1) {
        prevBtn.classList.remove("hide")
    }
    if(page>=maxPage){
        nextBtn.classList.add("hide")
    }
    tableEl.innerHTML = head + generateTable(page)
    pages.innerHTML = `Page ${page} of ${maxPage}`
})
prevBtn.addEventListener("click", () => {
    page--
    if (page <= 1) {
        prevBtn.classList.add("hide")
    }
    if(page<maxPage){
        nextBtn.classList.remove("hide")
    }
    tableEl.innerHTML = head + generateTable(page)
    pages.innerHTML = `Page ${page} of ${maxPage}`
})
tableEl.lastChild.remove()
console.log(tableEl.lastChild)