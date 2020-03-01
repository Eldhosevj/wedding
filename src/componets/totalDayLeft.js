
function findTottalDayToMarriage(){
    
    var date=new Date()
    
   
    var month=date.getMonth()+1

    let array=[31,29,31,5]


function deletUnwantedMonth(month){

let deletingDayCalcution=0
let vistingMonth=month

if(vistingMonth===1){
return

}

else if(vistingMonth===2){

    deletingDayCalcution=1

    array.splice(0,deletingDayCalcution)

}
else if(vistingMonth===3){

    deletingDayCalcution=2

    array.splice(0,deletingDayCalcution)

}

else{

    deletingDayCalcution=3

    array.splice(0,deletingDayCalcution)


}

}



    deletUnwantedMonth(month)    
    var todaysDate=date.getDate() 

    
let thisMonthRemainingDay=array[0]-todaysDate
let totalDayLeftToMarriage=0

if(array.length!==1){




for(var i=0;i<array.length;i++){
if(i===0){
    totalDayLeftToMarriage=thisMonthRemainingDay
}
else{
    totalDayLeftToMarriage=totalDayLeftToMarriage+array[i]

}



}
}
else if(array.length===1){

    totalDayLeftToMarriage=thisMonthRemainingDay
return totalDayLeftToMarriage
}

return totalDayLeftToMarriage
}
export default findTottalDayToMarriage

