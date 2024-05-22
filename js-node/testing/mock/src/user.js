class User {
    constructor({ name, id, profession, age }) {
        this.name = name
        this.id = parseInt(id)
        this.profession = profession
        this.birthDay = new Date().getFullYear() - age
        this.age = parseInt(age);
        this.ageGroup = age > 60 ? "old" : age >= 30 && age <= 60 ? "adult" : "young"
    }
}

module.exports = User;