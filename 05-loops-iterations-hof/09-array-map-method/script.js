const numebers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubleNumbers = number.map((number) => number * 2);

console.log(doubleNumbers)


//forEach 

const doubleNumbers2 = [];

numebers.forEach((number) => {
    doubleNumbers.push(number * 2);
});


console.log(doubleNumbers2);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//create an array of companies

const companyName = companies.map((company) => company.name);

console.log(companyName);


//create an array that contains company and category

const companyCategory = companies.map((company) => {
    return {

        name: company.name,
        category: companies.category,
    };
});

//Creaate a array of an array of companies in a year 

// const companyYears = companies.map((company) => company.end - company.start);
const companyYears = companies.map((company) => {
    return {
        name: company.name,
        years: company.end - company.start
    };
});

const squareAndDouble = numebers.map((number) => Math.sqrt(number));

console.log(squareAndDouble)

const squareAndDouble2 = numebers
    .map(function (number) {
        return Math.sqrt(number);
    })
    .map(function (sqrt) {
        return sqrt * 2;
    })


console.log(squareAndDouble2)

//chaining diff. methodes

const evenDouble = numebers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);


console.log(evenDouble)


