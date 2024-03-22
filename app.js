console.log("Har Har Mahadev");
const timerItems = document.querySelectorAll(".fig");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDay();
const currentMonth = currentDate.getMonth();
const td = currentDate.getDate();
const futureDate = new Date(currentYear, currentMonth, td + 10, 11, 50, 0);
const futureTime = futureDate.getTime();
function getRemainingTime(){
     const currentTime = new Date().getTime();
     const timeDifference = futureTime - currentTime;
     const oneDay = 24 * 60 * 60 * 1000;
     const oneHour = 60 * 60 * 1000;
     const oneMinute = 60 * 1000;
     const remDay = Math.floor((timeDifference / oneDay));
     const remHours = Math.floor((timeDifference % oneDay) / oneHour);
     console.log(remHours);
     const remMinutes = Math.floor((timeDifference % oneHour) / oneMinute);
     const remSeconds = Math.floor((timeDifference % oneMinute) / 1000);
      const values = [remDay, remHours, remMinutes, remSeconds];
     function format(item){
            if(item < 10){
               return (item = `0${item}`);
            }
            return item;
     }
     
    timerItems.forEach(function(item, index){
          item.innerHTML = format(values[index]);
    });

};
getRemainingTime();
setInterval(getRemainingTime, 1000);