function Teacher(name, age, subject) {
  this.name = name;
  this.age  = age;
  this.subject = subject;

  this.teach = function(student) {
    console.log(this.name + " teach " + student);
  };
}

const choi = new Teacher('choi', 30, 'css');
console.log(choi);
choi.teach('son');

console.log(choi.constructor);
console.log(choi instanceof Teacher);

// new를 사용하지않아 this가 전역으로 사용되어서 name, age, subject가 전역으로 선언됨
const hoon = Teacher("hoon", 22, 'html');
console.log(name);