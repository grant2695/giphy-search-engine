

window.addEventListener ('load',(event)=>{
    //to use this website please use your api_key in a variable called mykey
    let mykey= 'cEpjCVyhxbYkyc40rcSJkfWfbjrU3moX' 
   // let mykey = config.MY_KEY;

  console.log('page has loaded')



  const btn = document.querySelector('button')
  btn.addEventListener('click', getData)



  function getData(){
    const trending = `https://api.giphy.com/v1/gifs/trending?api_key=${mykey}&limit=20&part=snippet`

    const searchStr = document.querySelector('#search-box').value

 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${mykey}&limit=30&part=snippet&q=${searchStr}&limit=15`
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
              output.innerHTML += `<img class="img-fluid p-2" src=${item.images.fixed_width.webp}  onerror="this.onerror=null; alt="">`;

              output.style.alignItems = "center";



         
        })
      });
      
      
      function clear() {
        document.getElementById("search-box").value = " ";
      }
      clear();
     
  
 
  

  const btn1 = document.querySelector("button");


 
  window.onload = function () {

    const url1 = `http://api.giphy.com/v1/randomid?api_key=${mykey}`;
    fetch(url1)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.data);
      });

  




   
  $('#search-box').on('blur input', function() {

    const searchStr = document.querySelector('#search-box').value
    const url3 = `http://api.giphy.com/v1/gifs/search/tags?api_key=${mykey}&q=${searchStr}`
    fetch(url3).then(function(resp){
return resp.json()
    }).then(function(data){
      console.log(data)
      console.log(data.data)
      data.data.forEach((item)=>{
        console.log(item.name)
       
      });
      })
    }) 
  }
  
}



    $("#search-box").on("blur input", function () {

      const searchStr = document.querySelector("#search-box").value;
      const url3 = `https://api.giphy.com/v1/gifs/search?api_key=${mykey}&limit=30&part=snippet&q=${searchStr}&limit=15`;
      fetch(url3)
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.data);
          data.data.forEach((item) => {
            console.log(item.name);
            // var items = item.name
            //$(".auto").autocomplete({
            //source: items // list of items.
          });
        });
    });
 
       
        $("#trending").on("click", function () {

          const trending = `https://api.giphy.com/v1/gifs/trending?api_key=${mykey}&limit=30&part=snippet`;
          const output = document.getElementById("container");
          output.innerHTML = "";
          fetch(trending)
            .then(function (resp) {
              return resp.json();
            })
            .then(function (data) {
              // console.log(data);
              //console.log(data.data);
              data.data.forEach((item) => {
                //console.log(item.name);
                console.log(item.images.fixed_height.webp);

                //div = document.createElement(`div`)
                output.innerHTML += `<img class="img-fluid p-2" src=${item.images.fixed_width.webp}  onerror="this.onerror=null; alt="">`;

                output.style.alignItems = "center";
              });
            });
        });
        $("#Stickers").on("click", function () {

          const trending = `https://api.giphy.com/v1/stickers/trending?api_key=${mykey}&limit=100&part=snippet`;
          const output = document.getElementById("container");
          output.innerHTML = "";
          fetch(trending)
            .then(function (resp) {
              return resp.json();
            })
            .then(function (data) {
              // console.log(data);
              //console.log(data.data);
              data.data.forEach((item) => {
                //console.log(item.name);
                console.log(item.images.fixed_height.webp);

                //div = document.createElement(`div`)
                output.innerHTML += `<img class="img-fluid p-2" src=${item.images.fixed_width.webp}  onerror="this.onerror=null; alt="">`;

                output.style.alignItems = "center";
              });
            });
        });
        document
          .getElementById("search-box")
          .addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
              document.getElementById("btn").click();
            }
          });
      })
   
  

  
     
 
 

  

 

 
