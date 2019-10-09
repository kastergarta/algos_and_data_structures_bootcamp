function bubbleSort(arr) {
    var noSwaps;
    for (i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr [j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

function bubbleSortModern (arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for(i = arr.length; i > 0; i--) {
        for (j = 0; j  < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

bubbleSort([14, 8, 7, 89])
bubbleSortModern([14, 8, 7, 89])
