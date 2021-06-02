const dat = document.getElementById('toggDat');
const secDat = document.getElementById('togg');
const pininp = document.getElementById('pincode-input')
const mainEl = document.getElementById('isn');
const disti = document.getElementById('dist-search');





function displayByPincode(){
    
    if (dat.style.display === "none") {
        dat.style.display = "block";
      } else {
        dat.style.display = "none";
      } 
}


function displayByDistrictcode(){
    if (secDat.style.display === "none") {
        secDat.style.display = "block";
      } else {
        secDat.style.display = "none";
      } 
}

async function searchPincodeAvail(){

    const pincodeValue= pininp.value;
    const fullAPI = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=&date=';
    const firstHalf='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=';
    const secondHalf='&date=';
    const curDate= retCurrentTime();
    const reqApi = firstHalf+pincodeValue+secondHalf+curDate;


    const getData = await fetch(reqApi);
    const getDataJson = await getData.json();
    console.log(getDataJson);
    showDataForPincode(getDataJson);
}




function showDataForPincode(DataJson){
    
    
    var i;
    const{sessions} = DataJson;

    if(sessions.length > 0){
        mainEl.innerHTML="";
        const divRow = document.createElement('div');
        divRow.className += 'row text-center';
        divRow.style+='font-family:none;'
        sessions.forEach(session=>{
      console.log(session.date);
      console.log(session.state_name);
      console.log(session.district_name);
      console.log(session.block_name);
      console.log(session.name);
      console.log(session.center_id);
      console.log(session.pincode);
      console.log(session.address);
      console.log(session.vaccine);
      console.log(session.min_age_limit);
      console.log(session.available_capacity);
      console.log(session.available_capacity_dose1);
      console.log(session.available_capacity_dose2);
      console.log(session.from);
      console.log(session.to);
      console.log(session.fee_type);
      console.log(session.fee);
      console.log(session.session_id);
      divRow.innerHTML+=`
      <div class="col-md-6" style="padding-top:50px;">
              <div class="card mb-6  shadow-sm">
              <div class="card-body bg-dark text-white">
                  
                  
                   <div class="countr-name">
                       <h6 class=" ">Date - ${session.date}</h6>
                   </div>
                   <div class="countr-recovery">
                      <h6 class=" ">State Name- ${session.state_name}</h6>
                  </div>
                   <div class="countr-cases">
                       <h6 class=" ">District Name - ${session.district_name}</h6>
                  </div>
                  <div class="countr-recovery">
                      <h6 class=" ">Block Name - ${session.block_name}</h6>
                  </div>
                  <div class="countr-name">
                       <h6 class=" ">Name - ${session.name}</h6>
                   </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Center Id - ${session.center_id}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Pin-Code - ${session.pincode}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Address - ${session.address}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Vaccine - ${session.vaccine}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" "Minimum Age-Limit  - ${session.min_age_limit}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Available capacity - ${session.available_capacity}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Available capacity dose-1 - ${session.available_capacity_dose1}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Available capacity dose-2 - ${session.available_capacity_dose2}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Vaccinaton start time - ${session.from}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Vaccinaton end time - ${session.to}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Fees Criteria - ${session.fee_type}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Fees - ${session.fee}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Session ID - ${session.session_id}</h6>
                  </div>
              </div>
              </div>
          </div>
          
`;

    });
    mainEl.appendChild(divRow);
       const newEle = document.createElement('button');
       newEle.className+='btn btn-lg btn-dark';
       newEle.style.marginLeft='30px';
       newEle.innerHTML =`
       <a href="./vaccine.html" class="text-white" >Go Back</a>    
       `;
       
       mainEl.appendChild(newEle);
       mainEl.className+='bg-dark';

    }
    else{
        alert('No centers for the pin-code entered by you has Vaccine availability');
    }
}

async function searchDistAvail(){
const naiAPI = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021';
const inpData=disti.value;
const firstAPI ='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=';
const secondAPI = '&date=';
const currDate = retCurrentTime();
const fullAPIrReq = firstAPI+inpData+secondAPI+currDate;
const getResults = await fetch(fullAPIrReq);
const getResultsJson = await getResults.json();
console.log(getResultsJson);
showDistrictData(getResultsJson);
}

