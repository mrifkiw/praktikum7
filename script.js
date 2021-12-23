let provinces = {
    "Aceh": ["Aceh Selatan", "Aceh Tenggara", "Aceh Timur", "Aceh Tengah", "Aceh Barat", "Aceh besar"],
    "Sumatera Utara": ["Tapanuli Tengah", "Tapanuli Utara", "Tapanuli Selatan", "Nias", "langkat"],
    "Sumatera Barat": ["Pesisir Selata", "Solok", "Sijunjung", "Tanah datar", "Padang Priaman", "Agam"],
    "Riau": ["Kampar", "Indragiri Hulu", "Bengkalis", "Pelalawan", "Rokan Hulu"]
}
var prov = document.getElementById("province");
var cities = document.getElementById("city");

window.onload = function () {
    for (var province in provinces) {
        prov.options[prov.options.length] = new Option(province, province);
    }

    prov.onchange = function () {
        cities.length = 1;
        city = provinces[prov.value];
        for (var i = 0; i < city.length;  i++) {
            cities.options[cities.options.length] = new Option(city[i], city[i])
        }
    }
}

function getResult() {
    if (prov.value != "" && cities.value != "") {
        document.getElementById("result").innerHTML = "Saya dari provinsi " + prov.value + ", Kabupaten/Kota " + cities.value;
    } else {
        alert("Alamat harus lengkap")
    }
}
