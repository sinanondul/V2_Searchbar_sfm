
var varlist=[];
function fetchResult2( ){
    var val=$('#searchBar').val();
    var a = fetch('http://localhost:3500/products/'+val, {method:'GET'})

    .then(async function (res){
        varlist = await res.json();
        return varlist;
    })
}

window.onload=function(){
const searchBar = $("#searchBar");
$("h1").hide();
$("h2").hide();   

searchBar.keyup(function(a){
    
    $("#brlist").empty();
    $("#catlist").empty();
    $("#oop").empty();  

    var sv=searchBar.val()
    var stayUp=(sv.length >= 2);

    if(stayUp){
        console.log(sv)
        $("h1").show("fast", ()=>{})
        fetchResult2();
    }

        
        let kategoris=[];
        for (i = 0; i < varlist.length; i++) {
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
        
        let markas=[];
        for (i = 0; i < varlist.length; i++) {
            
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

        let prods=[];
        for(i=0; i < varlist.length;i++){            
            if(!prods.includes(varlist[i])){
                prods.push(varlist[i])
            }
        }

        for (i=0; i<prods.length;i++){
            var catnode = document.createTextNode(prods[i]["categories"]);
            var titnode = document.createTextNode(prods[i]["title"]);
            var prinode = document.createTextNode(prods[i]["prices"]);

            
            node = document.createElement("div");
            node.className="waw-product";
            document.getElementById("oop").appendChild(node);

            node = document.createElement("a")
            node.setAttribute('target','_self')  
            node.className ="a"
            node.setAttribute = ('href', prods[i]['links']) 
            document.getElementsByClassName("waw-product")[i].appendChild(node);

            node = document.createElement("div");
            node.className ="waw-product-item";
            document.getElementsByClassName("a")[i].appendChild(node)

            node = document.createElement("div")
            node.className = "product-img";
            document.getElementsByClassName("waw-product-item")[i].appendChild(node)

            node = document.createElement("img")
            node.src = prods[i]['imglinks'];
            document.getElementsByClassName("product-img")[i].appendChild(node)

            node = document.createElement("div")
            node.className = "product-detail"
            document.getElementsByClassName("waw-product-item")[i].appendChild(node)

            node = document.createElement("span")
            var textnode = catnode;  
            node.appendChild(textnode);
            node.setAttribute('title', prods[i]['categories'])
            document.getElementsByClassName("product-detail")[i].appendChild(node)

            node = document.createElement("h3")
            var textnode = titnode;  
            node.appendChild(textnode);
            node.className="title"
            document.getElementsByClassName("product-detail")[i].appendChild(node)

            node=document.createElement("span")
            node.className = "price"
            var textnode = prinode;  
            node.appendChild(textnode);
            document.getElementsByClassName("product-detail")[i].appendChild(node)
        }
       
    //}

    // else{
    //    // $("h1").hide("slow", ()=>{})
    //    // $("h2").hide("slow", ()=>{})
    // }
    $(window).click(function() {
        $("h1").hide("slow", ()=>{})
        $("h2").hide("slow", ()=>{})
    });
        
    $('h1').click(function(event){
        event.stopPropagation();
    });



});   

}

               

