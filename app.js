const apiKey="B4x61W7Z4zwIT1MhLlqbbtapOnzCMa8X";
const apiUrl1="https://api.currencybeacon.com/v1/convert"

let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let oneTo = document.querySelector("span.to");
let toValyuta = document.querySelector("span.toValYuta");
let from = document.querySelector("span.from");
let to2 = document.querySelector("span.to2");
let toValyuta2 = document.querySelector("span.toValyuta2");
let from2 = document.querySelector("span.from2");
let b = document.querySelector("button.active");
let buttons = document.querySelectorAll(".btnAll1 button");
let buttons2 = document.querySelectorAll(".btnAll2 button");
let w=document.querySelector('.valP')
let baseCurrency = "RUB";
let targetCurrency = "USD";
let default1 = `${apiUrl1}?api_key=${apiKey}&from=USD&to=RUB&amount=${1}`;


fetch(`${default1}`)
  .then((response) => response.json())
  .then((defdata) => {
    from.innerHTML = targetCurrency;
    to.innerHTML = defdata.value.toFixed(4);
    toValyuta.innerHTML = baseCurrency;

  })
  const apiUrlnewestd = `${apiUrl1}?api_key=${apiKey}&from=RUB&to=USD&amount=${1}`;

    fetch(`${apiUrlnewestd}`)
      .then((response) => response.json())
      .then((dat) => {
       from2.innerHTML = baseCurrency;
        toValyuta2.innerHTML = targetCurrency;

      });

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((btn) => {
            btn.classList.remove("active");
          });
    
          button.classList.add("active");
    baseCurrency = button.innerHTML.trim();
    inp1.value = '';
    let apiUrlForStatic = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${inp2.value}`;
    fetch(`${apiUrlForStatic}`)
    .then((response) => response.json())
    .then((datax) => {
     inp1.value = datax.value.toFixed(4);

    })
    const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((datax) => {
        from2.innerHTML = baseCurrency;
        to2.innerHTML = datax.value.toFixed(4);
        toValyuta2.innerHTML = targetCurrency;
      })

      const apiUrl2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

      fetch(`${apiUrl2}`)
        .then((response) => response.json())
        .then((data1) => {
          from.innerHTML = targetCurrency;
          to.innerHTML = data1.value.toFixed(4);
          toValyuta.innerHTML = baseCurrency;
        })
    });
});


buttons2.forEach((button) => {
    button.addEventListener("click", () => {
      buttons2.forEach((btn) => {
        btn.classList.remove("active2");
      });
  
      button.classList.add("active2");
      targetCurrency = button.innerHTML.trim();
     
      inp2.value = '';
      let apiUrlForStatic = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${inp1.value}`;
  
      fetch(`${apiUrlForStatic}`)
        .then((response) => response.json())
        .then((datax) => {
         inp2.value = datax.value.toFixed(4);
        
        })
        const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((datax) => {
        from2.innerHTML = baseCurrency;
        to2.innerHTML = datax.value.toFixed(4);
        toValyuta2.innerHTML = targetCurrency;
      })
      const apiUrl2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

      fetch(`${apiUrl2}`)
        .then((response) => response.json())
        .then((data1) => {
         from.innerHTML = targetCurrency;
         to.innerHTML = data1.value.toFixed(4);
          toValyuta.innerHTML = baseCurrency;
        })
    });
    
});