function showDistrictData(getJsonResults){
    var i;
    const{sessions} = getJsonResults;

    if(sessions.length > 0){
        mainEl.innerHTML="";
        const divRow = document.createElement('div');
        divRow.className += 'row text-center';
        divRow.style+='font-family:none;'
        sessions.forEach(session=>{
      console.log(session.date);
      console.log(session.state_name);
      console.log(session.district_name);
      console.log(session.block_name);
      console.log(session.name);
      console.log(session.center_id);
      console.log(session.pincode);
      console.log(session.address);
      console.log(session.vaccine);
      console.log(session.min_age_limit);
      console.log(session.available_capacity);
      console.log(session.available_capacity_dose1);
      console.log(session.available_capacity_dose2);
      console.log(session.from);
      console.log(session.to);
      console.log(session.fee_type);
      console.log(session.fee);
      console.log(session.session_id);
      divRow.innerHTML+=`
      <div class="col-md-6" style="padding-top:50px;">
              <div class="card mb-6  shadow-sm">
              <div class="card-body bg-dark text-white">
                  
                  
                   <div class="countr-name">
                       <h6 class=" ">Date - ${session.date}</h6>
                   </div>
                   <div class="countr-recovery">
                      <h6 class=" ">State Name- ${session.state_name}</h6>
                  </div>
                   <div class="countr-cases">
                       <h6 class=" ">District Name - ${session.district_name}</h6>
                  </div>
                  <div class="countr-recovery">
                      <h6 class=" ">Block Name - ${session.block_name}</h6>
                  </div>
                  <div class="countr-name">
                       <h6 class=" ">Name - ${session.name}</h6>
                   </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Center Id - ${session.center_id}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Pin-Code - ${session.pincode}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Address - ${session.address}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Vaccine - ${session.vaccine}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" "Minimum Age-Limit  - ${session.min_age_limit}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Available capacity - ${session.available_capacity}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Available capacity dose-1 - ${session.available_capacity_dose1}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Available capacity dose-2 - ${session.available_capacity_dose2}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Vaccinaton start time - ${session.from}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Vaccinaton end time - ${session.to}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Fees Criteria - ${session.fee_type}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Fees - ${session.fee}</h6>
                  </div>
                  <div class="countr-deaths">
                      <h6 class=" ">Session ID - ${session.session_id}</h6>
                  </div>
              </div>
              </div>
          </div>
          
`;

    });
    mainEl.appendChild(divRow);
       const newEle = document.createElement('button');
       newEle.className+='btn btn-lg btn-dark';
       newEle.style.marginLeft='30px';
       newEle.innerHTML =`
       <a href="./vaccine.html" class="text-white" >Go Back</a>    
       `;
       
       mainEl.appendChild(newEle);
       mainEl.className+='bg-dark';

    }
    else{
        alert('No centers for the pin-code entered by you has Vaccine availability');
    }

}


function retCurrentTime(){
    today = new Date();
    yesterday = new Date(today);
    yesterday.setDate(today.getDate() );

    var dd = yesterday.getDate();
    var mm = yesterday.getMonth()+1;
    var yyyy = yesterday.getFullYear();

    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    CurrentDayString = dd+'-'+mm+'-'+yyyy;

    console.log(CurrentDayString);
    return CurrentDayString;
}

async function AllVaccines() {
    const getData = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    });
    const getjson = await getData.json();
    console.log(getjson);
    showAllVaccines(getjson);
}

function showAllVaccines(takeJson){
    const red= takeJson;
    mainEl.innerHTML="";
        const divRow = document.createElement('div');
        divRow.className += 'row text-center';
        divRow.style+='font-family:none;'
    for(var i=0;i<red.length;i++){
        console.log(red[i]);
        //console.log(red[i].trimedName);
        //console.log(red[i].trimedCategory);
        console.log(red[i].category);
        //console.log(red[i].description);
       // console.log(red[i].developerResearcher);
       // console.log(red[i].FDAApproved);
        //console.log(red[i].phase);
        //console.log(red[i].nextSteps);
        //console.log(red[i].funder);
        //console.log(red[i].lastUpdated);
        divRow.innerHTML+=`
        <div class="col-md-4">
            <div class="card bg-dark mb-4 shadow-sm text-white">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center">${red[i].category}</h3>
                </div>
                <div class="card-body" >
                <h6>Fixed Name : ${red[i].trimedName}</h6>
                <h6>Fixed Category : ${red[i].trimedCategory}</h6>
                <h6>Medicine Description : ${red[i].description}</h6>
                <h6>Developer/Researcher : ${red[i].developerResearcher}</h6>
                <h6>FDA Approved : ${red[i].FDAApproved}</h6>
                <h6>Current Phase Trials : ${red[i].phase}</h6>
                <h6>Next Steps : ${red[i].nextSteps}</h6>
                <h6>Funded By : ${red[i].funder}</h6>
                <h6>Last Updated : ${red[i].lastUpdated}</h6>

                </div>
            </div>
        </div>
        `;
    }
    mainEl.appendChild(divRow);
       const newEle = document.createElement('button');
       newEle.className+='btn btn-lg btn-dark';
       newEle.style.marginLeft='30px';
       newEle.innerHTML =`
       <a href="./vaccine.html" class="text-white" >Go Back</a>    
       `;
       
       mainEl.appendChild(newEle);
       
}

