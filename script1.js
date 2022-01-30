window.addEventListener ('load',(event)=>{
const trend = document.getElementById('stickers')
trend.addEventListener('click',showStickers)
const api_key = "cEpjCVyhxbYkyc40rcSJkfWfbjrU3moX"
function showStickers(){
  const output = document.getElementById("container")
  const trending = `https://api.giphy.com/v1/stickers/trending?api_key=${api_key}&limit=20&part=snippet`
console.log('the url is', trending)
fetch(trending).then(function(rep){
return rep.json()
}).then(function(data){
console.log(data)
data.data.forEach((item) => {

  console.log(item.images.original.webp)


 //div = document.createElement(`div`)
 output.innerHTML += `<img class="img-fluid p-2" src=${item.images.original.webp}  onerror="this.onerror=null; alt="">`

output.style.alignItems= 'center'

})

});

}
  })
