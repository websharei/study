var vending = (function(){

	var coke = {count:30, name:"coke", price:500};
	var cider = {count:30, name:"cider", price:400};
	var beverageList = [coke, cider];
	var saveMoney = 10000;
	var salesMoney = 0;

	function buy(beverageName, inputMoney){
		var beverage, checkStatus, chageMoney, info;

		if(inputMoney > 1000){
			displayMsg(false, "1000원 이상은 투입이 안됩니다.");
			return false;
		}

		beverage = getBeverageFromName(beverageName);
		if(! beverage){
			displayMsg(false, "원하시는 음료가 없습니다.");
			return false;
		}

		checkStatus = checkBeforeBuying(beverage, inputMoney);
		if(!checkStatus.result){
			displayMsg(false, checkStatus.msg);
			return false;
		}
		else{
			chageMoney = workVendingMachine(beverage, inputMoney);
			displayMsg(true, beverage.name + "을 구매했고 잔돈은 " + chageMoney +" 입니다.");
			return true;
		}
	}

	function getVendingInfo(){
		var msg = "";
		var beverage;
		for(var i = 0 ; i < beverageList.length ; i++){
			beverage = beverageList[i];
			msg += beverage.name +"가 " + beverage.count +"개 존재합니다.\n";
		}
		msg += "저장된 금액은 " + saveMoney +" 입니다. \n"
		msg += "수입은 " + salesMoney +" 입니다."
		return msg;
	}


	function getBeverageFromName(beverageName){
		var beverage = null;
		for(var i = 0 ; i < beverageList.length ; i++){
			if(beverageList[i].name == beverageName){
				beverage = beverageList[i];
				break
			}
		}
		return beverage;
	}

	function checkBeforeBuying(beverage, inputMoney){
		var checkStatus = {result:false, msg:""};

		// 음료수 재고가 있는가?
		if(beverage.count <= 0){
			checkStatus.msg = beverage.name+ "는 품절 됐습니다 "
			return checkStatus;
		}

		// 투입한 돈은 적정한가?
		if(inputMoney < beverage.price ){
			checkStatus.msg = "금액이 모자릅니다"
			return checkStatus;
		}

		// 거스름돈은 있는가?
		if(inputMoney - beverage.price > saveMoney ){
			checkStatus.msg = "거스름돈이 부족합니다."
			return checkStatus;
		}	
		checkStatus.result = true;
		return checkStatus;
	}

	function workVendingMachine(beverage, inputMoney){
		var changeMoney;
		beverage.count--;
		changeMoney = inputMoney - beverage.price;
		saveMoney -= changeMoney;
		salesMoney += inputMoney;

		return changeMoney;
	}

	function displayMsg(isSuccess, msg){
		if(isSuccess) console.log("------- success -------", "\n", msg);
		else console.log("-------- fail --------", "\n", msg);
		console.log("-----------------------", "\n");
	}

	var vending ={
		buy:buy,
		getVendingInfo:getVendingInfo
	}
	return vending;

})();

