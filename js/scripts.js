var cryptoSquare = function(string,group_of_letters) {
  string = string.toLowerCase();

  string = string.replace(/["'"," "]/, "");
  var columns = Math.floor(Math.sqrt(string.length));


  var word = "";
  var regex1 = new RegExp(".{1,"+columns+"}", "g");
  var chunks = string.match(regex1);

  var noLetters=0;
  var j=0;

    do {
      for(var i=0;i < chunks.length && noLetters<string.length;i++) {
        //alert(chunks[i][j]);
            word = word.concat(chunks[i][j]);
            noLetters++;
           }
          j++
          //alert(j);
        }while(noLetters<string.length);

  var regex2 = new RegExp(".{1,"+group_of_letters+"}", "g");
        //alert(word);
      var wordArray = word.match(regex2);
      word = wordArray.join();
      //alert(word);
      word = word.replace(/[","]/g, " ");
      //alert(word);
    return word;



};
