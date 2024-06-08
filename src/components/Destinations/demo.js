function dayOfProgrammer(year) {
    const num= 256
   if(year>1917){
       if(year/400===0 ||( (year%4===0) && year%100 !== 0)){
            const date = new Date(year, 1, 29);
            date.setDate(num);
                 const day = date.getDate().toString().padStart(2, '0');
                 const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
                 const year = date.getFullYear();
                 const formattedDate = `${day}.${month}.${year}`;
                 return formattedDate
       }
       else{
             const date = new Date(year);
            if(year==1918){
                num+=13
                date.setDate(num);
                 const day = date.getDate().toString().padStart(2, '0');
                 const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
                 const year = date.getFullYear();
                 const formattedDate = `${day}.${month}.${year}`;
                 return formattedDate
            }
            date.setDate(num);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const formattedDate = `${day}.${month}.${year}`;
            return formattedDate
       }
   }
     else{
           if(year%4===0){
            const date = new Date(year, 1, 29);
               date.setDate(num)
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const formattedDate = `${day}.${month}.${year}`;
            return formattedDate
           }
           else{
            const date = new Date(year);
            date.setDate(num)
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const formattedDate = `${day}.${month}.${year}`;
            return formattedDate
           }
       }
   // Write your code here

}

const datee=dayOfProgrammer(2017)
console.log(datee)