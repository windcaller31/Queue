var ishuiwen = function (s) {
  var q = [];
  s = s.split("");
  var r = true;
  for(var i=0;i<s.length;i++){
    q.push(s[i]);
  }
  while(q.length>=2){
    if(q.pop() != q.shift()){
      r = false;
      return r;
    }
  }
  return r;
}

console.log(ishuiwen("abccba"));
