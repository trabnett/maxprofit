function maxProfit(arr) {
  let flag = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0 + i; j < arr.length; j++) {
        if ((arr[j] - arr[i]) > flag && j > i ) {
          flag = arr[j] - arr[i];
        }
      }
    }
    if (flag > 0) {
      return flag;
    } else {
      return -1;
    }
};
