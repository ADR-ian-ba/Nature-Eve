document.addEventListener('DOMContentLoaded', function() {
    //nav
    const menuIcon = document.querySelector('.section-header .menu');
    const closeIcon = document.querySelector('.section-header .close');
    const nav = document.querySelector('.section-header .navigation');

    function openNav() {
        nav.classList.remove('hidden');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }

    function closeNav() {
        nav.classList.add('hidden');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }

    function adjustNavForViewport() {
        if (window.innerWidth <= 625) {
            closeNav(); 
        } else {
            nav.classList.remove('hidden');
            menuIcon.style.removeProperty('display');
            closeIcon.style.removeProperty('display');
        }
    }

    adjustNavForViewport();

    menuIcon.addEventListener('click', openNav);
    closeIcon.addEventListener('click', closeNav);

    window.addEventListener('resize', adjustNavForViewport);




    //card-tilt
    const card = document.querySelector(".card-tilt");
    const imageContainer = document.querySelector(".img-container");
    const img = imageContainer.querySelector("img"); // Assuming there's an <img> inside .img-container

    imageContainer.style.transition = 'transform 0.5s cubic-bezier(.48,.54,.79,.72), filter 0.5s cubic-bezier(.48,.54,.79,.72)';
    
    card.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
    
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const posX = clientX - centerX;
        const posY = clientY - centerY;
    
        const rotateX = (posY / height) * 30;
        const rotateY = (posX / width) * -30;
    
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
        const scaleAmount = 1.1; 
        imageContainer.style.transform = `scale(${scaleAmount}) translateZ(50px)`;
    
        const shadowIntensity = Math.abs(posX) / width + Math.abs(posY) / height;
        card.style.boxShadow = `${-rotateY / 4}px ${rotateX / 4}px 15px rgba(0,0,0,${0.3 + shadowIntensity * 0.2})`;
    });
    
    card.addEventListener("mouseleave", () => {
        card.style.transition = 'transform 0.5s cubic-bezier(.48,.54,.79,.72), box-shadow 0.5s cubic-bezier(.48,.54,.79,.72)';
        card.style.transform = 'rotateX(0) rotateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    
        imageContainer.style.transform = 'scale(1) translateZ(0)';
    });
    
    card.addEventListener("mouseenter", () => {
      
        card.style.transition = 'none';
    
        
    });

    //about animate
    // const aboutImage = document.querySelector(".image-about-wrapper")
    // gsap.to(aboutImage, {
    //     scrollTrigger: {
    //       trigger: aboutImage,
    //       start: "top center", 
    //       end: "top 100px",
    //       scrub: true, 
    //       markers: true, 
    //       toggleActions: "restart pause reverse pause"
    //     },
    //     x: 100,
    //     duration: 3
    //   });
});

