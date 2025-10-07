const mongoose = require('mongoose')

//1 schema creation
const carSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true
    },

    make: {
        type:String,
        required:true
    },
    model: {
        type:String,
        required:true
    },

    "barrels08":{"$numberDouble":"11.900400000000001"},
    "barrelsa08":{"$numberInt":"0"},
    "charge120":{"$numberInt":"0"},
    "charge240":{"$numberInt":"0"},
    "city08":{"$numberInt":"22"},
    "city08u":{"$numberDouble":"22.1096"},
    "citya08":{"$numberInt":"0"},
    "citya08u":{"$numberInt":"0"},
    "citycd":{"$numberInt":"0"},
    "citye":{"$numberInt":"0"},
    "cityuf":{"$numberInt":"0"},
    "co2":{"$numberInt":"357"},
    "co2a":{"$numberInt":"-1"},
    "co2tailpipeagpm":{"$numberInt":"0"},
    "co2tailpipegpm":{"$numberInt":"357"},
    "comb08":{"$numberInt":"25"},
    "comb08u":{"$numberDouble":"24.887"},
    "comba08":{"$numberInt":"0"},
    "comba08u":{"$numberInt":"0"},
    "combe":{"$numberInt":"0"},
    "combinedcd":{"$numberInt":"0"},
    "combineduf":{"$numberInt":"0"},
    "cylinders":{"$numberInt":"4"},"displ":{"$numberInt":"2"},"drive":"Front-Wheel Drive","engid":"174","eng_dscr":["SIDI"],"fescore":{"$numberInt":"5"},"fuelcost08":{"$numberInt":"2150"},"fuelcosta08":{"$numberInt":"0"},"fueltype":"Regular","fueltype1":"Regular Gasoline","ghgscore":{"$numberInt":"5"},"ghgscorea":null,"highway08":{"$numberInt":"29"},"highway08u":{"$numberDouble":"29.401"},"highwaya08":{"$numberInt":"0"},"highwaya08u":{"$numberInt":"0"},"highwaycd":{"$numberInt":"0"},"highwaye":{"$numberInt":"0"},"highwayuf":{"$numberInt":"0"},"hlv":{"$numberInt":"0"},"hpv":{"$numberInt":"0"},"id":"37359","lv2":{"$numberInt":"0"},"lv4":{"$numberInt":"0"},"mpgdata":"Y","phevblended":"false","pv2":{"$numberInt":"0"},"pv4":{"$numberInt":"0"},"range":{"$numberInt":"0"},"rangecity":{"$numberInt":"0"},"rangecitya":{"$numberInt":"0"},"rangehwy":{"$numberInt":"0"},"rangehwya":{"$numberInt":"0"},"trany":"Automatic (S6)","ucity":{"$numberDouble":"28.2"},"ucitya":{"$numberInt":"0"},"uhighway":{"$numberInt":"42"},"uhighwaya":{"$numberInt":"0"},"vclass":"Small Sport Utility Vehicle 2WD","year":"2017","yousavespend":{"$numberInt":"-1250"},"guzzler":null,"trans_dscr":null,"tcharger":"T","scharger":null,"atvtype":null,"fueltype2":null,"rangea":null,"evmotor":null,"mfrcode":"FMX","c240dscr":null,"charge240b":{"$numberInt":"0"},"c240bdscr":null,"createdon":"2016-04-12","modifiedon":"2016-12-02","startstop":"Y","phevcity":{"$numberInt":"0"},"phevhwy":{"$numberInt":"0"},"phevcomb":{"$numberInt":"0"},
    "basemodel":"Escape"},
)



const cars = mongoose.model('cars',carSchema)
module.exports=cars