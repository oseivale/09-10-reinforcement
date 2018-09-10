var items = ["purchase domain", "install SSL certificate", "deploy site", "celebrate success"];

console.log("Todo:");
i = 0;
// for(var i = 0; i < items.length; i++){
  items.forEach(function(item){
    console.log(i + 1 +': '+ items[i]);
    i++
  });
// }
