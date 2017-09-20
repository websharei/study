var controller = (function(){
 
  var isWork;
  var vending;
  var coke_count, cider_count, save_money, sales_money;
  var coke_button, cider_button;
  var over_money, under_money, under_stock, under_change;
  var input_money, change_money;
  var beverage;
 
  function init(_vending){
    vending = _vending;
    isWork = true;
 
    registerDOM();
    registerEvent();
    buy("ADMIN");
  }
 
  function initView(){
    coke_count.val("");
    cider_count.val("");
    save_money.val("");
    sales_money.val("");
    change_money.val("");
 
    over_money.removeClass("alert");
    under_money.removeClass("alert");
    under_stock.removeClass("alert");
    under_change.removeClass("alert");
  }
  function updateView(data){
    initView();
 
    coke_count.val(data.cokeCount);
    cider_count.val(data.ciderCount);
    save_money.val(data.saveMoney);
    sales_money.val(data.salesMoney);
    change_money.val(data.changeMoney);
    input_money.val(data.inputMoney);
 
    if(data.errorType == "OVER_MONEY"){
      over_money.addClass("alert");
    }
    else if(data.errorType == "UNDER_MONEY"){
      under_money.addClass("alert");
    }
    else if(data.errorType == "UNDER_STOCK"){
      under_stock.addClass("alert");
    }
    else if(data.errorType == "UNDER_CHANGE"){
      under_change.addClass("alert");
    }
 
    if(data.errorType == "NO_ERROR"){
      isWork = false;
 
      coke_button.prop('disabled', true);
      cider_button.prop('disabled', true);
      beverage.css("opacity", 0);
      beverage.attr("src", data.buyedBeverageName+".jpg");
      beverage.animate({opacity:'1'});
 
      beverage.click(function(){
        $(this).css("opacity", 0);
        isWork = true;
        coke_button.prop('disabled', false);
        cider_button.prop('disabled', false);
        change_money.val(0);
      });
    }
  }
 
  function buy(beverageName){
    var data;
    data = vending.buy(beverageName, getInputMoney());
    updateView(data);
  }
 
  function getInputMoney(){
    var money;
    money = Number( input_money.val() );
    if( !money || money < 0){
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
  }

  function registerEvent(){
    coke_button.click(function(){
       if(isWork) buy("coke");
    });
 
    cider_button.click(function(){
      if(isWork) buy("cider");
    });

  }
  var controller = {
    init:init
  }
  return controller;
 
})();