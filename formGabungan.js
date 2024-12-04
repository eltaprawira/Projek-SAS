// Mengambil data siswa dan ekstra dari localStorage
const daftarSiswa = JSON.parse(localStorage.getItem('listDataSiswa')) || [];
const daftarEkstra = JSON.parse(localStorage.getItem('listDataEkstra')) || [];

// Menggabungkan data siswa dan ekstra
const gabunganData = daftarSiswa.map((siswa, index) => {
    const ekstra = daftarEkstra[index] || { nama: 'Tidak Ada', motivasi: 'Tidak Ada' };
    return {
        ...siswa,
        ekstra: ekstra.nama,
        motivasi: ekstra.motivasi
    };
});

// Menampilkan data gabungan di tabel
const tampilkanGabungan = () => {
    const tblGabungan = document.getElementById('tblGabungan').getElementsByTagName('tbody')[0];
    tblGabungan.innerHTML = '';

    gabunganData.forEach((data, index) => {
        const row = tblGabungan.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${data.nama}</td>
            <td>${data.jenKel}</td>
            <td>${data.alamat}</td>
            <td>${data.noTelepon}</td>
            <td>${data.ekstra}</td>
            <td>${data.motivasi}</td>
        `;
    });
};

// Panggil fungsi untuk menampilkan data
tampilkanGabungan();