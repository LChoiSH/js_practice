var namespaceA = (function(){
  var privateVariable = 'Private Variable';

  return {
    publicApi: function() {
      console.log('Can\'t access to ' + privateVariable);
    }
  }
})();

namespaceA.publicApi();
