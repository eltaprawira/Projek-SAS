// Menampilkan data yang disimpan di LocalStorage
document.getElementById("displayName").innerText = localStorage.getItem("name");
document.getElementById("displayGender").innerText = localStorage.getItem("gender");
document.getElementById("displayClass").innerText = localStorage.getItem("class");
document.getElementById("displayMotivation").innerText = localStorage.getItem("motivation");
document.getElementById("displayAddress").innerText = localStorage.getItem("address");
document.getElementById("displayPhone").innerText = localStorage.getItem("phone");
document.getElementById("displayExtracurricular").innerText = localStorage.getItem("extracurricular");