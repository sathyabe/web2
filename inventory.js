document.getElementById("prod1").onload = function() {show()};
function addtoCart(){
    
        addproduct();
        
    }


function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('products');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function addproduct() {
    var name = document.getElementById('prname').value;
    var desc = document.getElementById('prdesc').value;
    var quantity = document.getElementById('prqty').value;
    var price = document.getElementById("prprice").value;
    var img64=document.getElementById("custId").value;
    
    var date=new Date();    
    var item= { Name: name, Descriprion: desc, Quantity: quantity, Price: price, Image:img64, Date: date.toString()}
    var todos = get_todos(); 
    todos.push(item);
    localStorage.setItem('products', JSON.stringify(todos));
    document.getElementById("custId").value="";
    show();

}

function getImgUrl() {
    
    
    const file = document.querySelector('input[type="file"]').files[0];
    
   var reader = new FileReader();
   reader.readAsDataURL(file);
  
   reader.onload= function () {  
     
       document.getElementById("custId").value=reader.result;

       }
  }
/*function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('products', JSON.stringify(todos));
 
   //show();
 
    return false;
}*/
 
function show() {
   //new code
   var y= ""
    //var view=document.createElement("div");
    var text=localStorage.getItem("products");
    var parsedObject = JSON.parse(text);
    for (var i=0; i < parsedObject.length; i++){
        y +=  "<br>Image:<img src="+parsedObject[i].Image+" ><br><br>Product Name:"+parsedObject[i].Name+"<br>Product Description:"+parsedObject[i].Description+"<br>PRICE:"+parsedObject[i].Price+"<br>QTY:"+parsedObject[i].Quantity+"<br>DATE:"+parsedObject[i].Date+'<button class="remove" id="'+ i + '"> Remove </button>';
   document.getElementById("prod").innerHTML = y;
 }
 
 document.getElementById('prod').innerHTML = y;
   var buttons = document.getElementsByClassName('remove');
   for (var i=0; i < buttons.length; i++) {
       buttons[i].addEventListener('click', remove);
   };
}
   function view(){
    var x = ""
    var text=localStorage.getItem("products");
    var parsedObject = JSON.parse(text);
    for (var i=0; i < parsedObject.length; i++){
        x+= "<br>Image:<img src="+parsedObject[i].Image+"><br>Product Name:"+parsedObject[i].Name +"<br>Product Description:"+parsedObject[i].Description +"<br>PRICE:"+parsedObject[i].Price +"<br>QTY:"+parsedObject[i].Quantity+"<br>DATE:"+parsedObject[i].Date+"";
   document.getElementById("prod").innerHTML = x;
     }
     localStorage.clear();


}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('products', JSON.stringify(todos));
 
    show();
 
    return false;
}
//end
//document.getElementById('add').addEventListener('click', add);

/**

 */