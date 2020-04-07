function whoIsNext(names, r){
//   if (names.length >= r) return names[r-1];
//   console.log(names, r)
//   for (i=0; i<r; i++){
//     names.push(names[i], names[i])
//   }
//   return names[r]


  const iteration = Math.floor(Math.log2(((r - 1) / names.length) + 1));
  const post = 2 ** iteration;

  return names[Math.floor((r - ((post - 1) * names.length + 1)) / post)]
}
