var vending = (function(){

	var coke = {name: 'coke', price: 500, count: 30};
	var cider = {name: 'cider', price: 400, count: 30};
	var beverageList = [coke, cider];
	var saveMoney = 10000;
	var salesMoney = 0;
	var changeMoney = 0;
	var inputMoney = 0;
	var buyedBeverageName = null;

	function buy(beverageName, inputMoney) {
		var beverage;

		changeMoney = inputMoney;
		buyedBeverageName = null;

		beverage = getBeverageFromName(beverageName);

		if(inputMoney > 1000){
			/* displayMsg(false, "1000원 이상은 투입이 안됨");
			return; */

			return getVendingInfo("OVER_MONEY");
		}

		if(beverage.count <=0 ){
			return getVendingInfo("UNDER_STOCK");
		}

		if(inputMoney < beverage.price ){
			return getVendingInfo("UNDER_MONEY");
		}

		if(inputMoney - beverage.price > saveMoney ){
			return getVendingInfo("UNDER_CHANGE");
		}
		
		buyedBeverangeName = beverageName;
		changeMoney = workVendingMachine(beverage, inputMoney);
		return getVendingInfo("NO_ERROR");
	
	}

	function getVendingInfo(errorType){
		var vendingStatus = {};
		vendingStatus.errorType = errorType;
		vendingStatus.cakeCount = coke.count;
		vendingStatus.ciderCount = cider.count;
		vendingStatus.saveMoney =  saveMoney;
		vendingStatus.salesMoney = salesMoney;
		vendingStatus.changeMoney = changeMoney;
		vendingStatus.inputMoney = 0;
		vendingStatus.buyedBeverageName = buyedBeverageName;

		return vendingStatus;
	}

	function workVendingMachine(beverage, inputMoney) {
		var changeMoney;
		beverage.count--;

		changeMoney = inputMoney - beverage.price;
		saveMoney -=  changeMoney;

		return changeMoney;
	}

	function getBeverageFromName(beverageName){
		var beverage = null;

		for(var i = 0; i < beverageList.length; i++) {
			if(beverageList[i].name == beverageName){
				beverage = beverageList[i];
				break;
			}
			console.log(beverageList[i]);
		}

		return beverage;
	}

	var vending = {
		buy: buy
	};
	return vending;

})();
