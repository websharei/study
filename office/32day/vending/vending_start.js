var vending = (function(){

	var coke = {name: 'coke', price: 500, count: 30};
	var cider = {name: 'cider', price: 400, count: 30};
	var beverageList = [coke, cider];
	var saveMoney = 10000;
	var salesMoney = 0;

	function buy(beverageName, inputMoney) {
		var beverage
		if(inputMoney > 1000){
			console.log("1000원 이상은 투입이 안됨");
			return;
		}
		beverage = getBeverageFromName(beverageName);
		if(! beverage){
			displayMsg("원하는 음료가 없어요");
			return;
		}

		var checkStatus = checkBeforeBuying(beverage, inputMoney);
		if(! checkStatus.result){
			displayMsg(false, checkStatus.msg);
			return;
		}

		changeMoney = workVendingMachine(beverage, inputMoney);
		displayMsg(true, beverage.name + "을 구매했고 잔돈은 " + changeMoney +" 입니다.");
	}

	function getVendingInfo(){
		var msg = "";
		var beverage;
		for(var i = 0; i < beverageList.length; i++) {
			beverage = beverageList[i];
			msg += beverage.name + "가 " + beverage.count + "개 존재합니다. \n";
		}
		msg += "저장된 금액은 " + saveMoney + " 입니다. \n";
		msg += "수입은 " + salesMoney + " 입니다.";
		
		 return msg;
	}

	function workVendingMachine(beverage, inputMoney) {
		var changeMoney;
		beverage.count--;

		changeMoney = inputMoney - beverage.price;
		saveMoney -=  changeMoney;

		return changeMoney;
	}

	function checkBeforeBuying(beverage, inputMoney){
		var checkStatus = {result: false, msg:""};
		if(beverage.count <=0 ){
			checkStatus.msg = beverage.name + " 은 품절 됐습니다.";
			checkStatus.result = false;
			return checkStatus;
		}

		if(inputMoney < beverage.price ){
			checkStatus.msg = "금액이 모자릅니다"
			checkStatus.result = false;
			return checkStatus;
		}

		if(inputMoney - beverage.price > saveMoney ){
			checkStatus.msg = "거스름돈이 없어요.."
			checkStatus.result = false;
			return checkStatus;
		}	
		checkStatus.result = true;
		return checkStatus;
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

	function displayMsg(isSuccess, msg){
		if(isSuccess){
			console.log("-----------success----------");
			console.log(msg);
			console.log("------------------------------");
		} else {
			console.log("-----------fail----------");
			console.log(msg);
			console.log("------------------------------");
		}
	}

	var vending = {
		buy: buy,
		getVendingInfo: getVendingInfo
	};
	return vending;

})();
