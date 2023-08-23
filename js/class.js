/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

class User {
  #login;
  #password;

  static test = 10;

  constructor(userInfo) {
    // let this = {}
    const { firstName, lastName, age, phoneNumber, login, password } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.#login = login;
    this.#password = password;
    // return this;
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }

  getLogin() {
    return this.#login;
  }

  setLogin(newLogin) {
    this.#login = newLogin;
  }
}

const user1 = new User({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
});

const user2 = new User({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  login: 'cu@hecekalo.edu',
  phoneNumber: '(097) 60-62-231',
  password: 'qwerty123',
});

console.log('user1: ', user1);
console.log('user2: ', user2);

console.log(user1.getLogin());
user1.setLogin('test@gmail.com');
console.log(user1.getLogin());

console.log(user1.password);
user1.password = 'qwerty';
console.log(user1.password);
