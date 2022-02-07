let name=document.getElementById("name").value;
let add=document.getElementById("add").value;
let zip=document.getElementById("zip").value;
let mob=document.getElementById("mob").value;



document.querySelector("form").addEventListener("submit",function(){
    if(document.getElementById("name").value!=""&&document.getElementById("add").value!=""&&document.getElementById("zip").value!=""&&document.getElementById("zip").value!="")
{
    alert("Thank You For Purchasing");

    setTimeout(function(){
        alert("Your order is accepted")
    },0)
    setTimeout(function(){
        alert("Your order is being cooked")
    },3)
    setTimeout(function(){
        alert("Your order is ready")
    },8)
    setTimeout(function(){
        alert("Order out for delivery")
    },10)
    setTimeout(function(){
        alert("Order delivered")
    },12)

}
else{
    alert("Please fill all the details");
}
})


// 0 seconds : Your order is accepted 3 seconds : Your order is being cooked 8 seconds : Your order is ready 10 seconds : Order out for delivery 12 seconds : Order delivered