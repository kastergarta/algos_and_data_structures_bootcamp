function whoIsNext(names, r){

  const iteration = Math.floor(Math.log2(((r - 1) / names.length) + 1));
  const post = 2 ** iteration;

  return names[Math.floor((r - ((post - 1) * names.length + 1)) / post)]
}
