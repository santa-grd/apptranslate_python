function showAllSites() {
    const siteContainerWrapper = document.querySelector(".site-container-wrapper");
    const fogEffect = document.querySelector(".fog-effect");
    const showMoreBtn = document.getElementById("showMoreBtn");

    if (siteContainerWrapper.style.maxHeight === "none") {
 
        siteContainerWrapper.style.maxHeight = "200px";
        fogEffect.style.display = "block"; 
        showMoreBtn.textContent = "Tampilkan Semua Situs"; 
    } else {
        siteContainerWrapper.style.maxHeight = "none";
        fogEffect.style.display = "none";
        showMoreBtn.textContent = "Sembunyikan"; 
    }
}
