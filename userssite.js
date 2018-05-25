


let individualData = document.getElementById("starter")

function dataFill(){
    users.forEach((person)=>{
        let card=`<div style="width: 18rem;" class="card">
        <div class="card-body" class="nameBack"> 
        <h5 class="card-title">${person.name}</h5> </div>
        <div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><i>username:</i> <b>${person.username}</b></li>
        <li class="list-group-item">email: ${person.email}</li>
            </div>
        <div>
        <li class="list-group-item">${person.address.street}</li>
        <li class="list-group-item">${person.address.suite}</li>
        <li class="list-group-item">${person.address.city}</li>
        <li class="list-group-item">${person.zipcode}</li>
            </div>
        <div>
        <li class="list-group-item">${person.address.geo.lat}</li>
        <li class="list-group-item">${person.address.geo.lng}</li>
            </div>
        <div>
        <li class="list-group-item">${person.phone}</li>
        <li class="list-group-item">${person.website}</li>
            </div>
        <div>
        <li class="list-group-item">${person.company.name}</li>


        `


individualData.innerHTML += card
})
    }
    dataFill()