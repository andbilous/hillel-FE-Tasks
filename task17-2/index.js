let matchPattern ='hello';
let strings=["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello",",bnsdklb"];

let filteredStrings=strings.filter(string=> string.includes('hello'));

let total = filteredStrings.reduce(
  ( matchIndex, currentString ) =>
  matchIndex+(currentString.match(matchPattern).index)+',',0);
console.log(total);
