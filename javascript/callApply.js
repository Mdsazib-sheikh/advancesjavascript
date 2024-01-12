const normalPerson = {
    firstName:'rohim',
    lastName:'korim',
    getFullName: function{
        console.log(this.firstName, this.lastName);
    }
}
console.log(normalPerson.firstName);