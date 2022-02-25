const container = document.getElementById('main');
const onLoadData = async ()=>{
    const response= await fetch('https://randomuser.me/api/')
    const data = await response.json();
    getData(data.results[0]);
}
const getData = user=>{
    const div = document.createElement('div');
    div.classList.add('result');
    div.innerHTML = `
                <div class="user-image mb-5">
                    <img src="${user.picture.large}" width="200" alt="user">
                </div>
                <div class="detail w-75 mb-3">
                    <h3 class="border p-3 rounded">Name: &nbsp;${user.name.title} ${user.name.first} ${user.name.last}</h3>
                </div>
                <div class="detail w-75 mb-3">
                    <h4 class="border p-3 rounded">Email:&nbsp;${user.email}</h4>
                </div>
                <div class="detail w-75 mb-3">
                    <h4 class="border p-3 rounded">Gender:&nbsp;${user.gender}</h4>
                </div>
                <div class="detail w-75 mb-3">
                    <h4 class="border p-3 rounded">Phone:&nbsp;${user.phone}</h4>
                </div>
                <div class="detail w-75 mb-3">
                    <h4 class="border p-3 rounded">Cell Phone:&nbsp;${user.cell}</h4>
                </div>
                <div class="w-75 mb-3">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        <span class="border p-1 rounded">Country:&nbsp;${user.location.country}</span>
                        <span class="border p-1 rounded">State:&nbsp;${user.location.state}</span>
                        <span class="border p-1 rounded">City:&nbsp;${user.location.city}</span>
                        <span class="border p-1 rounded">PostCode:&nbsp;${user.location.postcode}</span>
                    </div>
                </div>
                <div class=" w-75 border p-4 rounded">
                    <h4>Location</h4>
                    <p>
                    ${user.location.street.number},
                    ${user.location.street.name},
                    ${user.location.city},
                    ${user.location.country}
                    </p>
                </div>
    `;
    container.appendChild(div);
    console.log(user);
    
}
onLoadData();