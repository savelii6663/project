let count = 0;
let sumPrice = 0;
let prices = document.querySelectorAll('.card-link');
let counItem = document.querySelector('.count-items');
let counPrice = document.querySelector('.total-amount');
for(let price of prices ){
	price.onclick = function() {

		counPrice.innerHTML = sumPrice += +price.getAttribute('attr-price');
		counItem.innerHTML = ++count;
        
	};
}



