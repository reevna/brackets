module.exports = function check(str, bracketsConfig) {
  if (str % 2 !=0){
    return false
  }

  if (str.endsWith("(") ) {
    return false
  }
  if (str.startsWith(")") || str.startsWith("}") || str.startsWith("]")) {
    return false
  }
 if (str.match('(])') || str.match('(|)')){
   return false
 }

}
