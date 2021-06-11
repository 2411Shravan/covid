
const mainSelector = document.getElementById('main');
const getCountry = document.getElementById('country-search');
const getLiveofCountry = document.getElementById('live-search');
function toggleSearch(){
    var toggleEl = document.getElementById('toggleSe');
    if (toggleEl.style.display === "none") {
        toggleEl.style.display = "block";
      } else {
        toggleEl.style.display = "none";
      }


}
function toggleData(){
    var toggleEl = document.getElementById('toggleDa');
    if (toggleEl.style.display === "none") {
        toggleEl.style.display = "block";
      } else {
        toggleEl.style.display = "none";
      }


}
async function getNews(){
    const respe = await fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=covid&safeSearch=Off&textFormat=Raw&freshness=Day", {
        "method": "GET",
        "headers": {
            "x-bingapis-sdk": "true",
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
        }
    });
    const respDatae = await respe.json();

    console.log(respDatae);
    displayNews(respDatae);
    //respDatae.value.forEach(respo=>{
       // console.log(respo);
   // });
    //respDatae.forEach((respo)=>{
        //console.log(respo.description);
    //})

    
}
function displayNews(newsData){
    mainSelector.innerHTML=" ";
    
   //var resu = list(newsData);
 //console.log(typeof (resu));
    newsData.value.forEach(news=>{
        
        const{datePublished,description, image,name,provider,url}=news;
        
        const newEl = document.createElement('div');
        newEl.classList.add('container');
        newEl.innerHTML=`
        <div class="news-body bg-dark text-white">
        <h4 class="news-source ">Source -${provider[0].name} </h4>
          
            
            <h5 class="news-publish">${datePublished} </h5>
          
          
          <h5 class="news-title">${name}</h5>
          <div class="news-image">
              <img src="${image.thumbnail.contentUrl}" width="150" height="150"/>
          </div>
          <h6 class="news-content">${description}</h6>
          <h6 class="news-link" ><a href="${url}" target="_blank">Read More here....</a></h6>
          </div>
        `;
       console.log(news);
       mainSelector.appendChild(newEl);

    });
    //const buttonDiv = document.createElement('div');
    //buttonDiv.className+='text-center';
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./data.html" class="text-white" >Go Back</a>    
    `;
    //buttonDiv.innerHTML = newEle;
    mainSelector.appendChild(newEle);
}

async function DailyReport(){

    const resp = await fetch("https://api.covid19api.com/summary");
    const respData = await resp.json();
    console.log(respData);
    ShowDailyReport(respData);
  
}


function ShowDailyReport(takeDailyData){
     const {Global} = takeDailyData;
    
     mainSelector.innerHTML=" ";
     console.log(Global.Date);
     console.log(Global.NewConfirmed);
     console.log(Global.NewDeaths);
     console.log(Global.NewRecovered);
     const firstEle = document.createElement('div');
     firstEle.classList.add('content');
     firstEle.innerHTML =`
            <div class="display-message">
                <h5 style="font-family: 'Merriweather', serif;">This data complies to the <span class="text-dark" style="text-decoration: underline;
                font-style: oblique;font-weight:bold;">newly</span> diseased people 
                    around the world(Data is given frequently as API updates).
                </br>Get datas on daily basis(of current day[Time set to GMT]).</h5>
            </div>
            <div class="col">
            <div class="card shadow-sm text-dark">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center" style="font-family: 'Merriweather', serif; font-size:30px;font-weight:bolder;">Total World Data</h3>
                </div>
                <div class="card-body" >
                
                <h3>Today's Confirmed : ${Global.NewConfirmed}</h3>
                <h3>Today's Deaths : ${Global.NewDeaths}</h3>
                <h3>Today's Recovered : ${Global.NewRecovered}</h3>
                <h3>Updated on : ${Global.Date}</h3>
                
                

                </div>
            </div>
        </div>
     
     `;
     mainSelector.appendChild(firstEle);
     const newEle = document.createElement('button');
     newEle.className+='btn btn-lg btn-dark';
     newEle.style.marginLeft='30px';
     newEle.innerHTML =`
     <a href="./data.html" class="text-white" >Go Back</a>    
     `;
     //buttonDiv.innerHTML = newEle;
     mainSelector.appendChild(newEle);
}


async function TotalReports(){
    const resp = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    });
    const respData = await resp.json();
    console.log(respData);
    ShowTotalReport(respData);
}


function ShowTotalReport(containsTotalReport) {
    //console.log(containsTotalReport);
    const {world_total,statistic_taken_at}= containsTotalReport;
    mainSelector.innerHTML=" ";
    console.log(world_total);
    console.log(world_total.total_cases);
    console.log(world_total.total_recovered);
    console.log(world_total.TotalDeaths);
    const secondEle = document.createElement('div');
    secondEle.classList.add('content');
    secondEle.innerHTML =`
           <div class="display-message">
               <h5 style="font-family: 'Merriweather', serif;">This data complies to the <span class="text-dark" style="text-decoration: underline;
               font-style: oblique;font-weight:bold;">total</span> diseased people 
                   around the world(Data is given frequently as API updates).
               </br>Get datas on daily basis(of current day[Time set to GMT]).</h5>
           </div>
           <div class="col">
            <div class="card shadow-sm text-dark">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center">Total World Data</h3>
                </div>
                <div class="card-body" >
                <h3>Total Cases : ${world_total.total_cases}</h3>
                <h3>Total Recovered : ${world_total.total_recovered}</h3>
                <h3>Total Deaths : ${world_total.total_deaths}</h3>
                
                

                </div>
            </div>
        </div>
    
    `;
    mainSelector.appendChild(secondEle);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./data.html" class="text-white" >Go Back</a>    
    `;
    //buttonDiv.innerHTML = newEle;
    mainSelector.appendChild(newEle);
}

