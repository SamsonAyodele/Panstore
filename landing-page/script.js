let url = "https://fakestoreapi.com/products";
let root = document.getElementById("root");
async function getProducts() {
  const response = await fetch(url);
  let products = await response.json();
  console.log(products);
  let display = products
    .map((product) => {
      return `<div class="box">
        <div class="img-card">
            <img src=${product.image} alt="man" class="box-img">
        </div>
        <div>
            <p>${product.title.substr(0, 16)}</p>
            <p>${padTo(product.price, '#')}</p>
            <p>${product.description.substr(0, 20)}</p>
        </div>
    </div>`;
    })
    .join("");

  root.innerHTML = display;
}

getProducts();

function padTo(digit, currency){
  let strDigit = digit.toString()
  let newDigit = strDigit.padStart(strDigit.length + 1, currency)
  return newDigit
}

// padTo(1200, '$')
