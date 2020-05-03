func accum(_ s: String) -> String {
  let array = Array(s)
  var newArray:[String] = []
  
  for (idx, el) in array.enumerated() {
     newArray.append(el.uppercased() + String(repeating: el, count: idx).lowercased() + "-")
  }
  return String(newArray.joined(separator: "").dropLast())
}
