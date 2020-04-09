function countSmileys(arr) {
    return arr.filter(i => /[;:][~-]?[)D]/.test(i)).length
}
