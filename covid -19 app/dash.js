const con = document.getElementById('confirmed');
const act = document.getElementById('deaths');
const rec = document.getElementById('active');
const deaths = document.getElementById('recovered');



function loadData(){
    ShowMessage();
    getCountry();
    
}

function ShowMessage(){
    alert('This Data is accurately visible over the devices having screen size greater than or equal to 550px');
    alert('For mobile Phone users zoom in to see the data accurately');
}
async function getCountry(){
    const getD =  await fetch("https://api.covid19india.org/data.json");
    const ad = await getD.json();
    //console.log(ad);
    IndiaCntr(ad)
}

function IndiaCntr(ads){
    const{statewise}=  ads;
    
    //console.log(statewise);
    var total_confirmed = statewise[0].confirmed;
    var total_deaths =statewise[0].deaths;
    var total_recovered= statewise[0].recovered;
    var total_active = statewise[0].active;

    //console.log(total_active);
    //console.log(total_confirmed);
    //console.log(total_deaths);
    //console.log(total_recovered);


    

    var active_cases=[];
    var confirmed_cases=[];
    var recovered_cases=[];
    var deathsr=[];
    var state_name=[];

    statewise.forEach(state=>{
        //console.log(state);
        active_cases.push(state.active);
        confirmed_cases.push(state.confirmed);
        recovered_cases.push(state.recovered);
        deathsr.push(state.deaths);
        state_name.push(state.state)
    });
    active_cases.shift();
    confirmed_cases.shift();
    recovered_cases.shift();
    deathsr.shift();
    state_name.shift();
    
    //console.log(state_name);
    

    var Dchart = document.getElementById('CountryData');
   var cont = Dchart.getContext('2d');

   var chart = new Chart(cont,{
       type:'line',
       data:{
        labels:state_name,
        datasets:[
            {
                label:"Confirmed Cases",
                data:confirmed_cases,
                backgroundColor: "#ffff00",
                borderColor:"#ffff00",
                minBarLength: 10
            },
            {
                label:"Active Cases",
                data:active_cases,
                backgroundColor: "#0000ff",
                borderColor:"#0000ff",
                minBarLength: 10
            },
            {
                label:"Recovered Cases",
                data:recovered_cases,
                backgroundColor: "#00ff00",
                borderColor:"#00ff00",
                minBarLength: 10
            },
            {
                label:"Deaths",
                data:deathsr,
                borderColor:"#ff0000",
                backgroundColor: "#ff0000",
                minBarLength: 10
            }

        ]
       },
       options:{
        //indexAxis: 'y',
        responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "India's Covid Data"
      }
    }
       }
   });
}


/*async function getstrf(){
    const histAPI = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    });

    const jsonHist = await histAPI.json();
    console.log(jsonHist);
    showHistoryCases(jsonHist);
}


function showHistoryCases(jsonHi);{
console.log(jsonHi);


}*/