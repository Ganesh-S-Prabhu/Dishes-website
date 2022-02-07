let cart=JSON.parse(localStorage.getItem("cart"))||[];

let total=document.getElementById("total");
findtotal();
function findtotal()
{
   if(cart.length!=0){
    let t= cart.reduce(function(acc,cur){
        return acc+cur.price;
    },0)
    total.textContent=`Total is ${t}`;
   }
   else{
    total.textContent="No Dishes are added to the Cart";
   }
}


let me=document.querySelector("#cart")

displayData(cart);


function displayData(cart){
me.textContent="";
    cart.forEach(function(ele,index){
        let div=document.createElement("div");
       let img=document.createElement("img");
       let name=document.createElement("p");
       let price=document.createElement("p");
       let btn=document.createElement("button");

       img.src=ele.strMealThumb;
       name.textContent=ele.strMeal;
    //    ele.price=  Math.round(Math.random()*100+1);
       price.textContent=ele.price;
       btn.textContent="Remove from  Cart";
       btn.addEventListener("click",function(){
        removeCart(index);
       });


       div.append(img,name,price,btn);
       me.append(div);
   })

}

function removeCart(index){
    cart.splice(index,1);
    
    localStorage.setItem("cart",JSON.stringify(cart));
    displayData(cart);
    findtotal();


}

let check=document.getElementById("check");


function varify(){
    if(cart.length==0){
      alert("Please add Dishes To Your Cart");
    }
    else{
        window.location.href="checkout.html";
    }
}