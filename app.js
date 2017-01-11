'use strict';

var storeHours = ['6AM: ','7AM: ','8AM: ','9AM: ','10AM: ','11AM: ','12PM: ','1PM: ','2PM: ','3PM: ','4PM: ','5PM: ','6PM: ','7PM: ','8PM: '];

function store(location, minCustPerHr, maxCustPerHr, avgSalePerCust) {
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
  for (var index = 0; index < storeHours.length; index++) {
    console.log('salesPerHr loop fires - index: ', index);
    var rand = Math.floor((this.randCustPerHr() * this.avgSalePerCust));
    this.hourlySales.push(rand);
  }
  return this.hourlySales;
};

store.prototype.sumSales = function() {
  var sumHold = 0;
  for (var i = 0; i < this.hourlySales.length; i++) {
    sumHold = sumHold + this.hourlySales[i];
    console.log('for-loop fires. sumHold = ' + sumHold);
  }
  return this.totalSum.push(sumHold);
};

//vars, calls and document creation below this line

/*var storesData = [['1st and Pike', 23, 65, 6.3], why can't I construct objects from for-loop?
['SeaTac Airport', 3, 24, 1.2],
['Seattle Center', 11, 38, 3.7],
['Capitol Hill', 20, 38, 2.3],
['Alki', 2, 16, 4.6]];*/
var firstAndPike = new store('1st and Pike', 23, 65, 6.3);
var seaTac = new store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new store('Seattle Center', 11, 38, 3.7);
var capHill = new store('Capitol Hill', 20, 38, 2.3);
var alki = new store('Alki', 2, 16, 4.6);

var salesList = ['firstAndPikeSales', 'seaTacSales', 'seattleCenterSales', 'capHillSales', 'alkiSales'];
var storeLocs = [firstAndPike, seaTac, seattleCenter, capHill, alki];

//var tableHead = ['Store Location', 'Total Sales' ...]
var storeSalesList = document.getElementById('sales-list');

//for (var i = 0; i < storesData.length; i++) {   Couldn't get for loop working.... ugh
//  storeLocs[i] = new store(storesData[i][0], storesData[i][1], storesData[i][2], storesData[i][3]);
//};
//function store(location, minCustPerHr, maxCustPerHr, avgSalePerCust) <-- for reference purposes

for (var index = 0; index < storeLocs.length; index++) {
  console.log('salesPerHr call for-loop fires. index = ', index);
  storeLocs[index].salesPerHr();//calls salesPerHr, filling hourlySales with data
  storeLocs[index].sumSales();//calls sumSales, summing hourlySales.
}

for (var index = 0; index < salesList.length; index++) {//creates table row
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', salesList[index]);
  storeSalesList.appendChild(trEl);
}

for (var indexLH = 0; indexLH < salesList.length; indexLH++) {// creates store locations table head
  var storesList2 = document.getElementById(salesList[indexLH]);
  var thEl = document.createElement('th');
  thEl.textContent = storeLocs[indexLH].location;
  storesList2.appendChild(thEl);

  for (var index1 = 0; index1 < storeLocs[indexLH].hourlySales.length; index1++) { //creates table data sales output
    var storesList3 = document.getElementById(salesList[indexLH]);
    var tdEl = document.createElement('td');
    tdEl.textContent = storeLocs[indexLH].hourlySales[index1];
    storesList3.appendChild(tdEl);
  }

  //this section adds a sumSales table data element after the hourly sales data has been input
  var storesTotalList = document.getElementById(salesList[indexLH]);
  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = storeLocs[indexLH].totalSum;
  storesTotalList.appendChild(totalTdEl);
}