async function LatestData() {
    const resp = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    });
    const respData = await resp.json();
    console.log(respData);
    ShowLatestData(respData);

}



function ShowLatestData(latestData){
    mainSelector.innerHTML=" ";
    
 const{countries_stat,statistic_taken_at} = latestData;
 const divRow = document.createElement('div');
 divRow.classList.add('row');
    countries_stat.forEach(country=>{
        console.log(country.country_name);
        console.log(country.cases);
        console.log(country.total_recovered);
        console.log(country.deaths);
        
            divRow.innerHTML+=`
            <div class="col-md-3">
                    <div class="card mb-3 shadow-sm">
                    <div class="card-body bg-dark text-white">
                        
                        
                            <div class="countr-name">
                                <h6 class=" ">Country  - ${country.country_name}</h6>
                            </div>
                            <div class="countr-cases">
                            <h6 class=" ">Total cases  - ${country.cases}</h6>
                        </div>
                        <div class="countr-recovery">
                            <h6 class=" ">Total recovery  - ${country.total_recovered}</h6>
                        </div>
                        <div class="countr-deaths">
                            <h6 class=" ">Total deaths  - ${country.deaths}</h6>
                        </div>
                        <div class="countr-updated">
                            <h6 class=" ">Updated on  - ${statistic_taken_at}</h6>
                        </div>
                        

                    
                    </div>
                    </div>
                </div>
                
`;

    });
    mainSelector.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./data.html" class="text-white" >Go Back</a>    
    `;
    //buttonDiv.innerHTML = newEle;
    mainSelector.appendChild(newEle);
}

async function DailyReportofCountries(){
    const resp = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    });
    const respData = await resp.json();
    console.log(respData);
    showDailyReportofCountries(respData);
}

function showDailyReportofCountries(getDailyReportofAllCountries){
    mainSelector.innerHTML=" ";
    
 const{countries_stat,statistic_taken_at} = getDailyReportofAllCountries;
 const divRow = document.createElement('div');
 divRow.classList.add('row');
    countries_stat.forEach(country=>{
        console.log(country.country_name);
        console.log(country.new_cases);
        console.log(country.new_deaths);
        console.log(country.deaths);
        
            divRow.innerHTML+=`
            <div class="col-md-3">
                    <div class="card mb-3 shadow-sm">
                    <div class="card-body bg-dark text-white">
                        
                        
                            <div class="countr-name">
                                <h6 class=" ">Country  - ${country.country_name}</h6>
                            </div>
                            <div class="countr-cases">
                            <h6 class=" ">New cases  - ${country.new_cases}</h6>
                        </div>
                        <div class="countr-recovery">
                            <h6 class=" ">Critical cases  - ${country.serious_critical}</h6>
                        </div>
                        <div class="countr-deaths">
                            <h6 class=" ">New deaths  - ${country.new_deaths}</h6>
                        </div>
                        <div class="countr-updated">
                            <h6 class=" ">Updated on  - ${statistic_taken_at}</h6>
                        </div>
                        

                    
                    </div>
                    </div>
                </div>
                
`;

    });
    mainSelector.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./data.html" class="text-white" >Go Back</a>    
    `;
    //buttonDiv.innerHTML = newEle;
    mainSelector.appendChild(newEle);
}




