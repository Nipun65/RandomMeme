// // api url
// const request = require('request')
// const cheerio = require('cheerio')
// var list = []
// function req(){
// request('https://imgur.com/search?q=memes',(
//     error,response,html) =>{
//         if(!error && response.statusCode == 200)
//         {
//            // console.log(html)
//             const $ = cheerio.load(html)
//             //console.log($)
//             const imglink = $('.image-list-link')

//             list = [];
//             $('.image-list-link').find('img').each(function (index, element) {
//             list.push($(element).attr('src'));
//             });
//             console.dir(list)


//             // console.log(imglink.length)
//             // console.log(imglink.html())
//             // for(let i=0;i<imglink.length;i++)
//             // {
//             //     console.log(imglink[i].html())
//             // }
           
//         }
// });
// injectElement()
// }
// injectElement()
// {
//     var bdy = document.createElement('div')
//     bdy.setAttribute('style',"margin: 0px; background: #0e0e0e; height: 100%")
//     var img = document.createElement('img')
//     img.setAttribute('style',"display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;")
//     var rndm = MATH.floor(Math.random()*list.length)
//     img.setAttribute('src',rndm.split('//')[1])
//     bdy.append(img)
//     document.body.append(bdy)
// }
// setTimeout(() => {
//     window.onload = req()
// }, 2000);
// // const api_url =
// // 	"https://imgur.com/search?q=memes";

// // // Defining async function
// // async function getapi(url) {
	
// // 	// Storing response
// // 	const response = await fetch(url);
	
// // 	// Storing data in form of JSON
// // 	var data = await response.json();
// // 	console.log(data);
// // 	if (response) {
// // 		hideloader();
// // 	}
// // 	show(data);
// // }
// // // Calling that async function
// // getapi(api_url);


import axios from 'axios'
var globalurl;
var seturl = "https://i.redd.it/s3txjj8bqbe91.jpg"
function fetchFunc()
{
    console.log("infetchfunc")
    const url =  "https://meme-api.herokuapp.com/gimme"
    axios.get(url)
    .then(response => {
        console.log(response.data.url)
        globalurl = response.data.url
        return response.data.url;
    })
    .catch(error => {
        console.log(error);
    });
}
function buttonclick()
{
    console.log("clicked")
    const geturl = fetchFunc()
   // console.log(geturl)
  //  var element = document.getElementById("appendsrc")
 const checkurl = setInterval(() => {
      if(globalurl!==undefined)
      {
          clearInterval(checkurl)
        var element = document.createElement("img")
        //var element = document.getElementById("appendsrc")
        console.log("globalurl")
        element.src = globalurl
        element.width ="400"
        element.height ="400"
        // DownloadCanvasAsImage()
        var imgtag = document.getElementById("appendsrc")
        console.log(imgtag)
        imgtag.src=""
        imgtag.src = globalurl
        console.log(imgtag)
      }
  }, 100);
//    setTimeout(() => {
//     var element = document.createElement("img")
//     //var element = document.getElementById("appendsrc")
//     console.log("globalurl")
//     element.src = globalurl
//     element.width ="400"
//     element.height ="400"
//     // DownloadCanvasAsImage()
//     var imgtag = document.getElementById("appendsrc")
//     console.log(imgtag)
//     imgtag.src=""
//     imgtag.src = globalurl
//     console.log(imgtag)
//     //document.body.append(element)
//    }, 700);
    
}
//buttonclick()
// function DownloadCanvasAsImage(){
//     console.log('calling')
//     let downloadLink = document.createElement('a');
//     downloadLink.setAttribute('download', 'CanvasAsImage.png');
//     let canvas = document.createElement('myCanvas');
//     let dataURL = canvas.toDataURL('image/png');
//     let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
//     downloadLink.setAttribute('href', url);
//     downloadLink.click();
// }
var btn = document.getElementById('btn');
btn.addEventListener('click', buttonclick);
window.addEventListener('load',buttonclick)
//buttonclick()
//fetchFunc()