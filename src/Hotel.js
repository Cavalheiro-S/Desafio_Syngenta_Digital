class Hotel{

    constructor(name, rating, regularFee, rewardsFee){
        this.name = name;
        this.rating = rating;
        this.regularFee = regularFee;
        this.rewardsFee = rewardsFee;
    }

    stayTotalPrice(customerType, days){
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

    customerFee(customerType){
        if(customerType === "Regular"){
            return this.regularFee;
        }        
        else if(customerType === "Rewards"){
            return this.rewardsFee;
        }
        return "Type of customer invalid";
    }

    dayCheck(day){
        if(day >= 1 && day <= 5 )
            return "weekday";
        else if(day === 6 || day === 0)
            return "weekend";
    }
}

module.exports = Hotel;