class Hotel{

    constructor(name, classification, regularFee, rewardsFee){
        this.name = name;
        this.classification = classification;
        this.regularFee = regularFee;
        this.rewardsFee = rewardsFee;
    }

    customerFee(customerType){
        if(customerType === "Regular"){
            return this.regularFee;
        }        
        else if(customerType === "Rewards"){
            return this.rewardsFee;
        }
        return "Type of customer invalid";
    }

    totalPrice(customerType, days){
        const fee = this.customerFee(customerType);
        let total = 0;
        days.forEach(day => {
            if(this.dayCheck(day) === "weekday"){
                total +=fee.weekDay
            }
            else if(this.dayCheck(day) === "weekend"){
                total += fee.weekEnd
            }
        })
        return total;
    }

    dayCheck(day){
        if(day >= 1 && day <= 5 )
            return "weekday";
        else if(day === 6 || day === 0)
            return "weekend";
    }
}

module.exports = Hotel;