async function seeCountryFullData(){
    const actualValue=getCountry.value;
    const firstHalf= "https://api.covid19api.com/total/country/";
    const secondHalf= actualValue;
    const apiurl = firstHalf + secondHalf;
    const getApiData = await fetch(apiurl);
    const recieveJson = await getApiData.json();
    console.log(recieveJson); 
    showCountriesFullData(recieveJson);

}


function showCountriesFullData(paramData) {
    mainSelector.innerHTML=" ";
    
    const{Active,Confirmed,Country,Date,Deaths,Lat,Lon,Recovered} = paramData;
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    console.log(paramData.length);
    console.log(paramData[25].Active);
    console.log(paramData[25].Country);
       for(var i=0;i<paramData.length;i++){
           console.log(paramData[i].Active);
           console.log(paramData[i].Confirmed);
           console.log(paramData[i].Country);
           console.log(paramData[i].Date);
           console.log(paramData[i].Deaths);
           console.log(paramData[i].Lat);
           console.log(paramData[i].Lon);
           console.log(paramData[i].Recovered);
           
               divRow.innerHTML+=`
               <div class="col-md-3">
                       <div class="card mb-3 shadow-sm">
                       <div class="card-body bg-dark text-white">
                           
                           
                            <div class="countr-name">
                                <h6 class=" ">Country  - ${paramData[i].Country}</h6>
                            </div>
                            <div class="countr-recovery">
                               <h6 class=" ">Date - ${paramData[i].Date}</h6>
                           </div>
                            <div class="countr-cases">
                                <h6 class=" ">Total cases till date - ${paramData[i].Confirmed}</h6>
                           </div>
                           <div class="countr-recovery">
                               <h6 class=" ">Active cases till date - ${paramData[i].Active}</h6>
                           </div>
                           <div class="countr-name">
                                <h6 class=" ">Recovered till date - ${paramData[i].Recovered}</h6>
                            </div>
                           <div class="countr-deaths">
                               <h6 class=" ">Total deaths till date - ${paramData[i].Deaths}</h6>
                           </div>
                       </div>
                       </div>
                   </div>
                   
   `;
   
       }
      mainSelector.appendChild(divRow);
       const newEle = document.createElement('button');
       newEle.className+='btn btn-lg btn-dark';
       newEle.style.marginLeft='30px';
       newEle.innerHTML =`
       <a href="./data.html" class="text-white" >Go Back</a>    
       `;
       
       mainSelector.appendChild(newEle);
}


async function liveSearchofCountry(){
  
    const nativeAPI = "https://api.covid19api.com/country/south-africa/status/confirmed/live?from=2021-05-30T00:00:00Z&to=2021-05-31T00:00:00Z";
    const firstHalfAPI = "https://api.covid19api.com/country/";
    const secondHalfAPI= "/status/confirmed/live?from=";
    const thirdHalfAPI = "T00:00:00Z&to=";
    const fourthHalfAPI = "T00:00:00Z";
    const currentTime = retCurrentTime();
    const yesterdayTimeData = yesterdayTime();
    const countryName = getLiveofCountry.value;
    const completeAPI = firstHalfAPI+countryName+secondHalfAPI+yesterdayTimeData+thirdHalfAPI+currentTime+fourthHalfAPI;
    console.log(completeAPI);

    const comAPI = await fetch(completeAPI);
    const responseDataAPI = await comAPI.json();
    console.log(responseDataAPI);
    showLiveDataOfCountry(responseDataAPI)



}


