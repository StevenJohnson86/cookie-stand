'use strict';

var storeHours = ['6AM: ','7AM: ','8AM: ','9AM: ','10AM: ','11AM: ','12PM: ','1PM: ','2PM: ','3PM: ','4PM: ','5PM: ','6PM: ','7PM: ','8PM: '];
var salesList = ['firstAndPikeSales', 'seaTacSales', 'seattleCenterSales', 'capHillSales', 'alkiSales'];
var storeSalesList = document.getElementById('sales-list');

var firstAndPike = {
  location: '1st and Pike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgSalePerCust: 6.3,

  randCustPerHr: function() {
    return (Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr);
  },

  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
      var rand = Math.floor((this.randCustPerHr() * this.avgSalePerCust));
      this.hourlySales.push(rand);
    }
    return this.hourlySales;
  },

  totalSum: [],
  sumSales: function() {
    this.salesPerHr();
    var sumHold = 0;
    for (var i = 0; i < this.hourlySales.length; i++) {
      sumHold = sumHold + this.hourlySales[i];
      console.log('for-loop fires. sumHold = ' + sumHold);
    }
    return this.totalSum.push(sumHold);
  }
};

var seaTac = {
  location: 'SeaTac Airport',
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgSalePerCust: 1.2,
  randCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
      var rand = Math.floor((this.randCustPerHr() * this.avgSalePerCust));
      this.hourlySales.push(rand);
    }
    return this.hourlySales;
  },
  totalSum: [],
  sumSales: function() {
    this.salesPerHr();
    var sumHold = 0;
    for (var i = 0; i < this.hourlySales.length; i++) {
      sumHold = sumHold + this.hourlySales[i];
      console.log('for-loop fires. sumHold = ' + sumHold);
    }
    return this.totalSum.push(sumHold);
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustPerHr: 11,
  maxCustPerHr: 38,
  avgSalePerCust: 3.7,
  randCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
      var rand = Math.floor((this.randCustPerHr() * this.avgSalePerCust));
      this.hourlySales.push(rand);
    }
    return this.hourlySales;
  },
  totalSum: [],
  sumSales: function() {
    this.salesPerHr();
    var sumHold = 0;
    for (var i = 0; i < this.hourlySales.length; i++) {
      sumHold = sumHold + this.hourlySales[i];
      console.log('for-loop fires. sumHold = ' + sumHold);
    }
    return this.totalSum.push(sumHold);
  }
};

var capHill = {
  location: 'Capital Hill',
  minCustPerHr: 20,
  maxCustPerHr: 38,
  avgSalePerCust: 2.3,
  randCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
      var rand = Math.floor((this.randCustPerHr() * this.avgSalePerCust));
      this.hourlySales.push(rand);
    }
    return this.hourlySales;
  },
  totalSum: [],
  sumSales: function() {
    this.salesPerHr();
    var sumHold = 0;
    for (var i = 0; i < this.hourlySales.length; i++) {
      sumHold = sumHold + this.hourlySales[i];
      console.log('for-loop fires. sumHold = ' + sumHold);
    }
    return this.totalSum.push(sumHold);
  }
};

var alki = {
  location: 'Alki',
  minCustPerHr: 2,
  maxCustPerHr: 16,
  avgSalePerCust: 4.6,
  randCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
  },
  hourlySales: [],
  salesPerHr: function() {
    this.hourlySales = [];
    for (var index = 0; index < storeHours.length; index++) {
      console.log('salesPerHr loop fires - index: ', index);
      var rand = Math.floor((this.randCustPerHr() * this.avgSalePerCust));
      this.hourlySales.push(rand);
    }
    return this.hourlySales;
  },
  totalSum: [],
  sumSales: function() {
    this.salesPerHr();
    var sumHold = 0;
    for (var i = 0; i < this.hourlySales.length; i++) {
      sumHold = sumHold + this.hourlySales[i];
      console.log('for-loop fires. sumHold = ' + sumHold);
    }
    return this.totalSum.push(sumHold);
  }
};

//calls and document creation below this line

var storeLocs = [firstAndPike, seaTac, seattleCenter, capHill, alki]; //cannot move this var until object literals created

for (var index = 0; index < storeLocs.length; index++) {
  console.log('sumSales call for-loop fires. index = ', index);
  storeLocs[index].sumSales();//calls sumSales, summing hourlySales.
}

for (var index = 0; index < salesList.length; index++) {
  var ulistEl = document.createElement('ul');
  ulistEl.setAttribute('id', salesList[index]);
  storeSalesList.appendChild(ulistEl);
}

for (var indexLH = 0; indexLH < salesList.length; indexLH++) {// sales lists titles loop.
  var storesList2 = document.getElementById(salesList[indexLH]);
  var listHEl = document.createElement('lh');
  listHEl.textContent = storeLocs[indexLH].location;
  storesList2.appendChild(listHEl);

  for (var index1 = 0; index1 < storeLocs[indexLH].hourlySales.length; index1++) { //list item for-loop
    var storesList3 = document.getElementById(salesList[indexLH]);
    var listEl = document.createElement('li');
    listEl.textContent = storeHours[index1] + storeLocs[indexLH].hourlySales[index1] + ' cookies';
    storesList3.appendChild(listEl);
  }

//this section adds a sumSales list element after the hourly sales data has been input
  var storesTotalList = document.getElementById(salesList[indexLH]);
  var listTotalEl = document.createElement('li');
  listTotalEl.textContent = 'Total: ' + storeLocs[indexLH].totalSum + ' cookies';
  storesTotalList.appendChild(listTotalEl);
}