async function phaseOne(){
    const ged = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-i", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    });
    const gede = await ged.json();
    console.log(gede);
    showPhaseOne(gede);
}


function showPhaseOne(gede){
    const fed = gede;
    mainEl.innerHTML="";
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';
    divRow.style+='font-family:none;'
    for(var i=0;i<fed.length;i++){
        console.log(fed[i]);
        divRow.innerHTML+=`
        <div class="col-md-4">
            <div class="card bg-dark mb-4 shadow-sm text-white">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center">${fed[i].category}</h3>
                </div>
                <div class="card-body" >
                <h6>Fixed Name : ${fed[i].trimedName}</h6>
                <h6>Fixed Category : ${fed[i].trimedCategory}</h6>
                <h6>Medicine Description : ${fed[i].description}</h6>
                <h6>Developer/Researcher : ${fed[i].developerResearcher}</h6>
                <h6>FDA Approved : ${fed[i].FDAApproved}</h6>
                <h6>Current Phase Trials : ${fed[i].phase}</h6>
                <h6>Next Steps : ${fed[i].nextSteps}</h6>
                <h6>Funded By : ${fed[i].funder}</h6>
                <h6>Last Updated : ${fed[i].lastUpdated}</h6>

                </div>
            </div>
        </div>
        `;
    }
    mainEl.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./vaccine.html" class="text-white" >Go Back</a>    
    `;
    
    mainEl.appendChild(newEle);
}

async function phaseTwo(){
 const sed = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-ii", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    });

  const sedr = await sed.json();
  console.log(sedr);  
  showphaseTwo(sedr);
}


function showphaseTwo(srde){
    const rf= srde;
    mainEl.innerHTML="";
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';
    divRow.style+='font-family:none;'
    for(var i=0;i<rf.length;i++){
        console.log(rf[i]);
        divRow.innerHTML+=`
        <div class="col-md-4">
            <div class="card bg-dark mb-4 shadow-sm text-white">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center">${rf[i].category}</h3>
                </div>
                <div class="card-body" >
                <h6>Fixed Name : ${rf[i].trimedName}</h6>
                <h6>Fixed Category : ${rf[i].trimedCategory}</h6>
                <h6>Medicine Description : ${rf[i].description}</h6>
                <h6>Developer/Researcher : ${rf[i].developerResearcher}</h6>
                <h6>FDA Approved : ${rf[i].FDAApproved}</h6>
                <h6>Current Phase Trials : ${rf[i].phase}</h6>
                <h6>Next Steps : ${rf[i].nextSteps}</h6>
                <h6>Funded By : ${rf[i].funder}</h6>
                <h6>Last Updated : ${rf[i].lastUpdated}</h6>

                </div>
            </div>
        </div>
        `;
    }
    mainEl.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./vaccine.html" class="text-white" >Go Back</a>    
    `;
    
    mainEl.appendChild(newEle);
}

async function phaseThree(){

    const hed = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-iii", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    });

    const hedr = await hed.json();
    console.log(hedr);
    showPhaseThree(hedr);
}

