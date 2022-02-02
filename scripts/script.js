window.addEventListener ('load',(event)=>{

  
  
  console.log('page has loaded')
  const api_key = "cEpjCVyhxbYkyc40rcSJkfWfbjrU3moX"

  const btn = document.querySelector('button')
  btn.addEventListener('click', getData)
const trend = document.getElementById('Trending')
trend.addEventListener('click', getData)

  function getData(){
    const trending = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=20&part=snippet`

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

  const btn1 = document.querySelector('button')

  
})
function UserId(){
  const url1 = `http://api.giphy.com/v1/randomid?api_key=${api_key}`
  fetch(url1).then(function(resp){
    return resp.json()
  }).then(function(data){
    console.log(data)
    console.log(data.data)
    window.onload(console.log(data.data));
  })
}
window.onload = function(){
  const api_key = "cEpjCVyhxbYkyc40rcSJkfWfbjrU3moX"
    const url1 = `http://api.giphy.com/v1/randomid?api_key=${api_key}`
    fetch(url1).then(function(resp){
      return resp.json()
    }).then(function(data){
      console.log(data)
      console.log(data.data)
      
    })
    const url2 = `http://api.giphy.com/v1/gifs/categories?api_key=${api_key}&randomid?`
    fetch(url2).then(function(resp){
      return resp.json()
    }).then (function(data){
      console.log(data)
      console.log(data.data)
      console.log(data.data.name)
      data.data.forEach((item) => {
        console.log(item.name)
      })
    })
  }
  $('#search-box').on('blur input', function() {
    const api_key = "cEpjCVyhxbYkyc40rcSJkfWfbjrU3moX"
    const searchStr = document.querySelector('#search-box').value
    const url3 = `http://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${searchStr}`
    fetch(url3).then(function(resp){
return resp.json()
    }).then(function(data){
      console.log(data)
      console.log(data.data)
      data.data.forEach((item)=>{
        console.log(item.name)
       // var items = item.name
        //$(".auto").autocomplete({
          //source: items // list of items.
      });
      })
    }) 
;

   
  
  //window.onload = function(){
    
   /* const url2 = `http://api.giphy.com/v1/gifs/categories?api_key=${api_key}&randomid?`
    fetch(url2).then(function(resp){
      return resp.json()
    }).then (function(data){
      console.log(data)
    })
  }
  //const api_key = "cEpjCVyhxbYkyc40rcSJkfWfbjrU3moX"
 /* function showTrend(){
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

  }*/

 
