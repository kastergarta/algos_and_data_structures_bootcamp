function rgb(r, g, b) {
    [r,g,b] = [r,g,b].map( a => a > 0 ? a : 0);
    [r,g,b] = [r,g,b].map( a => a > 255 ? 255 : a);
    return [r,g,b].map( a => (a > 9) ? a.toString(16) : "0" + a.toString()).join("").toUpperCase();
  }