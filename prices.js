
// input function
function myFunction() {

  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


let currency = document.querySelectorAll(".currency");



// hide/show country list on click/blur input
let countryChooseInput = document.querySelector("#myInput");
let countryList = document.querySelector("#myUL");

countryChooseInput.addEventListener("click", function(){
    countryList.classList.add("active")
})


// change country description

let countryItem = document.querySelectorAll("#myUL a");
let countryDescription = document.querySelectorAll(".countryDescriptionBlock .countryBlock");
for (let i=0; i<countryItem.length; i++){
           countryItem[i].addEventListener("click", function (){
           $(".countryBlock").removeClass("active");

           $(".currency").removeClass(".active");
           $(".price").innerHTML=this.getAttribute("data-price");
           document.querySelectorAll(".currency")[i*3].classList.add("active");

           countryChooseInput.value = countryItem[i].innerHTML;
           countryDescription[i].classList.add("active");
           countryList.classList.remove("active");
        })
}



//get price from data and out in price
let countryPrice = document.querySelectorAll(".price");

for (let i=0; i<countryPrice.length; i++){
    countryPrice[i].innerHTML = countryPrice[i].getAttribute("data-price")
}


//currency change



async function calculateCurrency(){
    let response = await fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/?date=2022-03-18T20%3A11%3A14.708Z")
    let data = await response.json();

    for (let i=0; i<currency.length; i++){
        currency[i].addEventListener("click", function (){

            $(".currency").removeClass("active")
            this.classList.add("active")

            if((currency[i].getAttribute("data-curency")==="GEL")){
                currency[i].parentElement.firstElementChild.nextElementSibling.innerHTML = currency[i].parentElement.firstElementChild.nextElementSibling.getAttribute("data-price");
            }

            else {

                for (let a in data[0].currencies){
                    if (currency[i].getAttribute("data-curency")===data[0].currencies[a].code){
                        currency[i].parentElement.firstElementChild.nextElementSibling.innerHTML = Math.floor(parseFloat(currency[i].parentElement.firstElementChild.nextElementSibling.getAttribute("data-price"))/parseFloat(data[0].currencies[a].rate))
                    }
                }
            }
        })
    }

}

calculateCurrency()


