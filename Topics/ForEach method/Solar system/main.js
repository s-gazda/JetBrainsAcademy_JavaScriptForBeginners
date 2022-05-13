const bonusAction = {
    value: 50
}

const saleAction = {
    value: 20
}

const friendAction = {
    value: 30
}

function getDiscount(friendAction) {   //30
    value = saleAction;  //20
    console.log(this.value);
}

["jacket"].forEach(getDiscount, bonusAction);