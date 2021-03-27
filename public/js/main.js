const cityName=document.getElementById("cityName");
const submitBtn=document.getElementById("submitBtn");

const city_name=document.getElementById("city_name");

const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector('.middle_layer');

const getInfo =async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
   
    if(cityVal===""){
        city_name.innerText=`plz write the name before sesrch` ;
        datahide.classList.add('data_hide');

    }else
    {
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=18308f58109ce279bc32c0096be00493`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];


            // city_name.innerText=arrData[0].name;
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;


            temp_real_val.innerText=arrData[0].main.temp;


            const tempMood=arrData[0].weather[0].main;

            // condition to  check suuny or cloud 
            if(tempMood=="clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }else if(tempMood=="clouds"){
                temp_status.innerHTML=
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas  fa-rain' style='color:#a44b0be;'></i>";
            } else {
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#F9D71C;'></i>";
            }
            datahide.classList.remove('data_hide');

                

        }catch{
            city_name.innerText=`plz enter the  valid name before sesrch` ;   
            datahide.classList.add('data_hide');

        }
       
    }

}

submitBtn.addEventListener("click",getInfo);



