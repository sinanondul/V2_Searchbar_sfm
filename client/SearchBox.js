
"<a target="+"'_self'" +"href=$(link)>"+
    +"<div class="+"'waw-product-item'>"+
        "<div class="+"'product-img'> "+
        "<img src="+
        "'https://www.sefamerve.com/image/cache/data/201910/24/sefamerve_esarp_karaca90617_12_4759291571909234711_5-1200x627.jpg'>"+
        "</div>"+
        "<div class='product-detail'>"+
        "<span title='Kadın Giyim'>Kadın Giyim</span>"+
        "<h3 title='Karamel Lacivert Eşarp'>Karamel Lacivert Eşarp</h3>"+
        "<span class="+ "'price'>69.00 TL</span>'"+
       "</div>"+
    "</div>"+
"</a>"+
"</div>";

var varlist=[]
function fetchResult2( ){
    var val=$('#searchBar').val();
    console.log(val)
    var a = fetch('http://localhost:3500/products/'+val, {method:'GET'})

    .then(async function (res){
        varlist = await res.json();
        //console.log(result);      
        return varlist;
    })
}

window.onload=function(){

const searchBar = $("#searchBar");
$("h1").hide();
$("h2").hide();   

// var Prod = <div class='waw-product'>"+
// "<a target="+"'_self'" +"href=$(link)>"+
//     +"<div class="+"'waw-product-item'>"+
//         "<div class="+"'product-img'> "+
//         "<img src="+
//         "'https://www.sefamerve.com/image/cache/data/201910/24/sefamerve_esarp_karaca90617_12_4759291571909234711_5-1200x627.jpg'>"+
//         "</div>"+
//         "<div class='product-detail'>"+
//         "<span title='Kadın Giyim'>Kadın Giyim</span>"+
//         "<h3 title='Karamel Lacivert Eşarp'>Karamel Lacivert Eşarp</h3>"+
//         "<span class="+ "'price'>69.00 TL</span>'"+
//        "</div>"+
//     "</div>"+
// "</a>"+
// "</div>";

searchBar.keyup(function(a){
    
    $("#brlist").innerHTML="";
        
    var sv=searchBar.val()
    var stayUp=(sv.length >= 2);
    //console.log(sv)
    //console.log(varlist["title"])

    if(stayUp){
        fetchResult2()

        $("h1").show("slow", ()=>{})
        $("h2").show("slow", ()=>{})

        var kategoris=[];
        for (i = 0; i < varlist.length; i++) {
            $("#catlist").empty()
            $("catlist").hide()
            
            if(!kategoris.includes(varlist[i]["categories"])){
                kategoris.push(varlist[i]["categories"])
            }
        }
        for(i=0; i<kategoris.length;i++){
            node = document.createElement("LI"); 
            var textnode = document.createTextNode(kategoris[i]);  
            node.appendChild(textnode);
            document.getElementById("catlist").appendChild(node);
        }
        $("catlist").show();

        var markas=[];
        for (i = 0; i < varlist.length; i++) {
            $("#brlist").empty()
            //$("#brlist").hide()
            
            if(!markas.includes(varlist[i]["brand"])){
                markas.push(varlist[i]["brand"])
            }
        }
        for(i=0; i<markas.length;i++){
            node = document.createElement("LI"); 
            var textnode = document.createTextNode(markas[i]);  
            node.appendChild(textnode);
            document.getElementById("brlist").appendChild(node);
        }
        $("#brlist").show();
        $('#waw-products').show();
    }

    else{
        //$("h1").hide("slow", ()=>{})
        //$("h2").hide("slow", ()=>{})
    }
    $(window).click(function() {
        $("h1").hide("slow", ()=>{})
        $("h2").hide("slow", ()=>{})
    });
        
    $('h1').click(function(event){
        event.stopPropagation();
    });

    document.getElementById('prodbox').append(Prod);

});   

// var textn=document.createTextNode(Prod.innerHTML)
// //prnode.appendChild(textn);
// document.getElementById("prodbox").appendChild(textn)

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
        //         titles = varlist[i]["title"].toUpperCase();
        //         markas = varlist[i]["brand"].toUpperCase();
        //         kategoris = varlist[i]["categories"].toUpperCase();
            
        //         var inclM = markas.includes(sv.toUpperCase());
        //         var inclK = kategoris.includes(sv.toUpperCase());
        //         var inclT = titles.includes(sv.toUpperCase());

               

        //         if(inclT || inclM || inclK ) {
                    
        //             results[c] = varlist[i];
        //             //cats
        //             node = document.createElement("LI"); 
        //             var textnode = document.createTextNode(results[c].categories);
                    
                    
        //             node.appendChild(textnode);
        //             document.getElementById("catlist").appendChild(node);
        //             var linebreak = document.createElement('br');
        //             node.appendChild(linebreak);
        //             //markas

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
               

