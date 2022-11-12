class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    printDetails(){
        console.log(this.name, this.age);
    }

}

person = new Person('Alicia',67);
person.printDetails();