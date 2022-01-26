
window.addEventListener ('load',(event)=>{
  console.log('page has loaded')
  const api_key = "cEpjCVyhxbYkyc40rcSJkfWfbjrU3moX"

  const btn = document.querySelector('button')
  btn.addEventListener('click', getData)
const trending = document.getElementById('Trending')
trending.addEventListener('click', showTrend)
  function getData(){

    const searchStr = document.querySelector('#search-box').value

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=20&part=snippet&q=${searchStr}&limit=15`
    const output = document.getElementById("container")
    output.innerHTML = ""
    console.log('the url is',url)
    console.log('your have searched for', searchStr)
    const searchResults =
    fetch(url).then(function(rep){
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
    document.getElementById("search-box")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("btn").click();
      }
  });
  function showTrend(){
    const output = document.getElementById("container")
    const trending = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=20&part=snippet`
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



//item.images.original
