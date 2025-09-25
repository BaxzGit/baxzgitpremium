// Data aplikasi
const appsData = {
    'alight-motion': {
        name: 'Alight Motion',
        price: 'Rp 2.000',
        description: 'Aplikasi editing video profesional dengan fitur motion graphics.'
    },
    'canva-pro': {
        name: 'Canva Pro',
        price: 'Rp 1.000',
        description: 'Platform desain grafis dengan akses ke semua fitur premium.'
    },
    'capcut-pro': {
        name: 'CapCut Pro',
        price: 'Rp 6.000',
        description: 'Editor video dengan fitur premium dan template eksklusif.'
    },
    'youtube-premium': {
        name: 'YouTube Premium',
        price: 'Rp 3.500',
        description: 'Nikmati YouTube tanpa iklan dan akses konten eksklusif.'
    },
    'spotify': {
        name: 'Spotify Premium',
        price: 'Rp 14.000',
        description: 'Dengarkan musik tanpa iklan dan dengan kualitas tinggi.'
    },
    'other': {
        name: 'Aplikasi Lainnya',
        price: 'Mulai Rp 10.000',
        description: 'Tersedia berbagai aplikasi premium lainnya. Hubungi admin.'
    }
};

// Elemen DOM
const modal = document.getElementById('purchase-modal');
const modalAppInfo = document.getElementById('modal-app-info');
const closeBtn = document.querySelector('.close');
const whatsappBtn = document.getElementById('whatsapp-btn');
const copyDanaBtn = document.getElementById('copy-dana');
const qrisLink = document.getElementById('qris-link');

// Informasi kontak
const adminPhone = '6283109105308';
const danaNumber = '083109105308';

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Tombol beli untuk setiap aplikasi
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const appCard = this.closest('.app-card');
            const appId = appCard.getAttribute('data-app');
            openPurchaseModal(appId);
        });
    });
    
    // Tutup modal
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Tombol WhatsApp
    whatsappBtn.addEventListener('click', function() {
        const appName = this.getAttribute('data-app-name');
        const message = `Halo admin, saya ingin membeli ${appName}. Bagaimana cara pembeliannya?`;
        const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
    
    // Tombol salin nomor DANA
    copyDanaBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(danaNumber).then(function() {
            alert('Nomor DANA berhasil disalin: ' + danaNumber);
        }, function(err) {
            console.error('Gagal menyalin teks: ', err);
        });
    });
    
    // Link QRIS
    qrisLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Untuk pembayaran QRIS, silakan hubungi admin melalui WhatsApp untuk mendapatkan QR Code yang valid.');
    });
});

// Fungsi untuk membuka modal pembelian
function openPurchaseModal(appId) {
    const appData = appsData[appId];
    
    if (appData) {
        modalAppInfo.innerHTML = `
            <h3>${appData.name}</h3>
            <p><strong>Harga:</strong> ${appData.price}</p>
            <p>${appData.description}</p>
        `;
        
        // Set data atribut untuk tombol WhatsApp
        whatsappBtn.setAttribute('data-app-name', appData.name);
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Fungsi untuk menutup modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});