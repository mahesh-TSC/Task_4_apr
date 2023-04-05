let count = 1;
function next() {
    window.location.href = "page2.html";
}
function next1() {
    window.location.href = "page3.html";
}
function next2() {
    window.location.href = "result.html";
}

function sort01() {
    let array = document.getElementById("arr");
    let arr1 = array.value;
    let arr2 = arr1.split(",");
    let arr = arr2.map((val) => Number(val));

    // const arr = [0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0];
    let s = 0;
    let e = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr[e] = 0;
            e--;

        }
        else {
            arr[s] = 1;
            s++;
        }

    }
    // console.log(arr);
    localStorage.setItem("Array", arr);
    console.log(localStorage.getItem("Array"));
}

function pair1() {
    // const pair = [8, 7, 2, 5, 3, 1];
    let arr3 = []
    const arr4 = document.getElementById("pairSum").value.split(',');
    console.log(arr4);
    // let arr4=pair1.split(",");
    let pair = [];
    for (let i = 0; i < arr4.length; i++) {
        pair.push(parseInt(arr4[i]))
    }
    console.log(pair);
    let target1 = document.getElementById("target").value.split(",");
    let target = parseInt(target1);

    for (let i = 0; i < pair.length - 1; i++) {
        for (let j = i + 1; j < pair.length - 1; j++) {
            if ((pair[j] + pair[i]) == target) {
                console.log(pair[i] + "," + pair[j]);
                arr3.push("(" + pair[i]);
                arr3.push(pair[j] + ")");
                // arr3[1] = pair[j];

            }
        }
    }
    localStorage.setItem("pair", arr3)
}
function Panagram() {
    debugger
    let string = document.getElementById("panagram").value;
    console.log(string);
    debugger
    let str = string.toLowerCase();
    let str1 = " ,";
    for (let i = 97; i <= 122; i++) {
        str1 += String.fromCharCode(i);
    }
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        if (str1.includes(str[j])) {
            count++;
        }
    }
    if (count == string.length) {
        console.log("sentence is pangram");
        localStorage.setItem("pangram", "sentence is pangram");
    }
    else {
        console.log("sentence is not pangram")
        localStorage.setItem("pangram", "sentence is not pangram");
    }
}
function save() {
    sort01();

}
function save2() {
    alert("mahesh")
    Panagram();
}
function show() {
    setTimeout(function () {
        document.getElementById("h1").innerHTML = "All 1's to the left and all 0's to the right"
        let data_q1 = document.getElementById("page1");
        data_q1.innerHTML = localStorage.getItem("Array");
    }, 2000);
    setTimeout(function () {
        document.getElementById("h3").innerHTML = "Find a sentence pangram or not"
        let data_q2 = document.getElementById("page2");
        data_q2.innerHTML = localStorage.getItem("pangram");
    }, 4000);
    setTimeout(function () {
        document.getElementById("h2").innerHTML = "Find the all posible pair which is target value"
        let data_q3 = document.getElementById("page3");
        data_q3.innerHTML = localStorage.getItem("pair");
    }, 6000);
}
function save1() {
    pair1();
}