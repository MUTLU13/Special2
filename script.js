// ===============================================
// YENİ FONKSİYON: GALERİ FOTOĞRAFLARI YÜKLEME BÜYÜSÜ
// ===============================================
function castGalleryLoadSpell() {
    const memoryContainers = document.querySelectorAll('.memory-container');
    
    // Her bir fotoğrafı sırayla yükle
    memoryContainers.forEach((container, index) => {
        // Gecikme süresi (Her fotoğraf için biraz daha uzun, 400ms farkla)
        const delay = index * 400 + 1000; 
        
        setTimeout(() => {
            // CSS'teki opacity: 0 kuralını geçersiz kılarak fade-in'i başlatır
            container.style.opacity = '1';
            
            // Kısa bir parlama efekti vermek için box-shadow'u geçici olarak değiştiriyoruz
            container.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.7)'; 
            
            // Kısa bir süre sonra normal gölgeye dön
            setTimeout(() => {
                container.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.7)'; 
            }, 300); 

        }, delay);
    });
}

// ===============================================
// YENİ FONKSİYON: ÇAPULCU HARİTASI AÇMA BÜYÜSÜ
// ===============================================
function castMapRevealSpell() {
    const mapCards = document.querySelectorAll('.map-reveal');
    
    mapCards.forEach((card, index) => {
        // Her kart 2.5 saniye sonra, 300ms farkla ortaya çıksın
        const delay = 2500 + index * 300; 
        
        setTimeout(() => {
            card.classList.add('show');
        }, delay);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    const magicEffect = document.getElementById('magicEffect');
    const wand = document.getElementById('wand');
    const secretMessage = document.getElementById('secretMessage');
    
    // YILDIZ/PARTİKÜL ANİMASYONUNU BAŞLAT
    createStarAnimation();
    
    // Sayfa yüklendiğinde Galeri Yükleme Büyüsünü çağır
    castGalleryLoadSpell();
    
    // YENİ: Sayfa yüklendiğinde Harita Açma Büyüsünü çağır
    castMapRevealSpell();


   // ... (Diğer JS kodları)

    magicButton.addEventListener('click', (event) => {
        
        // Bu fonksiyonu hem açma hem de kapama büyüsünde efekt için kullanacağız.
        const triggerMagicEffect = () => {
             // Büyü efekti (Mavi/Beyaz parlama)
            const buttonRect = magicButton.getBoundingClientRect();
            // Efekti butonun ortasına hizalama
            magicEffect.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
            magicEffect.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

            magicEffect.classList.add('active');

            setTimeout(() => {
                magicEffect.classList.remove('active');
            }, 1000); 
        };

        // Gizli mesajı gösterme/gizleme mantığı
        if (!secretMessage.classList.contains('visible')) {
            // GÖRÜNÜR DEĞİLSE: Mesajı Göster (Lumos Maxima Büyüsü)
            
            // Asa animasyonu
            wand.style.transform = 'rotate(30deg)';
            setTimeout(() => {
                wand.style.transform = 'rotate(0deg)';
            }, 300);

            // 1. Büyü Efekti
            triggerMagicEffect();

            // Mesajı görünür yap ve buton metnini değiştir
            secretMessage.classList.add('visible');
            magicButton.textContent = "Büyüyü Kapat! (Nox!)";
            
        } else {
            // GÖRÜNÜR İSE: Mesajı Gizle (Nox Büyüsü)
            
            // Asa animasyonu (ters döndürme)
             wand.style.transform = 'rotate(-30deg)';
             setTimeout(() => {
                 wand.style.transform = 'rotate(0deg)';
             }, 300);

            // 2. Büyü Efekti (Kapanırken de ışık yansın)
            triggerMagicEffect(); 

            // Mesajı gizle ve buton metnini değiştir
            secretMessage.classList.remove('visible');
            magicButton.textContent = "Büyü Yap! (Lumos Maxima!)";
        }
    });

// ... (Kalan JS kodları)

    // ===============================================
    // ARKA PLAN YILDIZ/PARTİKÜL ANİMASYONU
    // ===============================================
    function createStarAnimation() {
        const container = document.getElementById('star-container');
        const numStars = 50; 

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Konumlandırma
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Boyut ve Opaklık
            const size = Math.random() * 2 + 1; 
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.opacity = Math.random(); 
            
            // Animasyon Süresi (Yavaş Hareket)
            star.style.animationDelay = `${Math.random() * 10}s`;
            star.style.animationDuration = `${Math.random() * 20 + 10}s`; 
            
            container.appendChild(star);
        }
    }
});