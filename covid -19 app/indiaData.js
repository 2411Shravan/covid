const getTog = document.getElementById('dist-toggle');
const getMainArea = document.getElementById('main');
const inpdata = document.getElementById('dist-search')
function toggleEl(){
    
  if (getTog.style.display === "block") {
    getTog.style.display = "none";
  } else {
    getTog.style.display = "block";
  }
}


async function getStates(){
    const resp = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states');
    const responseData = await resp.json();
    console.log(responseData);
    showStates(responseData);
}

function showStates(getData) {
    const {states} = getData;
    getMainArea.innerHTML=" ";
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    states.forEach(ref=>{
        console.log(ref)
        console.log(ref.state_id);
        console.log(ref.state_name);
        divRow.innerHTML+=`
            <div class="col-md-3">
                    <div class="card mb-3 shadow-sm">
                    <div class="card-body ">
                        
                        
                            <div class="countr-name">
                                <h6 class=" ">State Name - ${ref.state_name}</h6>
                            </div>
                            <div class="countr-cases">
                            <h6 class=" ">State ID - ${ref.state_id}</h6>
                            </div>
                        
                        

                    
                    </div>
                    </div>
                </div>
                
`;

    });
    getMainArea.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg bg-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./id.html" class="text-white" >Go Back</a>    
    `;
    //buttonDiv.innerHTML = newEle;
    getMainArea.appendChild(newEle);
    

}

async function seeCountryFullData(){
    const fetAPI = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/';
    const inpD = inpdata.value;
    const fullAPI = fetAPI + inpD;
    const getDataApi= await fetch(fullAPI);
    const getDataFinal = await getDataApi.json();
    console.log(getDataFinal);
    showDistrictForState(getDataFinal);
}

function showDistrictForState(DataFinal) {

    const{districts}=DataFinal;
    getMainArea.innerHTML=" ";
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    districts.forEach(district => {
        console.log(district);
        console.log(district.district_id);
        console.log(district.district_name);
        divRow.innerHTML+=`
            <div class="col-md-3">
                    <div class="card mb-3 shadow-sm">
                    <div class="card-body ">
                        
                        
                            <div class="countr-name">
                                <h6 class=" ">District Name - ${district.district_name}</h6>
                            </div>
                            <div class="countr-cases">
                            <h6 class=" ">District ID - ${district.district_id}</h6>
                            </div>
                        
                        

                    
                    </div>
                    </div>
                </div>
                
`;
    });
    getMainArea.appendChild(divRow);
    const newEle = document.createElement('button');
    newEle.className+='btn btn-lg bg-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./id.html" class="text-white" >Go Back</a>    
    `;
    //buttonDiv.innerHTML = newEle;
    getMainArea.appendChild(newEle);

}