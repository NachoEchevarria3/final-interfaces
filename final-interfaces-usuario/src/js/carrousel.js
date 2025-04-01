const itemsCarrousel = [
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY95yLjET8m1gcJ-snwFWdHKRUf-az2lpuYTeshHmjNEc5RfsEgooSO1X3QzPFWLHmY4X1yoER-4OFE6MZNnTrOwb4sFXlJn0nA.webp?r=cc9'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSlFNtoNPUjFoA4VwuPhGTQhLv0K8O3YDIAbtvSheq8Ch0xCFdsqU9ijeHytSPp4lRD2gyZzz1Tkk6wHeWHF2UWyjRQqt4hFI5s.webp?r=5ac'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeoa4BFwDJiCUNTZdCSQG4yab0MDEwYuZ4up56k5Pq-x_G2mIBa3L_iRKLlUzk9cPHZ-Zzj0j7TwYfnyFYp82AleLb4_TX52zss.webp?r=dbe'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbI3Ko78n3wTnVK9S28bvf6_dsji_7jH96LyAEVu9sJUgaZ0CFerDqymVruY9Zm3ksFMa-5JOm789qPUFXpSyjMPIvtKpmtWdg0.webp?r=c61'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaZWIjabIav168mtjZKIURCMT0744M7d_TTkFnn6oKes2q_BaREEmM_SsLfpYIbSXvEEKCNM_lXHaBZ80MJCFTbyKfGSa1xsooU.webp?r=5fa'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaXG0_SkcxDP4NKIZuZM0A2jqVxn47Vij18mNPP1dVd5INlsGHtKKNeCVdZw8H--Lzpy57hlWE_MgG07ZN1gPjRzavFLIdN5s1A.webp?r=2c8'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSZkdvANk26seHhkxPqGrm2j1LwLeH7IB06Thi0xKkMoSGV7109AC3rwo273ZmVAMU7tsTxD8sTxRGU32iKdIKrNrPUiJSYUQo4.webp?r=e92'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdw5XLHPCUB0LXhLrKaSPtsk0jHLF8qcyFxWEYZ3sehyuTQPJOUVLDO4NB3eyRWTKyRimQIkSJAcdjQ_5CxpOg1OgSNzkyrHmzI.webp?r=de4'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa4Zk-rNvNvyhbxjQdpYQieQeK_f0dOFWTJbJBU_O7Jq4izxP3W8kAvz1wqffsCuGpeJVbuTO59cnqZMvUX3S2GvPQXm14Rc7NA.webp?r=db2'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTRGTz7uhuvRimzgq7-sMgdM_5qJBV28KoQTmN5c0oI49pa-EfMQ-KvRvfjdMfDYv0u4vaoeOThzHEmqb61FXe98BMo5A1KQbio.webp?r=e0b'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ9IjQhcCxc0ELANzR3XBpj45fm_wAVq0yNbxnHYhAf8Lxb4EivMg1hT48WNBFc_x3c2KiyfXmWJvt5nogiwuAJ371qkyx7Eiqg.webp?r=8d4'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZl_GnbfOEucca40XeN_atQme0WpMMkhzmUrj6B60QyQwUept-tykX1YvCWGA7zldOwdc-Wt8OlVYUbyJvQSpBNN313Ayl-uow0.webp?r=e30'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf0Vzid1kB2oqVNxN2TKRblpmm8M9_SDp1HZwAOCZzRZOGfCKDVx1jb6QWWKe8Q_WZ6Daiiqc_q0-w9Yz5ues_W0gTskYdZ6Bmo.webp?r=627'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ76K7xLTfHwg0HD4u5gmNK2veadtb79pdBxYBJkO9pJpgQYC6JRW2f-N8yV59gD1bmfiUE97B7wpXQCT_fmrxTMXGOA6QZNEmc.webp?r=321'
    },
    {
        image: 'https://occ-0-7245-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVPgnvmL5gp0Xitt7fP51VhiNAQs7WKL0RFpVYkYuiVsX0kmVkfmwLYeSC_kITVf4nMHZvvTw7Pknx7xBKtej0CbLfUcb3Wtk3I.webp?r=8e0'
    }
]

