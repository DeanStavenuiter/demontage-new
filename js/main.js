const photobook = document.querySelector(".photobook");
const dropdown = document.querySelector(".dropdown");
const dropdownMobile = document.querySelector(".dropdown-mobile")
const mobilePhotoBook = document.querySelector(".mobile-photobook")

photobook.addEventListener("mouseover", (e) => {
    dropdown.style.display = "flex";
})

dropdown.addEventListener("mouseout", (e) => {
    dropdown.style.display = "none";
})

mobilePhotoBook.addEventListener('click', (e) => {
    if (dropdownMobile.style.display === "flex"){
        dropdownMobile.style.display = "none"
    } else{
        dropdownMobile.style.display = "flex"
    }
})