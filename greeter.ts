class Student {
  fullName: string;
  // コンストラクタの引数にpublicを使用すると、その名前で自動的にプロパティを作成する
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = this.fullName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
