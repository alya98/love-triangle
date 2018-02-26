/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  // your implementation
  var count=0,a,b,c;
  for(var i=0;i<preferences.length;i++){
    a=preferences[i];
    b=preferences[a-1];
    c=preferences[b-1];
    if(a!=i+1 && i==c-1) count++;
  }
  return count/3;

};
