'use strict';

// var firstAndPike = new store('firstAndPike', '1st and Pike', 23, 65, 6.3);
// var seaTac = new store('seaTac', 'SeaTac Airport', 3, 24, 1.2);
// var seattleCenter = new store('seattleCenter', 'Seattle Center', 11, 38, 3.7);
// var capHill = new store('capHill', 'Capitol Hill', 20, 38, 2.3);
// var alki = new store('alki', 'Alki', 2, 16, 4.6);

var tableHead = ['Store Location','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','Daily Location Total'];
var hourlySalesSums = [];
var sumTotal = 0;

var storeTable = document.getElementById('sales-table');

function appendHead() {
  var headTrEl = document.createElement('tr');
  headTrEl.setAttribute('id', 'table-head');
  storeTable.appendChild(headTrEl);

  for (var index = 0; index < tableHead.length; index++) { //creates and appends top table head
    var tabHead = document.getElementById('table-head');
    var topThEl = document.createElement('th');
    topThEl.textContent = tableHead[index];
    tabHead.appendChild(topThEl);
  }
}

function store(name, location, minCustPerHr, maxCustPerHr, avgSalePerCust) {
  this.name = name;
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgSalePerCust = avgSalePerCust;
  this.hourlySales = [];
  this.totalSum = [];
}

store.prototype.randCustPerHr = function() {
  return (Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr);
};

store.prototype.salesPerHr = function() {
  this.hourlySales = [];
  for (var index = 0; index < (tableHead.length - 2); index++) {
    console.log('salesPerHr loop fires - index: ', index);
    var rand = Math.floor((this.randCustPerHr() * this.avgSalePerCust));
    this.hourlySales.push(rand);
  }
  return this.hourlySales;
};

store.prototype.sumSales = function() {
  this.salesPerHr();
  var sumHold = 0;
  for (var i = 0; i < this.hourlySales.length; i++) {
    sumHold = sumHold + this.hourlySales[i];
    console.log('for-loop fires. sumHold = ' + sumHold);
  }
  return this.totalSum.push(sumHold);
};

store.prototype.populateTable = function() {
  this.sumSales();

  var tableLoc = document.getElementById('sales-table');
  var trEl = document.createElement('tr'); //row creator

  var locHead = document.getElementById(this.name); // creates store locations table head
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  for (var index = 0; index < this.hourlySales.length; index++) { //creates table data sales output
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[index];
    trEl.appendChild(tdEl);
  }

  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.totalSum;
  trEl.appendChild(totalTdEl);
  tableLoc.appendChild(trEl); //to append row with other elements attached to it
};

var storesData = [['firstAndPike','1st and Pike', 23, 65, 6.3],
['seaTac','SeaTac Airport', 3, 24, 1.2],
['seattleCenter','Seattle Center', 11, 38, 3.7],
['capHill','Capitol Hill', 20, 38, 2.3],
['alki','Alki', 2, 16, 4.6]];

for (var i = 0; i < storesData.length; i++) {
  storesData[i] = new store(storesData[i][0], storesData[i][1], storesData[i][2], storesData[i][3], storesData[i][4]);
};
// function store(location, minCustPerHr, maxCustPerHr, avgSalePerCust) <-- for reference purposes

function populateStTabs(){// Do i even need this func anymore?
  for (var index = 0; index < storesData.length; index++) {
    console.log('salesPerHr call for-loop fires. index = ', index);
    storesData[index].populateTable();//creates row in table
  }
}

function sumHourlySales() {
  hourlySalesSums = [];
  sumTotal = 0;
  for (var index = 0; index < (tableHead.length - 2); index++) { //sums sales by hour across all store locations, pushes to array hourlySalesSums
    var sumHr = 0;

    for (var i = 0; i < storesData.length; i++) {
      sumHr = sumHr + storesData[i].hourlySales[index];
      //console.log('for-loop fires. sumHr = ' + sumHr);
    }
    hourlySalesSums.push(sumHr);
  }
  for (var i = 0; i < hourlySalesSums.length; i++) {
    sumTotal = sumTotal + hourlySalesSums[i];
    //console.log('for-loop fires. sumHr = ' + sumTotal);
  }
}

function appendFoot() {
  var footTrEl = document.createElement('tr');
  footTrEl.setAttribute('id', 'table-foot');
  storeTable.appendChild(footTrEl);

  var tabFoot = document.getElementById('table-foot');
  var footThEl = document.createElement('th');
  footThEl.textContent = 'Totals';
  tabFoot.appendChild(footThEl);

  for (var index = 0; index < hourlySalesSums.length; index++) { //creates and appends footer table data
    var footTdEl = document.createElement('td');
    footTdEl.textContent = hourlySalesSums[index];
    tabFoot.appendChild(footTdEl);
  }

  var totalsSum = document.createElement('td');
  totalsSum.textContent = sumTotal;
  tabFoot.appendChild(totalsSum);
}
//----------------------------------------------------------------

var newLocForm = document.getElementById('storeForm'); //Form

newLocForm.addEventListener('submit',function(event){
  event.preventDefault();
  event.stopPropagation();

  var sName = event.target.storeName.value;
  var sLoc = event.target.location.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgSale = event.target.avgSale.value;
  console.log('working part 1');
  //var instance = new store (sName,sLoc,minCust,maxCust,avgSale);
  storesData.push(new store (sName,sLoc,minCust,maxCust,avgSale));
  newLocHandler(sName,sLoc,minCust,maxCust,avgSale);
  console.log('working');
},false);

function newLocHandler (name,location, minCustPerHr, maxCustPerHr, avgSalePerCust) {
  var table = document.getElementById('sales-table');
  //var foot = table.lastChild;//delete last row
  table.removeChild(table.lastChild);
  storesData[storesData.length - 1].populateTable();
  sumHourlySales();
  appendFoot();
};

//function calls below

appendHead();
populateStTabs();

sumHourlySales();

appendFoot();
