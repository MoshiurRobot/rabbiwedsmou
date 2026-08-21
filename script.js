/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("preloader")
            .classList.add("hide");

    }, 800);

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   WEDDING COUNTDOWN
========================================= */

// Bangladesh time: UTC +6
const weddingDate =
    new Date("2026-09-18T13:00:00+06:00");


function updateCountdown() {

    const now = new Date();

    const difference =
        weddingDate.getTime() -
        now.getTime();


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   FLOATING PETALS
========================================= */

const petalsContainer =
    document.querySelector(".petals");


function createPetal() {

    const petal =
        document.createElement("span");

    petal.classList.add("petal");


    petal.style.left =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 5 + 6;

    petal.style.width =
        size + "px";

    petal.style.height =
        size * 1.4 + "px";


    const duration =
        Math.random() * 7 + 8;

    petal.style.animationDuration =
        duration + "s";


    petal.style.animationDelay =
        Math.random() * 2 + "s";


    petalsContainer.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, (duration + 3) * 1000);

}


setInterval(createPetal, 900);


/* =========================================
   MUSIC
========================================= */

const musicBtn =
    document.getElementById("musicBtn");

const weddingMusic =
    document.getElementById("weddingMusic");


let musicPlaying = false;


musicBtn.addEventListener("click", async () => {

    /*
        Browsers normally block automatic audio.
        The user must click the music button.
    */

    if (!weddingMusic.src) {

        alert(
            "Add your wedding music inside the audio element in index.html."
        );

        return;

    }


    if (musicPlaying) {

        weddingMusic.pause();

        musicBtn.textContent = "♪";

        musicPlaying = false;

    } else {

        try {

            await weddingMusic.play();

            musicBtn.textContent = "❚❚";

            musicPlaying = true;

        } catch (error) {

            console.log(
                "Music could not be played:",
                error
            );

        }

    }

});


/* =========================================
   PARALLAX DECORATION
========================================= */

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;


    const floralTop =
        document.querySelector(".floral-top");


    if (floralTop && scrollY < window.innerHeight) {

        floralTop.style.transform =
            `translateX(-50%) translateY(${scrollY * 0.15}px)`;

    }

});