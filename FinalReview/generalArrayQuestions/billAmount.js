/* eslint-disable */
function computeBill(units){
    let billAmount = 0;
    if(units <= 50){
        billAmount = units*5-0.1(unit*1.5)
    }else if(units <150){
        billAmount = 50*1.5+100*1.8+(unit-150)*2;
    }else{
        let beforeCharge = 50 * 1.5 + 100 * 1.8 (units-150)*2
        billAmount = beforeCharge + 0.1*beforeCharge;
    }
    return billAmount;
}
console.log(computeBill(120));