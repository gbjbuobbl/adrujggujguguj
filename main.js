menu_list_array = ["Veg Margherita Pizza","Paneer Masala Pizza","Paneer Tikka Pizza","Cheese Burst Pizza","Olive Top Pizza"];
                    

function getmenu(){
var htmldata;
htmldata =  "<ol class='menulist'>";
menu_list_array.sort();
 for(var i=0;i<menu_list_array.length; i++){

    htmldatahtmldata+<li> menu_list array[i] + "</li>
    
    htmldata=htmldata+"</ol>"
    
    document.getElementById("display_menu").innerHTML = htmldata;} 
    function add_item(){
    
    var htmldata;
    
    var item=document.getElementById("add_item").value; menu_list_array.push(item);
    
    menu_list_array.sort(); htmldata="<section> class='cards'";
    
    for(var i=0;icmenu_list_array.length;i++) ;
    
    htmldata=htmldata+"<div class="nd"> <img src="images/pizzaing.png"></div>";

    htmidata=htmldata+ "</section>"
    
    document.getElementById("display addedmenu").innerHTML= htmldata;