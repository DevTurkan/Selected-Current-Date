let current_date = new Date(),
    current_day = current_date.getDate(),
    current_month = current_date.getMonth(),
    current_year = current_date.getFullYear();


  let day_select=document.querySelector('#day_select');
  let month_select = document.querySelector('#month_select');
  let year_select = document.querySelector('#year_select');

  let full_months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',  'September',  'October',  'November',  'December'];

    for(let full_days=1; full_days<=31; full_days++){
        if(full_days==current_day){
            day_select.innerHTML +=`<option selected>${full_days}</option>`
        }
          
        else{
            day_select.innerHTML +=`<option>${full_days}</option>`
        }
    }
      
    for(months of full_months){
        if(months==full_months[current_month]){
            month_select.innerHTML +=`<option selected>${months}</option>`
        }
          
        else{
            month_select.innerHTML +=`<option>${months}</option>`
        }
    } 
     
   for(let full_years=2015; full_years<=2022; full_years++){
        if(full_years==current_year){
          year_select.innerHTML +=`<option selected>${full_years}</option>`
        }
          
        else{
            year_select.innerHTML +=`<option selected>${full_years}</option>`
        }
    }
         