const daftarSiswa = JSON.parse(localStorage.getItem('listDataSiswa')) || [];


let mode = 'tambah'

// LOOPING
for (let i = 0; i < 1; i++) {
    console.log(daftarSiswa)
}


// menampilkan siswa
const tampilkanSiswa = () => {

        // mengakses dom
        const tblSiswa = document.getElementById('tblSiswa')
        tblSiswa.innerHTML = `<tr><th>No</th><th>Nama</th><th>Jenis Kelamin</th><th>Alamat</th><th>NoTelepon</th><th>Edit</th><th>Hapus</th></tr>`

            
    for(let index in daftarSiswa) {
        console.log(`${parseInt(index) + 1}. ${daftarSiswa[index].nama} jenis kelamin: ${daftarSiswa[index].jenKel} alamatnya: ${daftarSiswa[index].alamat} nomor telepon: ${daftarSiswa[index].noTelepon}`)

        // menambah isinya
        tblSiswa.innerHTML += `<tr><td>${parseInt(index) + 1}</td><td>${daftarSiswa[index].nama}</td><td>${daftarSiswa[index].jenKel}</td><td>${daftarSiswa[index].alamat}</td><td>${daftarSiswa[index].noTelepon}</td><td><button type= "button" class="btn btn-warning" onclick= "editSiswa('${daftarSiswa[index].nama}')">Edit</button></td><td><button type= "button" class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[index].nama}')">Hapus</button></td></tr>`
    }
}

// CREATE
const tambahSiswa = () => {
    const nama = document.getElementById("txtNama").value
    const jenKel = document.getElementById("txtJenKel").value
    const alamat = document.getElementById("txtAlamat").value
    const noTelepon = document.getElementById("txtNotelp").value




    const siswaBaru = {
    nama: nama,
    jenKel: jenKel,
    alamat: alamat,
    noTelepon: noTelepon,
    }


    // Jika tambah
    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        // jika diedit
        daftarSiswa[mode] = siswaBaru
    }
    localStorage.setItem('listDataSiswa',JSON.stringify(daftarSiswa));


    
    // daftarSiswa.push(siswaBaru)

    document.getElementById("txtNama").value =""
    document.getElementById("txtJenKel").value =""
    document.getElementById("txtAlamat").value =""
    document.getElementById("txtNotelp").value =""


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
        document.getElementById("txtJenKel").value =siswaDiedit.jenKel;
        document.getElementById("txtAlamat").value =siswaDiedit.alamat;
        document.getElementById("txtNotelp").value =siswaDiedit.noTelepon;


        mode =indexEdit


        console.log(target)
        console.log(indexEdit)
    
        console.log(daftarSiswa[indexEdit])
    

}

const cancel = (target) => {
    document.getElementById("txtNama").value =""
    document.getElementById("txtJenKel").value =""
    document.getElementById("txtAlamat").value =""
    document.getElementById("txtNotelp").value =""


    mode = 'tambah'
}