var family = {
  members: {},
  addFamily: function(age, name, role) {
    this.members[role] = {age, name};
  },
  getHeadCount: function() {
    return Object.keys(this.members).length;
  }
};

family.addFamily(30, "Choi", "father");
family.addFamily(30, "Seong", "mather");
family.addFamily(30, "Hoon", "dog");

var printMembers = function() {
  var members = family.members;

  for(role in members) {
    console.log(`role => ${role}, name => ${members[role].name}, age => ${members[role].age}`);
  }
};

printMembers();