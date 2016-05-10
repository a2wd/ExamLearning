onmessage = function(e) {
    var result = document.getElementById("workResult");
    result.innerText = "";
    var work = 35000000;
    var i = 0;
    var a = new Array(work);
    var sum = 0;
    for (i = 0; i < work; i++) {
        a[i] = i * i
        sum += i * i;
    }
    self.postMessage(sum);
}