function showLiveDataOfCountry(getResponseDataAPI) {


    mainSelector.innerHTML=" ";

    const{Cases,Country,CountryCode,Lat,Lon,Status} = getResponseDataAPI;
    console.log(getResponseDataAPI.length);
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';
    for(var i=0;i<getResponseDataAPI.length;i++){
        console.log(getResponseDataAPI[i].Country);
        console.log(getResponseDataAPI[i].Cases);
        console.log(getResponseDataAPI[i].CountryCode);
        console.log(getResponseDataAPI[i].Lat);
        console.log(getResponseDataAPI[i].Lon);
        console.log(getResponseDataAPI[i].Status);
        divRow.innerHTML+=`
        <div class="col-md-3" style="padding-top:50px;">
                <div class="card mb-3  shadow-sm">
                <div class="card-body bg-dark text-white liveData">
                    
                    
                     <div class="countr-name">
                         <h6 class=" ">Country Name - ${getResponseDataAPI[i].Country}</h6>
                     </div>
                     <div class="countr-recovery">
                        <h6 class=" ">Country Code - ${getResponseDataAPI[i].CountryCode}</h6>
                    </div>
                     <div class="countr-cases">
                         <h6 class=" ">Cases - ${getResponseDataAPI[i].Cases}</h6>
                    </div>
                    <div class="countr-recovery">
                        <h6 class=" ">Activity Status - ${getResponseDataAPI[i].Status}</h6>
                    </div>
                    <div class="countr-name">
                         <h6 class=" ">Geographical Latitude - ${getResponseDataAPI[i].Lat}</h6>
                     </div>
                    <div class="countr-deaths">
                        <h6 class=" ">Geographical Longitude - ${getResponseDataAPI[i].Lon}</h6>
                    </div>
                </div>
                </div>
            </div>
            
`;


    }
    const rec = document.createElement('div');
    rec.className+= 'blobs-container text-center';
    rec.style.marginLeft='150px';
    rec.style.paddingTop='50px';
    rec.innerHTML=`
    <div class="blob green"><h4 style="font-weight: bold;">LIVE</h4></div>
    `;

    mainSelector.appendChild(rec);
    mainSelector.appendChild(divRow);
       const newEle = document.createElement('button');
       newEle.className+='btn btn-lg btn-dark';
       newEle.style.marginLeft='30px';
       newEle.style.marginTop='50px';
       newEle.innerHTML =`
       <a href="./data.html" class="text-white" >Go Back</a>    
       `;
       
       mainSelector.appendChild(newEle);


}


function retCurrentTime(){
    today = new Date();
    yesterday = new Date(today);
    yesterday.setDate(today.getDate() );

    var dd = yesterday.getDate();
    var mm = yesterday.getMonth()+1;
    var yyyy = yesterday.getFullYear();

    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    CurrentDayString = yyyy+'-'+mm+'-'+dd;

    console.log(CurrentDayString);
    return CurrentDayString;
}


function yesterdayTime(){
    today = new Date();
    yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    var dd = yesterday.getDate();
    var mm = yesterday.getMonth()+1;
    var yyyy = yesterday.getFullYear();

    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    yesterdayString = yyyy+'-'+mm+'-'+ dd;

    console.log(yesterdayString);
    return yesterdayString;
}

async function getDataStateWise(){
    const natAPI = await fetch("https://api.covid19india.org/data.json");

    const natjson = await natAPI.json();
    console.log(natjson);
    showDataStateWise(natjson);
}

function showDataStateWise(natjson) {
    
    
    mainSelector.innerHTML=" ";
    const {statewise}=natjson;
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';

    statewise.forEach(example=>{
        console.log(example.state);
        console.log(example.statecode);
        console.log(example.confirmed);
        console.log(example.active);
        console.log(example.recovered);
        console.log(example.deaths);
        console.log(example.lastupdatedtime);
        divRow.innerHTML+=`
        <div class="col-md-3" style="padding-top:50px;">
                <div class="card mb-3  shadow-sm">
                <div class="card-body bg-dark text-white">
                    
                    
                     <div class="countr-name">
                         <h6 class=" ">State Name - ${example.state}</h6>
                     </div>
                     <div class="countr-recovery">
                        <h6 class=" ">State Code - ${example.statecode}</h6>
                    </div>
                     <div class="countr-cases">
                         <h6 class=" ">Total Confirmed - ${example.confirmed}</h6>
                    </div>
                    <div class="countr-recovery">
                        <h6 class=" ">Active Cases - ${example.active}</h6>
                    </div>
                    <div class="countr-name">
                         <h6 class=" ">Total Recovered - ${example.recovered}</h6>
                     </div>
                    <div class="countr-deaths">
                        <h6 class=" ">Total Deaths - ${example.deaths}</h6>
                    </div>
                    <div class="countr-deaths">
                        <h6 class=" ">Updated On - ${example.lastupdatedtime}</h6>
                    </div>
                </div>
                </div>
            </div>
            
`;
    });
    mainSelector.appendChild(divRow);
       const newEle = document.createElement('button');
       newEle.className+='btn btn-lg btn-dark';
       newEle.style.marginLeft='30px';
       newEle.innerHTML =`
       <a href="./data.html" class="text-white" >Go Back</a>    
       `;
       
       mainSelector.appendChild(newEle);

}



