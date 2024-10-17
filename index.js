
  // jinfeng_clicker
  let count=0;
  let string = "";
 function increment() {
     count++;
     document.getElementById("count-el").innerHTML=count;
     console.log("Count: " + count);
 }
 
 function decrement() {
    count--;
    document.getElementById("count-el").innerHTML=count;
    console.log("Count: " + count);
}


 function save() {
     string += count + " - ";
     console.log(string);
     document.getElementById("entries").innerText = string;
 }
 