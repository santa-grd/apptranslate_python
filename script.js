function showAllSites() {
    const siteContainerWrapper = document.querySelector(".site-container-wrapper");
    const fogEffect = document.querySelector(".fog-effect");
    const showMoreBtn = document.getElementById("showMoreBtn");

    // Cek apakah tinggi kontainer sudah terbuka penuh
    if (siteContainerWrapper.style.maxHeight === "none") {
        // Mengembalikan ke tampilan awal dengan batas tinggi
        siteContainerWrapper.style.maxHeight = "200px";
        fogEffect.style.display = "block"; // Menampilkan kabut
        showMoreBtn.textContent = "Tampilkan Semua Situs"; // Ubah teks tombol
    } else {
        // Menghapus batas tinggi untuk menampilkan semua situs
        siteContainerWrapper.style.maxHeight = "none";
        fogEffect.style.display = "none"; // Hilangkan kabut
        showMoreBtn.textContent = "Sembunyikan"; // Ubah teks tombol
    }
}
