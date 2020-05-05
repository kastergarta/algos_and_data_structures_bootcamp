func wave(_ y: String) -> [String] {

// var str = y    
// var result = [String]()
// var counter = 0

// for char in str {  
   
//    if let i = str.firstIndex(of: char) {
//       str.remove(at: i)
//       str.insert(Character(char.uppercased()), at: str.index(str.startIndex, offsetBy: counter))
//       result.append(str)
//       str = y
//       counter += 1
//     }
    
//   }    
//   print(result)
//   return result

  var wave = [String]()
  for i in y.indices {
    if !y[i].isWhitespace {
      wave.append(y[..<i] + y[i].uppercased() + y[y.index(after: i)...])
    }
  }
  return wave
}