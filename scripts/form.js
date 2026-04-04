

// Review Codes and Data

if (document.querySelector("#review") )

{
  const dsplyR = document.querySelector("#num-review");
  const submit = document.querySelector("#submit");

let totalReviews= getReview() || 0;




function getReview () {
  return localStorage.getItem("totalReviews")
}

function setReview () {
  totalReviews ++
  localStorage.setItem("totalReviews", totalReviews)
}
  setReview()


  dsplyR.textContent = `Total Reviews ${totalReviews}`
}

else {
  const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function toSentenceCase (para) {


   if (para.split(" ").length < 2) {
    return para.slice(0, 1).toUpperCase() + para.slice(1, para.length )
   }
   else {
    const paraArray = para.split(" ");
    let newStr = ""
    paraArray.forEach(
      (word) =>{(result = word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase()) 
      newStr += result + " "
      }
      
    )
   return newStr.trim()
  }
}

console.log(toSentenceCase("jamuel wamah"))

const productList = document.querySelector("#products");


for (const product of products) {
  const option = document.createElement("option");
  
  option.id = product.id;
  option.textContent = toSentenceCase(product.name);

  productList.appendChild(option)

}
}



