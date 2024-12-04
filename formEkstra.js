const daftarEkstra = JSON.parse(localStorage.getItem('listDataEkstra')) || [];


let mode = 'tambah'

// LOOPING
for (let i = 0; i < 1; i++) {
    console.log(daftarEkstra)
}


// menampilkan siswa
const tampilkanEkstra = () => {
        // mengakses dom
        const tblEkstra = document.getElementById('tblEkstra')
        tblEkstra.innerHTML = `<tr><th>No</th><th>Nama</th><th>Motivasi</th><th>Edit</th><th>Hapus</th></tr>`
        const daftarEkstra = JSON.parse(localStorage.getItem('listDataEkstra')) || [];


            
    for(let index in daftarEkstra) {
        console.log(`${parseInt(index) + 1}. ${daftarEkstra[index].nama} motivasi: ${daftarEkstra[index].motivasi}`)

        // menambah isinya
        tblEkstra.innerHTML += `<tr><td>${parseInt(index) + 1}</td><td>${daftarEkstra[index].nama}</td><td>${daftarEkstra[index].motivasi}</td><td><button type= "button" class="btn btn-warning" onclick= "editSiswa('${daftarEkstra[index].nama}')">Edit</button></td><td><button type= "button" class="btn btn-danger" onclick="hapusSiswa('${daftarEkstra[index].nama}')">Hapus</button></td></tr>`
    }
}

// CREATE
const tambahEkstra = () => {
    const nama = document.getElementById("txtEkstra").value
    const motivasi = document.getElementById("txtMotivasi").value



    const ekstraBaru = {
    nama: nama,
    motivasi: motivasi,
    }


    // Jika tambah
    if (mode == 'tambah') {
        daftarEkstra.push(ekstraBaru)
    } else {
        // jika diedit
        daftarEkstra[mode] = ekstraBaru
    }
   

    
    // daftarSiswa.push(siswaBaru)
    document.getElementById("txtEkstra").value =""
    document.getElementById("txtMotivasi").value =""

    mode == 'tambah'

    tampilkanEkstra()
}

// mencari index/nama yng dicari diurutan berapa
const cariIndex = (nama) => {
    // tampilkan index jika nama esktra == nama
    for (let i = 0; i < daftarEkstra.length; i++){
        if (daftarEkstra[i].nama == nama) {
            // console.log(daftarEkstra[1])
            return i

        }
    }
    return -1
}
// DELETE
const hapusEkstra = (target) => {

    const indexDihapus = cariIndex(target)
    // menghapus element dari dalam array
    if (indexDihapus !== -1) {
        daftarEkstra.splice(indexDihapus, 1) 
            tampilkanEkstra()
    }

}

// edit siswa
const editEksra = (target) => {
    const indexEdit = cariIndex(target);
    const ekstraDiedit = daftarEkstra[indexEdit];

        document.getElementById("txtEkstra").value = ekstraDiedit.nama;
        document.getElementById("txtMotivasi").value = ekstraDiedit.motivasi;

        mode =indexEdit


        console.log(target)
        console.log(indexEdit)
    
        console.log(daftarEkstra[indexEdit])
    

}

const cancel = (target) => {
    document.getElementById("txtEkstra").value =""
    document.getElementById("txtMotivasi").value =""


    mode = 'tambah'
}