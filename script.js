let request = new XMLHttpRequest();
console.log(request);
request.open('GET', 'https://restcountries.com/v3.1/all')
request.send();
request.onload = function () {
    let data = JSON.parse(request.response)
    console.log(data)

    // a. Get all the countries from Asia continent /region using Filter function

    let name = data.filter((index) => index.region == "Asia")
    console.log(name)

    // b.Get all the countries with a population of less than 2 lakhs using Filter function

    let population = data.filter((index) => index.population < 200000)
    console.log(population)

    // c. Print the following details name, capital, flag using forEach function

    data.forEach((index) => {
        console.log(`Name:${index.name['common']}`);
        console.log(`Capital:${index.capital}`)
        console.log(`Flag:${index.flag}`)
    })
    
    // d. Print the total population of countries using reduce function
    
    let total = data.reduce((acc, index) => acc + index.population, 0)
    console.log(total)


    // e. Print the country which uses US Dollars as currency.

    // let dollar = data.filter((index) => index.currencies[0].USD == "United States dollar")
    // console.log(dollar)
//     for (let i = 0; i < data.length; i++){
//         console.log(data[i].currencies.USD['United States dollar'])
//     }

}
// 