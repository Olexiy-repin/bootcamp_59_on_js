/*
 * Наслідування з extends та super
 */
class User {
  #login;
  #email;

  constructor(userInfo) {
    // let this = {};
    const { firstName, lastName, age, login, email } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends User {
  constructor(developerInfo) {
    const { countOfProjects, ...otherProps } = developerInfo;

    super(otherProps);

    this.countOfProjects = countOfProjects;
  }

  doDeveloperWork() {
    console.log(`Роблю якусь роботу`);
  }
}

const developer = new Developer({
  firstName: 'Nicholas',
  lastName: 'West',
  age: 30,
  login: 'vcvd',
  email: 'iseegi@sak.sx',
  countOfProjects: 10,
});

console.log(developer);

console.log(developer.getFullName());

class Manager extends User {
  constructor(managerInfo) {
    const { managerProp, ...otherProps } = managerInfo;

    super(otherProps);

    this.managerProp = managerProp;
  }

  doManagerWork() {
    console.log(`Роблю якусь роботу`);
  }
}

const someManager = new Manager({
  managerProp: 343,
  firstName: 'Caleb',
  lastName: 'Murray',
  age: 20,
  login: 'bgff',
  email: 'uwigicnaf@ra.be',
});

console.log(someManager);

console.log(someManager.getFullName());
