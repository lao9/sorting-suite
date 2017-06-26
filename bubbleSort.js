function bubbleSort(collection) {
  var len = collection.length - 1

  ready_to_quit = false

  while (ready_to_quit == false) {
    var swap = false;
    for (i = 0; i < len; i++) {
      if (collection[i] > collection[i+1]) {
        swap = true
        var left_num = collection[i+1]
        var right_num = collection[i]
        collection[i] = left_num
        collection[i+1] = right_num
      }
    }
    if (swap == false) {
      return collection
    }
  }
}
