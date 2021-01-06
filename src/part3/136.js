const timer = {
  t: undefined,
  run: function() {
    if(this.t) console.log('Aleady there is a begun timer');
    this.t = setTimeout(function() {
      console.log('Begin after 1sec');
    }, 1000);
  },
  cancel: function() {
    if (this.t) clearTimeout(this.t);
    this.t = undefined;
  }
};

timer.run();
timer.cancel();
timer.run();