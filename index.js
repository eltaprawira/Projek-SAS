const daftarSiswa = [
    {
        nama: "Lala",
        jenKel: "P",
        kelas: "X PPLG 1",
        motivasi: "Agar mahir menari",
        alamat: "Ds. Kaliongkek",
        noTelepon: "085376321224",
        ekstra: "TARI",
    },
    {
        nama: "Zadly",
        jenKel: "L",
        kelas: "X TM 2",
        motivasi: "Menambah pengalaman",
        alamat: "Ds. Tegalsari",
        noTelepon: "082847613729",
        ekstra: "PRAMUKA",
    },
    {
        nama: "Yasmin",
        jenKel: "P",
        kelas: "X TEI 2",
        motivasi: "Melatih kekompakan dalam suatu tim",
        alamat: "Ds. UjungNegoro",
        noTelepon: "081642849113",
        ekstra: "PKS"
    },
    {
        nama: "Sintari",
        jenKel: "P",
        kelas: "X TKL 1",
        motivasi: "Agar bisa mengobati orang ",
        alamat: "Ds. Karanggeneng",
        noTelepon: "089736143392",
        ekstra: "PMR"
    },
    {
        nama: "dozzy",
        jenKel: "L",
        kelas: "X TBSM 1",
        motivasi: "Melanjutkan bakat saya",
        alamat: "Ds. Wonosegoro",
        noTelepon: "087362724136",
        ekstra: "TAEKWONDO"
    },

]

let mode = 'tambah'

// LOOPING
for (let i = 0; i < 1; i++) {
    console.log(daftarSiswa)
}


// menampilkan siswa
const tampilkanSiswa = () => {

        // mengakses dom
        const tblSiswa = document.getElementById('tblSiswa')
        tblSiswa.innerHTML = `<tr><th>No</th><th>Nama</th><th>Jenis Kelamin</th><th>Kelas</th><th>Motivasi</th><th>Alamat</th><th>NoTelepon</th><th>Ekstra</th><th>Edit</th><th>Hapus</th></tr>`

            
    for(let index in daftarSiswa) {
        console.log(`${parseInt(index) + 1}. ${daftarSiswa[index].nama} jenis kelamin: ${daftarSiswa[index].jenKel} kelas: ${daftarSiswa[index].kelas} motivasinya: ${daftarSiswa[index].motivasi} alamatnya: ${daftarSiswa[index].alamat} nomor telepon: ${daftarSiswa[index].noTelepon} mengikuti ektra: ${daftarSiswa[index].ekstra}`)

        // menambah isinya
        tblSiswa.innerHTML += `<tr><td>${parseInt(index) + 1}</td><td>${daftarSiswa[index].nama}</td><td>${daftarSiswa[index].jenKel}</td><td>${daftarSiswa[index].kelas}</td><td>${daftarSiswa[index].motivasi}</td><td>${daftarSiswa[index].alamat}</td><td>${daftarSiswa[index].noTelepon}</td><td>${daftarSiswa[index].ekstra}</td><td><button type= "button" class="btn btn-warning" onclick= "editSiswa('${daftarSiswa[index].nama}')">Edit</button></td><td><button type= "button" class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[index].nama}')">Hapus</button></td></tr>`
    }
}

// CREATE
const tambahSiswa = () => {
    const nama = document.getElementById("txtNama").value
    const jenKel = document.getElementById("txtJenKel").value
    const kelas = document.getElementById("txtKelas").value
    const motivasi = document.getElementById("txtMotivasi").value
    const alamat = document.getElementById("txtAlamat").value
    const noTelepon = document.getElementById("txtNotelp").value
    const ekstra = document.getElementById("txtEkstra").value




    const siswaBaru = {
    nama: nama,
    jenKel: jenKel,
    kelas: kelas,
    motivasi: motivasi,
    alamat: alamat,
    noTelepon: noTelepon,
    ekstra: ekstra,
    }


    // Jika tambah
    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        // jika diedit
        daftarSiswa[mode] = siswaBaru
    }

    
    // daftarSiswa.push(siswaBaru)

    document.getElementById("txtNama").value =""
    document.getElementById("txtJenKel").value =""
    document.getElementById("txtKelas").value =""
    document.getElementById("txtMotivasi").value =""
    document.getElementById("txtAlamat").value =""
    document.getElementById("txtNotelp").value =""
    document.getElementById("txtEkstra").value =""


    mode == 'tambah'

    tampilkanSiswa()
}

// mencari index/nama yng dicari diurutan berapa
const cariIndex = (nama) => {
    // tampilkan index jika nama siswa == nama
    for (let i = 0; i < daftarSiswa.length; i++){
        if (daftarSiswa[i].nama == nama) {
            // console.log(daftarSiswa[1])
            return i

        }
    }
    return -1
}
// DELETE
const hapusSiswa = (target) => {

    const indexDihapus = cariIndex(target)
    // menghapus element dari dalam array
    if (indexDihapus !== -1) {
        daftarSiswa.splice(indexDihapus, 1) 
            tampilkanSiswa()
    }

}

// edit siswa
const editSiswa = (target) => {
    const indexEdit = cariIndex(target);
    const siswaDiedit = daftarSiswa[indexEdit];

        document.getElementById("txtNama").value = siswaDiedit.nama;
        document.getElementById("txtJenKel").value = siswaDiedit.jenKel;
        document.getElementById("txtKelas").value = siswaDiedit.kelas;
        document.getElementById("txtMotivasi").value = siswaDiedit.motivasi;
        document.getElementById("txtAlamat").value = siswaDiedit.alamat;
        document.getElementById("txtNotelp").value = siswaDiedit.noTelepon;
        document.getElementById("txtEkstra").value = siswaDiedit.ekstra;


        mode =indexEdit


        console.log(target)
        console.log(indexEdit)
    
        console.log(daftarSiswa[indexEdit])
    

}

const cancel = (target) => {
    document.getElementById("txtNama").value = ""
    document.getElementById("txtJenKel").value = ""
    document.getElementById("txtKelas").value = ""
    document.getElementById("txtMotivasi").value = ""
    document.getElementById("txtAlamat").value = ""
    document.getElementById("txtNotelp").value = ""
    document.getElementById("txtEkstra").value = ""


    mode = 'tambah'
}