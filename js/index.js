let pantsMinusBtn = document.getElementById('pantsminusbtn');
function getMinus ()
{
    if (parseInt(pantsQty.innerHTML)>0) {
    let qty = parseInt(pantsQty.innerHTML)-1;
    pantsQty.innerHTML = qty;
    let pQty = pantsQty.innerHTML;
    let unit = parseFloat(unitP.innerHTML);
    let extendedPrice = (qty*unit).toFixed(2);
    extendedP.innerHTML = extendedPrice;
    }
};
pantsMinusBtn.addEventListener('click', getMinus);

let pantsPlusBtn = document.getElementById('pantsplusbtn');
function getPlus ()
{
    let qty = parseInt(pantsQty.innerHTML)+1;
    pantsQty.innerHTML = qty;
    let pQty = pantsQty.innerHTML;
    let unit = parseFloat(unitP.innerHTML);
    let extendedPrice = (qty*unit).toFixed(2);
    extendedP.innerHTML = extendedPrice;
};
pantsPlusBtn.addEventListener('click', getPlus);


let srtMinusBtn = document.getElementById('srtminusbtn');
function getMinusS ()
{
    if (parseInt(shirtQty.innerHTML)>0) {
    let qty = parseInt(shirtQty.innerHTML)-1;
    shirtQty.innerHTML = qty;
    let pQty = shirtQty.innerHTML;
    let unit = parseFloat(unitS.innerHTML);
    let extendedPrice = (qty*unit).toFixed(2);
    extendedS.innerHTML = extendedPrice;
    }
};
srtMinusBtn.addEventListener('click', getMinusS);

let srtPlusBtn = document.getElementById('srtplusbtn');
function getPlusS ()
{
    let qty = parseInt(shirtQty.innerHTML)+1;
    shirtQty.innerHTML = qty;
    let pQty = shirtQty.innerHTML;
    let unit = parseFloat(unitS.innerHTML);
    let extendedPrice = (qty*unit).toFixed(2);
    extendedS.innerHTML = extendedPrice;
};
srtPlusBtn.addEventListener('click', getPlusS);


let calButton = document.getElementById('calculate');
function getPrice ()
{
    let subTotal = (parseFloat(extendedP.innerHTML)+parseFloat(extendedS.innerHTML)).toFixed(2);
    subtotal.innerHTML = subTotal;
    let taxCal = (parseFloat(subtotal.innerHTML)*0.13).toFixed(2);
    tax.innerHTML = taxCal;
    let totalCal = (parseFloat(subtotal.innerHTML)+parseFloat(tax.innerHTML)).toFixed(2);
    total.innerHTML = totalCal;
}
calButton.addEventListener('click', getPrice);


let promoBtn = document.getElementById('promo');
function getDiscount ()
{
    let input = document.getElementById('coupon').value;
    if (input == 'NOTAX') {
        let subTotal = (parseFloat(extendedP.innerHTML)+parseFloat(extendedS.innerHTML)).toFixed(2);
        subtotal.innerHTML = subTotal;
        tax.innerHTML = 0;
        let totalCal = (parseFloat(subtotal.innerHTML)+parseFloat(tax.innerHTML)).toFixed(2);
        total.innerHTML = totalCal;
    }
    else if (input == 'FIFTYFIFTY') {
        let subTotal = (parseFloat(extendedP.innerHTML)+parseFloat(extendedS.innerHTML)).toFixed(2);
        subtotal.innerHTML = subTotal;
        let taxCal = (parseFloat(subtotal.innerHTML)*0.13).toFixed(2);
        tax.innerHTML = taxCal;
        let totalCal = (parseFloat(subtotal.innerHTML)+parseFloat(tax.innerHTML)).toFixed(2);
        total.innerHTML = (totalCal)*0.5;
    }
    else {
        let subTotal = (parseFloat(extendedP.innerHTML)+parseFloat(extendedS.innerHTML)).toFixed(2);
        subtotal.innerHTML = subTotal;
        let taxCal = (parseFloat(subtotal.innerHTML)*0.13).toFixed(2);
        tax.innerHTML = taxCal;
        let totalCal = (parseFloat(subtotal.innerHTML)+parseFloat(tax.innerHTML)).toFixed(2);
        total.innerHTML = totalCal;
    }
}
promoBtn.addEventListener('click', getDiscount);