async function getDistrictWise(){
    const getDist = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    });


    const distData = await getDist.json();
    console.log(distData);
    showDistrictWise(distData);
} 


function showDistrictWise(diData){

    mainSelector.innerHTML=" ";
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';

    const{state_wise}= diData;
    console.log(state_wise);
    let states = Object.keys(state_wise);

   for(let i=0; i< states.length; i++) {
       console.log(states[i]);
       let uptime= state_wise[states[i]].lastupdatedtime;
       console.log(uptime);
      let result = state_wise[states[i]].district;
        let districts = Object.keys(result);
       for(let j =0; j< districts.length; j++) {
           console.log(districts[j]);
           let distRes = result[districts[j]];
           console.log(i, states[i], j, districts[j], distRes);
           divRow.innerHTML+=`
           <div class="col-md-3" style="padding-top:50px;">
                   <div class="card mb-3  shadow-sm">
                   <div class="card-body bg-dark text-white">
                       
                       
                        <div class="countr-name">
                            <h6 class=" ">State Name - ${states[i]}</h6>
                        </div>
                        <div class="countr-recovery">
                           <h6 class=" ">District Name - ${districts[j]}</h6>
                       </div>
                        <div class="countr-cases">
                            <h6 class=" ">Total Cases Confirmed - ${distRes.confirmed}</h6>
                       </div>
                       <div class="countr-recovery">
                           <h6 class=" ">Active Cases - ${distRes.active}</h6>
                       </div>
                       <div class="countr-name">
                            <h6 class=" ">Deceased - ${distRes.deceased}</h6>
                        </div>
                       <div class="countr-deaths">
                           <h6 class=" ">Total Recovered - ${distRes.recovered}</h6>
                       </div>
                       <div class="countr-deaths">
                           <h6 class=" ">Updated On - ${uptime}</h6>
                       </div>
                   </div>
                   </div>
               </div>
               
   `;
       }
   }

   mainSelector.appendChild(divRow);
   const newEle = document.createElement('button');
   newEle.className+='btn btn-lg btn-dark';
   newEle.style.marginLeft='30px';
   newEle.innerHTML =`
   <a href="./data.html" class="text-white" >Go Back</a>    
   `;
   
   mainSelector.appendChild(newEle);


}


async function historyCases(){
    const histAPI = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    });

    const jsonHist = await histAPI.json();
    //console.log(jsonHist);
    showHistoryCases(jsonHist);
}


function showHistoryCases(jsonHist) {

    mainSelector.innerHTML=" ";
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';
    const hipDatas = jsonHist;
    console.log(hipDatas);

    hipDatas.forEach(hip=>{
        console.log(hip.date);
        console.log(hip.dailyconfirmed);
        console.log(hip.dailydeceased);
        console.log(hip.dailyrecovered);
        console.log(hip.totalconfirmed);
        console.log(hip.totaldeceased);
        console.log(hip.totalrecovered);
        divRow.innerHTML+=`
        <div class="col-md-3" style="padding-top:50px;">
                <div class="card mb-3  shadow-sm">
                <div class="card-body bg-dark text-white">
                    
                    
                     <div class="countr-name">
                         <h6 class=" ">Date - ${hip.date}</h6>
                     </div>
                     <div class="countr-recovery">
                        <h6 class=" ">Confirmed Cases for this Date - ${hip.dailyconfirmed}</h6>
                    </div>
                     <div class="countr-cases">
                         <h6 class=" ">Confirmed Deceased for this Date - ${hip.dailydeceased}</h6>
                    </div>
                    <div class="countr-recovery">
                        <h6 class=" ">Confirmed Recovered for this Date - ${hip.dailyrecovered}</h6>
                    </div>
                    <div class="countr-name">
                         <h6 class=" ">Total confirmed till this Date - ${hip.totalconfirmed}</h6>
                     </div>
                    <div class="countr-deaths">
                        <h6 class=" ">Total deceased till this Date - ${hip.totaldeceased}</h6>
                    </div>
                    <div class="countr-deaths">
                        <h6 class=" ">Total recovered till this Date - ${hip.totalrecovered}</h6>
                    </div>
                </div>
                </div>
            </div>
            
`;
    });
    mainSelector.appendChild(divRow);
   const newEle = document.createElement('button');
   newEle.className+='btn btn-lg btn-dark';
   newEle.style.marginLeft='30px';
   newEle.innerHTML =`
   <a href="./data.html" class="text-white" >Go Back</a>    
   `;
   
   mainSelector.appendChild(newEle);
}

/**/
