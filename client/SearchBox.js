var varlist=[]
const fetchResult2=()=>{
    var val=$('#searchBar').val
    console.log('FR2')
    fetch(`http://localhost:3000/products/${val}`,{
        method:'GET'
    })
    .then(res=>{
        console.log (res)
    })
    $.getJSON(`http://localhost:3000/products/${val}` , function(data){
        console.log(data)
    })
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
    
    if(stayUp){
        fetchResult2()
        $("h1").show("slow", ()=>{})
        $("h2").show("slow", ()=>{})
    }
    else{
        $("h1").hide("slow", ()=>{})
        $("h2").hide("slow", ()=>{})
    }
    


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
               

