var cryptoSquare = function(word) {
  var result = word.toLowerCase();
  var array = [];
  var encryptedArray = [];
  //result = result.split(/['," "]/);
  result = result.replace(/["'"," "]/, "");
  var columns = Math.ceil(Math.sqrt(result.length));
  columns = columns-1;
  alert(columns);
  for(var i = 0;i <=columns;i++) {
    array[i] = new Array();
    for(var j = 0; j <= columns;j++) {
       array[i].push(result[j]);
       //alert(array[i]);
    }
  }

  var k = 0;
  var l = 0;
  alert(array[k][l]);
  do {
  for(var i = 0;i<= 2;i++) {
      encryptedArray[i] = new Array();
      for(var j=0;j <= array.length - 1 ;j++) {
        encryptedArray[i].push(array[k][l]);
        k++;
      }
      l++
    }
  }while(k<=columns && l<=columns);



  return encryptedArray[1][1];
};
