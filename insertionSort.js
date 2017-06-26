function insertionSort(collection) {
  var len = collection.length
  var sorted = [collection[0]]

  for (i=1; i<len; i++) {
    sorted.push(collection[i])
    var ready_to_quit = false
    var counter = sorted.length-1
    while (ready_to_quit == false) {
      if (sorted[counter] < sorted[counter-1]) {
        var left_num = sorted[counter]
        var right_num = sorted[counter-1]
        sorted[counter-1] = left_num
        sorted[counter] = right_num
        counter--
      }
      else {
        ready_to_quit = true
      }
    }
  }
  return sorted
}
