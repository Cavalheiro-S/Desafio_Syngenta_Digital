const Hotel = require('./Hotel');

function getCheapestHotel (input) { //DO NOT change the function's name.
    const [customerType, ...dates]= splitInput(input);
    const formatedDates = dates.map(date => getWeekDay(date));
    const hotels = addHotels();
    const cheapestHotel = hotels.reduce((previousHotel,currentHotel) => {
        if(currentHotel.stayTotalPrice(customerType, formatedDates) <= previousHotel.stayTotalPrice(customerType,formatedDates)){
            if(currentHotel.rating > previousHotel.rating){
                previousHotel = currentHotel;
            }
        }
        return previousHotel;
    })
    return cheapestHotel.name
}

function addHotels(){
    const Hotel1 = new Hotel("Lakewood",3,
        {weekDay:110,weekEnd:90}, 
        {weekDay:80,weekEnd:80})

    const Hotel2 = new Hotel("Bridgewood",4,
        {weekDay:160,weekEnd:60},
        {weekDay:110,weekEnd:50})

    const Hotel3 = new Hotel("Ridgewood",5,
        {weekDay:220,weekEnd:150},
        {weekDay:100,weekEnd:40})
    return [Hotel1,Hotel2,Hotel3];
}

function splitInput(input){
    const inputs = input.split(/[:,]/);
    const inputsFormated = inputs.map(info => info.trim());
    return inputsFormated
}

function getWeekDay(date){
    return new Date(date).getDay()
}

exports.getCheapestHotel = getCheapestHotel
