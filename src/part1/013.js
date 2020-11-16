var hometown = [
  {name: 'Jun', place:'Korea', city: 'Seoul'},
  {name: 'Jone', place: 'USA', city: 'SF'},
  {name: "Amy", place: 'USA'},
  {name: 'Miki', place:'Japan', city: 'Tokyo'}
]

for (var i=0; i < hometown.length;i++) {
  var h = hometown[i];
  if(!h || !h.city) continue;

  console.log(i + ' th run');

  if(h.name == "Jun") {
    console.log(h.name + 'lives' + h.city + " " + h.place);
  }
}