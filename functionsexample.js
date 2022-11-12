var person = {
    name:'Alice',
    age:45
}


getAge = function(){
    return person.age;
}

age = getAge()
console.log(age);

// arrow function
getName=()=>person.name;

console.log(getName())