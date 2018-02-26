/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count=0;
  for(var i=0;i<preferences.length;i++){
    if(preferences[i]==i+2 && preferences[i+2]==i+1 && preferences[i+1]==i+3) count++;
  }
  return count;
};
