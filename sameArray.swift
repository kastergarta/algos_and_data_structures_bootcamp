function comp(array1, array2){
  if(array1 == null || array2 == null) return false;

  return array1.sort((a, b) => a - b).map(v => v * v).every((v, i) => v == array2.sort((a, b) => a - b)[i]);
}