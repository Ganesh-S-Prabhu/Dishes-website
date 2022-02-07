let cart=JSON.parse(localStorage.getItem("cart"))||[];
url=" https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

let menu=document.getElementById("menu");

async function getDish(){
    try{
        let res=await fetch(url);
    let data =await res.json();
    // console.log(data);
    // console.log(Math.random())
    displayData(data);
    }
    catch(err){
        console.log(err);
    }
}

getDish();

// idMeal: "52807"
// ​​​
// strMeal: "Baingan Bharta"
// ​​​
// strMealThumb: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg"


function displayData(d){

     d.meals.forEach(function(ele){
         let div=document.createElement("div");
        let img=document.createElement("img");
        let name=document.createElement("p");
        let price=document.createElement("p");
        let btn=document.createElement("button");

        img.src=ele.strMealThumb;
        name.textContent=ele.strMeal;
        ele.price=  Math.round(Math.random()*100+1);
        price.textContent=`Price : ${ele.price}`;
        btn.textContent="Add to Cart";
        btn.addEventListener("click",function(){
            addtoCart(ele);
        });


        div.append(img,name,price,btn);
        menu.append(div);
    })

}

function addtoCart(ele){
    alert(`${ele.strMeal} added to your the Cart`);
    cart.push(ele);
    localStorage.setItem("cart",JSON.stringify(cart));
}