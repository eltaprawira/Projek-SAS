const daftarSiswa = [

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
        tblSiswa.innerHTML = `<tr><th>No</th><th>Nama</th><th>Gambar</th><th>Jadwal</th><th>Edit</th><th>Hapus</th></tr>`

            
    for(let index in daftarSiswa) {
        console.log(`${parseInt(index) + 1}. ${daftarSiswa[index].nama} Gambar: ${daftarSiswa[index].gambar} jadwal: ${daftarSiswa[index].jadwal}`)

        // menambah isinya
        tblSiswa.innerHTML += `<tr><td>${parseInt(index) + 1}</td><td>${daftarSiswa[index].nama}</td><td>${daftarSiswa[index].gambar}</td><td>${daftarSiswa[index].jadwal}</td><td><button type= "button" class="btn btn-warning" onclick= "editSiswa('${daftarSiswa[index].nama}')">Edit</button></td><td><button type= "button" class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[index].nama}')">Hapus</button></td></tr>`
    }
}

// CREATE
const tambahSiswa = () => {
    const nama = document.getElementById("txtNama").value
    const gambar = document.getElementById("txtGambar").value
    const jadwal = document.getElementById("txtJadwal").value





    const siswaBaru = {
    nama: nama,
    gambar: gambar,
    jadwal: jadwal,
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
    document.getElementById("txtGambar").value =""
    document.getElementById("txtJadwal").value =""

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
        document.getElementById("txtGambar").value =siswaDiedit.gambar;
        document.getElementById("txtJadwal").value =siswaDiedit.jadwal;

        mode =indexEdit


        console.log(target)
        console.log(indexEdit)
    
        console.log(daftarSiswa[indexEdit])
    

}

const cancel = (target) => {
    document.getElementById("txtNama").value =""
    document.getElementById("txtGambar").value =""
    document.getElementById("txtJadwal").value =""



    mode = 'tambah'
}