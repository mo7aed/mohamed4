var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteURL");

var sites = []
if (localStorage.getItem("sitesData") != null){
        sites = JSON.parse(localStorage.getItem("sitesData"))
        showData()
}

function addSite(){
    var site = {
        name : siteName.value,
        url : siteUrl.value
    }
     for(var i = 0; i < sites.length; i++){
      if (site.name == sites[i].name || site.url == sites[i].url || site.name.length == 0 || site.url.length == 0){
        alert('This Name/ URL is invalid, please use another one');
        return false;
      }
    }
    sites.push(site);
    localStorage.setItem("sitesData",JSON.stringify(sites))
    showData();
}

function showData(){
    var lebo = "";
    for (var i = 0; i < sites.length; i++){
        lebo +=`<tr>
        <td class="fs-5">${i}</td>
        <td class="fs-5">${sites[i].name}</td>
        <td>
        <a href="${sites[i].url}" target="_blanck"> <button class="btn btn-success"><i class="fa-solid fa-eye fa-lg mx-2" style="color: #ffffff;"></i><span class="fs-5">Visit</span></button></a>
      </td>
        <td>
          <button class="btn btn-danger" onclick = "deleteSite(${i})"><i class="fa-solid fa-trash-can fa-lg mx-2" style="color: #ffffff;"></i><span class="fs-5">Delete</span></button>
        </td>
      </tr>`
    }
    document.getElementById("Data").innerHTML = lebo
}

function deleteSite(index){
    sites.splice(index,1);
    localStorage.setItem("sitesData", JSON.stringify(sites));
    showData();
}


