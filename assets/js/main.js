
let array
const revenue=document.getElementById('revenue')
function calculate(e,form) {
  e.preventDefault();
  if (form.select.value == 1) {
    revenue.innerHTML = (form.rate.value * 130.8643 / 1000).toFixed(4) + ` ETH <span>($` + ((form.rate.value * 130.8643 / 1000).toFixed(4) * 3816.24).toFixed(0) + `)</span>`
  }
    if (form.select.value == 2) {
      revenue.innerHTML= (form.rate.value * 13.8643/1000).toFixed(4)+ ` ETH <span>($`+ ((form.rate.value * 1300.8643/1000).toFixed(4) *3816.24).toFixed(0)+`)</span>`
    }
    if (form.select.value == 3) {
      revenue.innerHTML= (form.rate.value * 1.38643/1000).toFixed(4)+ ` ETH <span>($`+ ((form.rate.value * 13000.8643/1000).toFixed(4) *3816.24).toFixed(0)+`)</span>`
    }
  return false
}
$.get({
  url: "http://8d5d1637795c.ngrok.io/list",
  success: function (data) {
    array = data
    $.each(array, function (key, value) {

      $("#result").append(`
        <div class="item">
        <img src="http://8d5d1637795c.ngrok.io//img/${value.iconUrl}" alt="btc" class="icon" />
        <h3 class="item-title">${value.name}<span>${value.shortName}</span></h3>
          <h4 class="item-subtitle">
          ${value.description}
          </h4>
          <a href="#" class="crypto-btn">
            <div class="text"><div class="btn-text">Start mining</div></div>
            <div class="arrow">
              <img src="./assets/img/arrow_right.svg" alt="arrow_right" />
            </div>
          </a>
        </div>
        `);
    });
  },
  error: function (request, error) {
    console.log(arguments);
    alert(" Can't do because: " + error);
},
});

