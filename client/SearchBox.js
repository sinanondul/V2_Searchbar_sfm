const getURL="http://localhost:3000/pr"
var list = [];

$.getJSON('http://localhost:3000/products', function(data){
    
    $.each(data, function(key,val){
        list.push(val);
    });

});

var list2=[]

const fetchResult=()=>{
    var val=document.getElementById('searchBar').value
    console.log('PFFS')
    fetch(`http://localhost:3000/products/${val}`,{
        method:'GET'
    })
    .then(res=>{
        list2=res.data
        console.log(list2)
    })
    
    
    // $.get('http://localhost:3000/products'),(data,status)=>{
    //     console.log(status)
    //     list2=data
    //     console.log(list2)
    // }
}



const searchBar = document.getElementById("searchBar");

window.onload=function(){

popUp = document.getElementById("popUp");


var resM =[];
var resK=[];
var c =0;


$("h1").hide();
$("h2").hide();   

searchBar.addEventListener("keyup", (a)=>{
        var results = [];
        var node = document.getElementById("catlist");
        var node2 = document.getElementById("brlist");
    
        node.innerHTML="";
        node2.innerHTML="";


        var sv = a.target.value;
        console.log("input: " + sv);
        var stayUp = (sv.length >= 2);
        if(stayUp){
            fetchResult()
        }
        // if(stayUp){  
        //     console.log("Searching '"+ sv + "' ..");
        //     $("h1").show("slow", ()=>{
        //         console.log("Showing SideBar");
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
               


        //     }
        // }
        // else{
        //     $("h1").hide("fast", ()=>{
        //         console.log("Query < 2")
        //     })
        // }
}
);



var sidebar = document.getElementById("popUp")

var Cpop =  '<div class="waw-search-container waw-open" id="waw-search-results">' +
            '<div class="waw-search-sidebar">'+
                    '<p id="sidebar"></p>'+
                    '<h3 class="waw-category-title">Kategoriler</h3>'+
                        '<ul data-group="categories" class="waw-cat-list"><li data-link=' 
                    '<hr>'+
                    '<h3 class="waw-category-title">Markalar</h3>'+
                        '<ul data-group="categories" class="waw-cat-list"><li data-link= ></li></ul>'+
                    '<hr>'+
                '</div></div>';
//
var Cside =  '<div class="waw-search-sidebar"></div>' +
 '<h3 class="waw-category-title">Kategoriler</h3><hr>'+
    '<li><ul> </ul></li>'+
     '<h3 class="waw-category-title">Markalar</h3><hr>';


};
