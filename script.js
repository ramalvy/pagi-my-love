let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.gambar');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = 'block';  
    setTimeout(showSlides, 2000); // Ubah angka 2000 untuk mengatur durasi slide
}

let lagu = document.getElementById('lagu');
let playButton = document.getElementById('playButton');
let pauseButton = document.getElementById('pauseButton');

// Memainkan lagu
function putarLagu() {
    lagu.play();
}

// Menghentikan lagu
function hentikanLagu() {
    lagu.pause();
}

// Menambahkan event listener untuk tombol putar
playButton.addEventListener('click', function() {
    putarLagu();
});

// Menambahkan event listener untuk tombol hentikan
pauseButton.addEventListener('click', function() {
    hentikanLagu();
});