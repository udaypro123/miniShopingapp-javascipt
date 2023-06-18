const productdata = document.getElementById("productdata")
const inputbox = document.getElementById("input")
const viewdivpopup = document.querySelector(".viewdivpopup")
const cart = document.getElementById("addtocart");
const cartdata = document.getElementById("cartdataitem");

async function hello() {

  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  // console.log(data)
  productdata.innerHTML = ""
  data.map((ele) => {
    // console.log(ele);
    const title = ele.title
    const image = ele.image
    const price = ele.price
    productdata.innerHTML += ` <div class="card" id="card">
        <img src=${image} class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-title">${title.slice(0, 20)}</h6>
          
          <p >$. ${price}</p>
          <button type="button" class="btn btn-success" id="quickview" onclick="showdata(${ele.id})">Quick View</button>
          <button type="button" class="btn btn-warning" onclick="addtocart(${ele.id})">add to cart</button>

        </div>
      </div>`

  })

}
hello();


async function showdata(ele) {
  const res = await fetch(`https://fakestoreapi.com/products/${ele}`)
  const data = await res.json();
  // console.log(data)
  // console.log(data.image)
  // console.log(data.id)

  viewdivpopup.innerHTML = `<div class="row" id="cards">
    <div class="col-sm-6 mb-3 mb-sm-0">
      
        <div class="card-body card-body1">
        <img src=${data.image} class="card-img-top" alt="...">
        </div>
     
    </div>
    <div class="col-sm-6">
   
        <div class="card-body card-body2">
        <h6 class="card-title">Title :  ${data.title}</h6>
      
        <h3 >Price : $. ${data.price}</h3>

        <div class="btndiv">
        <button type="button" class="btn btn-warning">add to cart</button>
        <button type="button" class="btn btn-success" onclick="back()">Back</button>
        </div>
      
      </div>
    </div>
  </div>`

  viewdivpopup.classList.add("showdiv")

}



async function addtocart(ele) {
  const res = await fetch(`https://fakestoreapi.com/products/${ele}`)
  const data = await res.json();
  console.log("hello")
  cartdata.innerHTML += ` <div class="card" id="cardss">
  <img src=${data.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">${data.title.slice(0, 20)}</h6>
    
    <p >${data.price}</p>

  </div>
</div>`
alert("add to cart successfully")


}



function back() {
  viewdivpopup.classList.remove("showdiv")
}


function addtocarthideandshow() {
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}


















