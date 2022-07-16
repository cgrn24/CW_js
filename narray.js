function index(array, n){
    let x = array[n]
    let a = array.indexOf(x)
    if (a == -1) {
      return -1
    } else {
      return Math.pow(x, n)
    }
  }