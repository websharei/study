var controller = (function(){

	var coke_count, cider_count, save_money, sales_money;
	var coke_button, cider_button;
	var over_money, under_money, under_stock, under_change;
	var input_money, change_money;

	function init(_vending){
		vending = _vending;

		registerDOM();
		registerEvent();
	}

	function registerEvent() {
		coke_button.click(function(){
			var data = vending.buy('coke', getInputMoney());
			console.log(data);
		});
		cider_button.click(function(){
			var data = vending.buy('cider', getInputMoney());
			console.log(data);
		});
	}

	function getInputMoney() {
		var money;
		money = Number(input_money.val());
		
		if(!money || money < 0) {
			money = 0;
		}
		return money;
	}

	function registerDOM(){
		coke_count = $("#coke_count");
		cider_count = $("#cider_count");
		sales_money = $("#sales_money");
		save_money = $("#save_money");
		coke_button = $("#coke_button");
		cider_button = $("#cider_button");
		over_money = $("#over_money");
		under_money = $("#under_money");
		under_stock = $("#under_stock");
		under_change = $("#under_change");
		input_money = $("#input_money");
		change_money = $("#change_money");
		beverage = $("#beverage");

		console.log(coke_count);
	}

	var controller = {init: init};
	return controller;
})();
