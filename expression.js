function expressionMatter(a, b, c) {
    return a == 1 && c == 1 ? a+b+c : Math.max(a*b*c, (a+b)*c, a*(b+c))
  }