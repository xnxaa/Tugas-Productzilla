const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];


function printArray(countries) {
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
  }
  console.log('')
  }
printArray(countries);


function Printsearch(countries) {
  const findCountry = countries.includes("Indonesia");
  console.log(findCountry);
  }
  
Printsearch(countries);


function Printstring(countries) {
const string = countries.toString();
const findCountry = string.includes("Indo");
console.log(findCountry);
}

Printstring(countries);
