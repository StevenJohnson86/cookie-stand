'use strict';

var firstAndPike = new store('firstAndPike', '1st and Pike', 23, 65, 6.3);
var seaTac = new store('seaTac', 'SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new store('seattleCenter', 'Seattle Center', 11, 38, 3.7);
var capHill = new store('capHill', 'Capitol Hill', 20, 38, 2.3);
var alki = new store('alki', 'Alki', 2, 16, 4.6);

var tableHead = ['Store Location','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','Daily Location Total'];
var hourlySalesSums = [];
var sumTotal = 0;

var storeTable = document.getElementById('sales-list');

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

  var tableLoc = document.getElementById('sales-list');

  var trEl = document.createElement('tr'); //row creator
  trEl.setAttribute('id', this.name);
  tableLoc.appendChild(trEl);

  var locHead = document.getElementById(this.name); // creates store locations table head
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  locHead.appendChild(thEl);

  for (var index = 0; index < this.hourlySales.length; index++) { //creates table data sales output
    var storeRow = document.getElementById(this.name);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[index];
    storeRow.appendChild(tdEl);
  }

  var storeTotal = document.getElementById(this.name); //imputs salesSum for store
  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.totalSum;
  storeTotal.appendChild(totalTdEl);
};

/*var storesData = [['1st and Pike', 23, 65, 6.3], why can't I construct objects from for-loop?
['SeaTac Airport', 3, 24, 1.2],
['Seattle Center', 11, 38, 3.7],
['Capitol Hill', 20, 38, 2.3],
['Alki', 2, 16, 4.6]];*/

var storeLocs = [firstAndPike, seaTac, seattleCenter, capHill, alki];

//for (var i = 0; i < storesData.length; i++) {   Couldn't get for loop working.... ugh
//  storeLocs[i] = new store(storesData[i][0], storesData[i][1], storesData[i][2], storesData[i][3]);
//};
//function store(location, minCustPerHr, maxCustPerHr, avgSalePerCust) <-- for reference purposes

function populateStTabs(){
  for (var index = 0; index < storeLocs.length; index++) {
    console.log('salesPerHr call for-loop fires. index = ', index);
    storeLocs[index].populateTable();//creates row in table
  }
}

function sumHourlySales() {
  for (var index = 0; index < (tableHead.length - 2); index++) { //sums sales by hour across all store locations, pushes to array hourlySalesSums
    var sumHr = 0;

    for (var i = 0; i < storeLocs.length; i++) {
      sumHr = sumHr + storeLocs[i].hourlySales[index];
      console.log('for-loop fires. sumHr = ' + sumHr);
    }
    hourlySalesSums.push(sumHr);
  }
}

function sumTotalSales() {

  for (var i = 0; i < hourlySalesSums.length; i++) {
    sumTotal = sumTotal + hourlySalesSums[i];
    console.log('for-loop fires. sumHr = ' + sumTotal);
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

//function calls below

appendHead();
populateStTabs();
sumHourlySales();
sumTotalSales();
appendFoot();
