"use strict";
exports.__esModule = true;
var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    var totalPayment = 0;
    var deduction = price * (discount / 100);
    var discountPayment = price - deduction;
    return isInstallment
        ? (totalPayment = discountPayment / months)
        : (totalPayment = discountPayment);
};
totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
