const getCntrname = document.getElementById('cntr-str');
const APiURL = "https://api.covid19api.com/countries";

showCountries(APiURL)
async function showCountries(apiLink) {
    const resp = await fetch(apiLink);
    const respData = await resp.json();
    console.log(respData);
    ShowCountrySearchStrings(respData);

}



function ShowCountrySearchStrings(searchString){
    
 var i;   
 const divRow = document.createElement('div');
 divRow.classList.add('row');
 console.log(searchString[0]);
 for(i=0;i<248;i++){
     console.log(searchString[i].Slug,searchString[i].Country);
     divRow.innerHTML+=`
            <div class="col-md-3">
                    <div class="card mb-3 shadow-sm">
                    <div class="card-body">
                        
                        
                        <div class="countr-name">
                                <h6 class=" ">Country Name- ${searchString[i].Country}</h6>
                        </div>
                        <div class="countr-cases">
                            <h6 class=" ">Search String- ${searchString[i].Slug}</h6>
                        </div>                    
                    </div>
                    </div>
                </div>                
`;
}
getCntrname.appendChild(divRow);





}  

/*const newEle = document.createElement('button');
    newEle.className+='btn btn-lg btn-dark';
    newEle.style.marginLeft='30px';
    newEle.innerHTML =`
    <a href="./data.html" class="text-white" >Go Back</a>    
    `;
    //buttonDiv.innerHTML = newEle;
    mainSelector.appendChild(newEle);*/

