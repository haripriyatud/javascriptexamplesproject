var sentance ='This is a java script string.';

console.log(typeof(sentance))

console.log('length of a string', sentance.length)


// extracting a character from a string 
let char = sentance.charAt(0);
console.log(char);

//slice
let splitted_sentance = sentance.slice(10)
console.log(splitted_sentance)
let splitted_sentance_with_2_paramaters= sentance.slice(10,21);
console.log(splitted_sentance_with_2_paramaters);

//substring 
let substring = sentance.substring(10)
console.log(substring)
let substring_with_second_parameter = sentance.substring(10,21);
console.log(substring_with_second_parameter);

// replace
replaced_string = sentance.replace('string','variable')
console.log(replaced_string)

// convert to upper case

let uppercasee_string = sentance.toUpperCase()
console.log(uppercasee_string)

// concating 2 strings

let new_string = 'Please free to play around with it'
conconcated_string = sentance.concat(new_string)
console.log(conconcated_string)

