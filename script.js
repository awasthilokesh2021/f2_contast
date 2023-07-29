const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

let sectioncard = document.getElementById("section-card");
let tabdata = document.getElementById("bodydata");

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    fetchdata(result);
    listData(result);
  });


  function fetchdata(data) {
    data.forEach((item) => {
      let card1 = document.createElement("div");
      card1.className = "card";

      let {
        name,
        symbol,
        image,
        current_price,
        market_cap,
        price_change_percentage_24h,
        total_volume,
      } = item;

      card1.innerHTML = `
              <div class="card_top">
                <div>
                 <img src="${image}" />
                </div>
               <div class="spanbtn">
                  <span>${symbol}</span>
                  <span class="bit">${name}</span>
                </div>
             </div>
            <div>
                <span class="card1">${price_change_percentage_24h}</span>
             </div>
             <div class="card_bottom">
                <span class="card2">${current_price}</span>
                <p>${total_volume}</p>
              <p>${market_cap}</p>
            </div>
      `;
      sectioncard.append(card1);
      console.log(sectioncard);
    });
  }
  submitData();


//======================================


  function listData(data) {
    data.forEach((item) => {
      let {
        name,
        symbol,
        image,
        current_price,
        market_cap,
        price_change_percentage_24h,
        total_volume,
      } = item;

      let carddata = document.createElement("table");

      carddata.innerHTML = `
           <tr>
               <td> <img src=" ${image}" /> </td>
               <td>
                   <p >${symbol}</p>
                   <p >${name}</p>
               </td>
               <td class="psymbol">${price_change_percentage_24h}</td>
               <td class="pname">${current_price}</td>
               <td>${total_volume}</td>
               <td>${market_cap}</td>
            </tr>`;
      tabdata.append(carddata);
    });
  }

  listData();


  
  function submitData(){  
    alert("hyy")
    document.getElementById("section-card").style.display.className = "show"
    document.getElementById("bodydata").style.display.className = "hide"
  }

  function listData(){ 
    alert("hy") 
    document.getElementById("bodydata").style.display.className = "show"
    document.getElementById("section-card").style.display.className = "hide"
  }

