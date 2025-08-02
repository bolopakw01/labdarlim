(function () {

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            const splashScreen = document.getElementById("splash-screen");
            splashScreen.style.opacity = "0";
            setTimeout(function () {
                splashScreen.style.display = "none";
                document.getElementById("main-content").style.display = "block";
            }, 500);
        }, 3000);
    });


    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    // hitungan
    document.addEventListener('DOMContentLoaded', (event) => {
        function countUp(element, start, end, duration) {
            let startTime = null;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                element.textContent = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        }

        function createObserver(element, end, duration) {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        countUp(entry.target, 0, end, duration);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(element);
        }


        const hitung1 = document.getElementById('hitung1');
        const hitung2 = document.getElementById('hitung2');
        const hitung3 = document.getElementById('hitung3');
        const hitung4 = document.getElementById('hitung4');

        const angkaAkhir1 = 1234;
        const angkaAkhir2 = 1234;
        const angkaAkhir3 = 1234;
        const angkaAkhir4 = 1234;
        const durasi = 2000; // 2 detik

        createObserver(hitung1, angkaAkhir1, durasi);
        createObserver(hitung2, angkaAkhir2, durasi);
        createObserver(hitung3, angkaAkhir3, durasi);
        createObserver(hitung4, angkaAkhir4, durasi);
    });




    // document.addEventListener('contextmenu', function(event) {
    //     event.preventDefault();
    // });


    window.addEventListener('load', () => {
        AOS.init({

            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()