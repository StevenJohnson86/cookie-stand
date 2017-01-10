'use strict';

var storeSalesList = document.getElementById('sales-list');
var salesList = ['firstAndPikeSales', 'seaTacSales', 'seattleCenterSales', 'capHillSales', 'alkiSales'];

for (var index = 0; index < salesList.length; index++) {
  var ulistEl = document.createElement('ul');
  ulistEl.setAttribute('id', salesList[index]);
  storeSalesList.appendChild(ulistEl);
}

var storeHours = ['6AM: ','7AM: ','8AM: ','9AM: ','10AM: ','11AM: ','12PM: ','1PM: ','2PM: ','3PM: ','4PM: ','5PM: ','6PM: ','7PM: ','8PM: '];

var firstAndPike = {
  location: '1st and Pike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgSalePerCust: 6.3,
  avgCustPerHr: function() {
    return (Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr);
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
    //figure out am pm and number rollover at 12 later
      this.hourlySales.push(storeHours[index] + Math.floor((this.avgCustPerHr() * this.avgSalePerCust)) + ' cookies.');
    }
    return this.hourlySales;
  }

};

var seaTac = {
  location: 'SeaTac Airport',
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgSalePerCust: 1.2,
  avgCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
    //figure out am pm and number rollover at 12 later
      this.hourlySales.push(storeHours[index] + Math.floor((this.avgCustPerHr() * this.avgSalePerCust)) + ' cookies.');
    }
    return this.hourlySales;
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustPerHr: 11,
  maxCustPerHr: 38,
  avgSalePerCust: 3.7,
  avgCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
    //figure out am pm and number rollover at 12 later
      this.hourlySales.push(storeHours[index] + Math.floor((this.avgCustPerHr() * this.avgSalePerCust)) + ' cookies.');
    }
    return this.hourlySales;
  }
};

var capHill = {
  location: 'Capital Hill',
  minCustPerHr: 20,
  maxCustPerHr: 38,
  avgSalePerCust: 2.3,
  avgCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
    //figure out am pm and number rollover at 12 later
      this.hourlySales.push(storeHours[index] + Math.floor((this.avgCustPerHr() * this.avgSalePerCust)) + ' cookies.');
    }
    return this.hourlySales;
  }
};

var alki = {
  location: 'Alki',
  minCustPerHr: 2,
  maxCustPerHr: 16,
  avgSalePerCust: 4.6,
  avgCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
    //figure out am pm and number rollover at 12 later
      this.hourlySales.push(storeHours[index] + Math.floor((this.avgCustPerHr() * this.avgSalePerCust)) + ' cookies.');
    }
    return this.hourlySales;
  }
};

var storeLocs = [firstAndPike, seaTac, seattleCenter, capHill, alki];

for (var indexLH = 0; indexLH < salesList.length; indexLH++) {// sales lists titles loop. Bad formatting, but works; should fix later
  var storesList2 = document.getElementById(salesList[indexLH]);
  var listHEl = document.createElement('lh');
  listHEl.textContent = salesList[indexLH];
  storesList2.appendChild(listHEl);
}

for (var index = 0; index < storeLocs.length; index++) {
  console.log('salesPerHr call for-loop fires. index = ', index);
  storeLocs[index].salesPerHr();//calls salesPerHr, filling hourlySales with data

  for (var index1 = 0; index1 < storeLocs[index].hourlySales.length; index1++) {
    var listId = salesList[index];
    var storesList3 = document.getElementById(listId);
    //console.log('listId = ' + listId);
    var listEl = document.createElement('li');
    listEl.textContent = storeLocs[index].hourlySales[index1];
    storesList3.appendChild(listEl);
  }
}
