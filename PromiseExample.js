function itTakesLong(callback){
  // do something that takes time
  // put the result in a variable
    var result = '123';

  callback(result);
}

var getTheResult = '';
 console.log(getTheResult);
itTakesLong( function(theResult){
  getTheResult = theResult;
  console.log(getTheResult);

} );



function itTakesLongWithPromise(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(125)
    },2000)

  })
}

itTakesLongWithPromise().then(function(result){
  getTheResult=result;
  console.log(getTheResult);
})
