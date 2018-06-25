function theBeatlesPlay(musicians, instruments){
 var result = [];
 
 for(var i=0;i<musicians.length;i++){
   result[i]=musicians[i] + " plays " + instruments[i];
 }

  return result;
}

function johnLennonFacts(facts){
//  var result = [];
  var i=0;
  while(i<facts.length){
    facts[i]+="!!!";
    i++;
  }
  return result;
}