function showPhaseThree(herd){


    const regd = herd;
    mainEl.innerHTML="";
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';
    divRow.style+='font-family:none;'
    for(var i=0;i<herd.length;i++){
        console.log(herd[i]);
        divRow.innerHTML+=`
        <div class="col-md-4">
            <div class="card bg-dark mb-4 shadow-sm text-white">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center">${herd[i].category}</h3>
                </div>
                <div class="card-body" >
                <h6>Fixed Name : ${herd[i].trimedName}</h6>
                <h6>Fixed Category : ${herd[i].trimedCategory}</h6>
                <h6>Medicine Description : ${herd[i].description}</h6>
                <h6>Developer/Researcher : ${herd[i].developerResearcher}</h6>
                <h6>FDA Approved : ${herd[i].FDAApproved}</h6>
                <h6>Current Phase Trials : ${herd[i].phase}</h6>
                <h6>Next Steps : ${herd[i].nextSteps}</h6>
                <h6>Funded By : ${herd[i].funder}</h6>
                <h6>Last Updated : ${herd[i].lastUpdated}</h6>

                </div>
            </div>
        </div>
        `;
    }
    mainEl.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./vaccine.html" class="text-white" >Go Back</a>    
    `;
    mainEl.appendChild(newEle);
}


async function phaseFour(){
 const pf = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-iv", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
	}
});

const pfer = await pf.json();

console.log(pfer);
showPhaseFour(pfer);

}

function showPhaseFour(pref){
    const grep= pref;
    mainEl.innerHTML="";
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';
    divRow.style+='font-family:none;'
    for(var i=0;i<grep.length;i++){
        console.log(grep[i]);
        divRow.innerHTML+=`
        <div class="col-md-4">
            <div class="card bg-dark mb-4 shadow-sm text-white">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center">${grep[i].category}</h3>
                </div>
                <div class="card-body" >
                <h6>Fixed Name : ${grep[i].trimedName}</h6>
                <h6>Fixed Category : ${grep[i].trimedCategory}</h6>
                <h6>Medicine Description : ${grep[i].description}</h6>
                <h6>Developer/Researcher : ${grep[i].developerResearcher}</h6>
                <h6>FDA Approved : ${grep[i].FDAApproved}</h6>
                <h6>Current Phase Trials : ${grep[i].phase}</h6>
                <h6>Next Steps : ${grep[i].nextSteps}</h6>
                <h6>Funded By : ${grep[i].funder}</h6>
                <h6>Last Updated : ${grep[i].lastUpdated}</h6>

                </div>
            </div>
        </div>
        `;
    }
    mainEl.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./vaccine.html" class="text-white" >Go Back</a>    
    `;
    mainEl.appendChild(newEle);
}



async function treatment(){

    const gets = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-treatment", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    });
    const fegde = await gets.json();
    console.log(fegde);
    showTreatments(fegde);
}

function showTreatments(hed){
    const fe = hed;
    mainEl.innerHTML="";
    const divRow = document.createElement('div');
    divRow.className += 'row text-center';
    divRow.style+='font-family:none;'
     for(var i=0;i<fe.length;i++){
         console.log(fe[i]);
         divRow.innerHTML+=`
        <div class="col-md-4">
            <div class="card bg-dark mb-4 shadow-sm text-white">
                <div class="card-header">
                <h3 class="my-0 font-weight-normal text-center">${fe[i].category}</h3>
                </div>
                <div class="card-body" >
                <h6>Fixed Name : ${fe[i].trimedName}</h6>
                <h6>Fixed Category : ${fe[i].trimedCategory}</h6>
                <h6>Medicine Description : ${fe[i].description}</h6>
                <h6>Developer/Researcher : ${fe[i].developerResearcher}</h6>
                <h6>FDA Approved : ${fe[i].FDAApproved}</h6>
                <h6>Current Phase Trials : ${fe[i].phase}</h6>
                <h6>Next Steps : ${fe[i].nextSteps}</h6>
                <h6>Funded By : ${fe[i].funder}</h6>
                <h6>Last Updated : ${fe[i].lastUpdated}</h6>

                </div>
            </div>
        </div>
        `;
     }
     mainEl.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./vaccine.html" class="text-white" >Go Back</a>    
    `;
    mainEl.appendChild(newEle);
}

async function vaccineNews(){
    const empt = [];
    const rip = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    });
    /*const rep = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    });*/
   
    const ripi = await rip.json();
  showVaccineNews(ripi);
   
   
   
}

function showVaccineNews(ripie){
    const{news} = ripie;
    mainEl.innerHTML="";
    const divRow = document.createElement('div');
    divRow.className += 'content ';
    divRow.style+='font-family:none;'
    console.log(news);
    for(var i=0;i<news.length;i++){
        console.log(news[i].content);
        console.log(news[i].link);
        console.log(news[i].reference);
        console.log(news[i].title);
        console.log(news[i].urlToImage);
        
        divRow.innerHTML+=`
        <div class="showNews bg-dark text-white text-center">
            <div class="showTitle">
            <h3>${news[i].title}</h3>
            </div>
            <div class="showRef">
            <h6>Reference : ${news[i].reference}</h6>
            </div>
            <div class="showImage">
            <img src="${news[i].urlToImage}" height="200" width="200"/>
            </div>
            <div class="showContent">
            <h6>${news[i].content}</h6>
            </div>
            <div class="showLink">
            <p><a href="${news[i].link}" target="_blank">Click Here to read more......</a></p>
            </div>

        
        </div>
        

        
        `;

    }
    mainEl.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./vaccine.html" class="text-white" >Go Back</a>    
    `;
    mainEl.appendChild(newEle);
    
}