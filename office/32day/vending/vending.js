var vending = (function(){

    var coke = {count:30, name:"coke", price:500};
    var cider = {count:30, name:"cider", price:400};
    var beverageList = [coke, cider];
    var saveMoney = 10000;
    var salesMoney = 0;
    var buyedBeverageName = ""
    var changeMoney = 0;

    function buy(beverageName, inputMoney){
        var beverage, vendingStatus;

		buyedBeverageName = null;
		changeMoney = inputMoney;

        if(beverageName == "ADMIN"){
            vendingStatus = getVendingInfo("ADMIN");
            return vendingStatus;
        }

        beverage = getBeverageFromName(beverageName);
        // 금액 투입이 많은 경우
        if(inputMoney > 1000){
            vendingStatus = getVendingInfo("OVER_MONEY");
        }
        // 음료수 재고가 있는가?
        if(beverage.count <= 0){
            vendingStatus = getVendingInfo("UNDER_STOCK");
        }
        // 투입한 돈은 적정한가?
        if(inputMoney < beverage.price ){
            vendingStatus = getVendingInfo("UNDER_MONEY");
        }
        // 거스름돈은 있는가?
        if(inputMoney - beverage.price > saveMoney ){
            vendingStatus = getVendingInfo("UNDER_CHANGE");
        }

        if(!vendingStatus){
          buyedBeverageName = beverageName;	
          changeMoney  = workVendingMachine(beverage, inputMoney);
          vendingStatus = getVendingInfo("NO_ERROR");
        }
        return vendingStatus;
    }

    function getVendingInfo(errorType){
        var beverage;
        var vendingStatus = {};

        vendingStatus.errorType = errorType;
        vendingStatus.buyedBeverageName = buyedBeverageName;
        vendingStatus.saveMoney = saveMoney;
        vendingStatus.salesMoney = salesMoney;
		vendingStatus.cokeCount = coke.count;
		vendingStatus.ciderCount = cider.count;
        vendingStatus.changeMoney = changeMoney;
        vendingStatus.buyedBeverageName = buyedBeverageName;
        vendingStatus.inputMoney = 0;
        return vendingStatus;
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

    function workVendingMachine(beverage, inputMoney){
        var changeMoney;
        beverage.count--;
        changeMoney = inputMoney - beverage.price;
        saveMoney -= changeMoney;
        salesMoney += inputMoney;
        return changeMoney;
    }

    var vending ={
        buy:buy
    }
    return vending;

})();