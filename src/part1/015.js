var hometown = [
  {name: 'Jun', place:'Korea', city: 'Seoul'},
  {name: 'Jone', place: 'USA', city: 'SF'},
  {name: "Amy", place: 'USA'},
  {name: 'Miki', place:'Japan', city: 'Tokyo'}
];

var isHometown = function(h, name) {
  console.log(`function is run. Finding ${name} at ${h.city}`);

  if(h.name === name) {
    console.log(`${h.name}'s home town is ${h.city} ${h.place}`);
    return true;
  }

  return false;
}

var h;
// 'shift' function pop array[0] from array;
while (h = hometown.shift()) {
  if(!h.name || !h.place || !h.city) continue;

  var result = isHometown(h, 'Jone');
  if(result) break;
}

console.log(hometown);

var i = 0;
var names = ['hoon', 'son', 'baek'];
var cities = ['Seoul', 'SF', 'Tokyo'];
do  {
  hometown[i] = {
    name: names[i],
    city: cities[i]
  };
  i++;
} while(i < names.length && i < cities.length);

hometown[7] = {name: "Wrong", city: "Where?"};

console.log(hometown);

