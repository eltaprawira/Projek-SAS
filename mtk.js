document.getElementById("schedule-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    const weekly = parseInt(document.getElementById("weekly").value); // Ambil nilai input

    if (!isNaN(weekly) && weekly > 0) { // Validasi angka positif
        const monthly = weekly * 4; 
        const yearly = weekly * 52; 

        // Menampilkan hasil
        document.getElementById("result").textContent = 
            "Dalam 1 bulan: Berangkat ekstra " + monthly + " kali, Dalam 1 tahun: Berangkat ekstra " + yearly + " kali.";
    } else {
        document.getElementById("result").textContent = 
            "Masukkan angka yang valid dan lebih besar dari 0!";
    }
});