const carrousel = document.querySelector('.swiper-wrapper')
const btnLeft = document.getElementById('swiper-left-btn')
const btnRight = document.getElementById('swiper-right-btn')
const cardWidth = 330; // El ancho de cada tarjeta
const carrouselGap = 4.8; // El espacio entre las tarjetas
const totalItems = itemsCarrousel.length; // Número total de elementos en el carrusel

itemsCarrousel.forEach(item => {
    carrousel.innerHTML += `
        <div class='movie-card'>
            <img onclick="window.location.href='movie.html'" src="${item.image}" alt="cover">
            <div class="movie-card__info">
                <div class="movie-card__info-header">
                    <div class="movie-card__options">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#fff" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>
                        <div class="btn-add-fav">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </div>
                    </div>
                    <div class="movie-card__add-info">
                        1h 56min <span class="movie-card__age-restriction">+16</span>
                    </div>
                </div>
                <p class="movie-card__description">
                    Lorem ipsum dolor sit amet. Sed aperiam sequi aut fugiat modi sed quia impedit et voluptatem voluptatem.
                </p>
            </div>
        </div>
    `
})
let carrouselStep = 0;

const updateCarrouselValues = () => {
    const carrouselWidth = carrousel.offsetWidth;
    const itemsPerSection = Math.floor(carrouselWidth / (cardWidth + carrouselGap));
    const scrollWidth = itemsPerSection * (cardWidth + carrouselGap)
    const maxScroll = Math.ceil(totalItems / itemsPerSection) - 1;

    return { carrouselWidth, itemsPerSection, scrollWidth, maxScroll }
}

btnLeft.addEventListener('click', () => {
    const { scrollWidth } = updateCarrouselValues()
    if (carrouselStep > 0) {
        carrouselStep -= 1;
        carrousel.style.transform = `translateX(-${carrouselStep * scrollWidth}px)`;
    }
    handleShowBtnLeft()
    handleShowBtnRight()
    updateLastVisibleItem()
})

btnRight.addEventListener('click', () => {
    const { scrollWidth, maxScroll } = updateCarrouselValues()
    if (carrouselStep < maxScroll) {
        carrouselStep += 1;
        carrousel.style.transform = `translateX(-${carrouselStep * scrollWidth}px)`;
    }
    handleShowBtnLeft()
    handleShowBtnRight()
    updateLastVisibleItem()
})

const handleShowBtnLeft = () => {
    if (window.innerWidth >= 700) {
        btnLeft.style.display = carrouselStep === 0 ? 'none' : 'flex'
    }
}

const handleShowBtnRight= () => {
    const { maxScroll } = updateCarrouselValues()
    if (window.innerWidth >= 700) {
        btnRight.style.display = carrouselStep >= maxScroll ? 'none' : 'flex'
    }
}

const updateLastVisibleItem = () => {
    if (window.innerWidth >= 700) {
        document.querySelectorAll('.movie-card.last-visible').forEach(card => {
            card.classList.remove('last-visible')
        })

        const { itemsPerSection } = updateCarrouselValues()
        const items = carrousel.querySelectorAll('.movie-card')
        const lastIndex = (carrouselStep + 1) * itemsPerSection // 1 x items por sección, 2 x items por sección...

        if (items[lastIndex]) {
            items[lastIndex].classList.add('last-visible') // Oculta la card
        }
    }
}

window.addEventListener('resize', () => {
    updateCarrouselValues()
    handleShowBtnLeft()
    handleShowBtnRight()
    updateLastVisibleItem()
})

updateCarrouselValues()
handleShowBtnLeft()
handleShowBtnRight()
updateLastVisibleItem()
