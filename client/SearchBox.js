var varlist=[]
// function fetchResult2( ){
//     var val=$('#searchBar').val();
//     console.log(val)
//     var a = fetch('http://localhost:3500/products/'+val, {method:'GET'})

//     .then(async function (res){
//         console.log(await res.json());
//         //console.log(varlist);
//         return await res.json();
//     })
// }

async function fetchResult2( data = {}) {
    var val2=$('#searchBar').val();
    // Default options are marked with *
    const response = await fetch('http://localhost:3500/products/'+val2, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data)
    });
    
    return response.json();
     // parses JSON response into native JavaScript objects
    
  }

window.onload=function(){

const searchBar = $("#searchBar");
$("h1").hide();
$("h2").hide();   

searchBar.keyup(function(a){
    $("#catlist").innerHTML="";
    $("#brlist").innerHTML="";

    var sv=searchBar.val()
    var stayUp=(sv.length >= 2);
    console.log(sv)
    //console.log(varlist["title"])

    if(stayUp){
        varlist = fetchResult2();
        console.log(varlist);
        //console.log(res);
        $("h1").show("slow", ()=>{})
        $("h2").show("slow", ()=>{})
    }
    else{
        $("h1").hide("slow", ()=>{})
        $("h2").hide("slow", ()=>{})
    }
    $(window).click(function() {
        $("h1").hide("slow", ()=>{})
        $("h2").hide("slow", ()=>{})
    });
        
    $('h1').click(function(event){
        event.stopPropagation();
    });

    
});   

}



        // if(stayUp){  
        //     console.log("Searching '"+ sv + "' ..");

        //     });
        //     $("h2").show("slow", ()=>{
        //         console.log("Showing Search Results Pane");
        //     });


        //     //popUp.innerHTML = Cpop;
        //     //sidebar.innerHTML = Cside;
        //     var c=0;
        //     for (i = 0; i < list.length; i++) {
        //         titles = list[i]["title"].toUpperCase();
        //         markas = list[i]["brand"].toUpperCase();
        //         kategoris = list[i]["categories"].toUpperCase();
            
        //         var inclM = markas.includes(sv.toUpperCase());
        //         var inclK = kategoris.includes(sv.toUpperCase());
        //         var inclT = titles.includes(sv.toUpperCase());

               

        //         if(inclT || inclM || inclK ) {
                    
        //             results[c] = list[i];
        //             //cats
        //             node = document.createElement("LI"); 
        //             var textnode = document.createTextNode(results[c].categories);
                    
                    
        //             node.appendChild(textnode);
        //             document.getElementById("catlist").appendChild(node);
        //             var linebreak = document.createElement('br');
        //             node.appendChild(linebreak);
        //             //brands

        //             node = document.createElement("LI"); 
        //             var textnode = document.createTextNode(results[c].brand);

        //             node.appendChild(textnode);
        //             document.getElementById("brlist").appendChild(node);
        //             var linebreak = document.createElement('br');
        //             node.appendChild(linebreak);

        //             c++;
        //         }

        //         // $.each(results, function(key,val){
        //         //     var toAdd  = val.categories;
        //         //     console.log(toAdd);
        //         //     $("toHere").innerHTML=toAdd;
        //         // })

        //         //var node = $("toHere");

                

        //              //var textnode = document.createTextNode(results[i]["categories"]); 
        //             // console.log(node);
        //             // console.log(textnode);
                    
        //             // node.appendChild(textnode);
        //             // document.getElementById("catlist").appendChild(node);
        //             // $("#catlist").append(node);
               

