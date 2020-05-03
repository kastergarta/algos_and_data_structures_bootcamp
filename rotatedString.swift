func challenge8(input: String, rotated: String) -> Bool {
   guard input.count == rotated.count else { return false }
   let combined = input + input
   return combined.contains(rotated)
}