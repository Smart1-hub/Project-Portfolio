function repeatStringNumTimes (str, num) {
    // write your code here
  if(num < 0)
  return "";
  if(num === 1)
  return str;
  else
  return str + repeatStringNumTimes(str, num-1);
  }
  module.exports = repeatStringNumTimes