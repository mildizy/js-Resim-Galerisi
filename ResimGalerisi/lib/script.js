

for (let i=0; i<20;i++){
  document.write(`
  <div>
  <span>
  ${i+1}
  </span>
  <img src="//picsum.photos/id/${i}/300">
  </div>`)
}

var tikla=document.getElementById("tikla")

tikla.addEventListener("click",daha)


function daha(){
  var pro=prompt("Kaç tane olsun?");

  for(j=0; j<pro; j++){
            document.writeln(`<img src="//picsum.photos/id/${j}/300">`)
            
            

        }
}



