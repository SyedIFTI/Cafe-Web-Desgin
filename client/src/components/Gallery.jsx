import LightGallery from 'lightgallery/react';
import gsap from 'gsap';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import { useGSAP } from '@gsap/react';

const images = [
    { src: "/img1.PNG", alt: "Flag of India" },
    { src: "/img2.PNG", alt: "2" },
    { src: "/img3.PNG", alt: "3" },
    { src: "/img4.PNG", alt: "4", },
    { src: "/img5.PNG", alt: "5", },
    { src: "/img6.PNG", alt: "6", },
    { src: "/img7.PNG", alt: "7", },
    { src: "/img8.PNG", alt: "8", },
    { src: "/img9.PNG", alt: "9", },
    { src: "/img10.PNG", alt: "10", },
]

export function Gallery() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".Gallery",
                start: "top 50%",
                end: "top 20%",
                scrub: 1.5, // set to false for entrance animation
                // markers: true
            }
        });
        tl.from('.Gallery h1', {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power3.out"
        });
       tl.from('.gallery-image', {
    opacity: 0,
    scale: 1,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.5"); // start images animation before heading finishes
    }, []);

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="Gallery px-10 py-10">
            <h1 className='text-center text-5xl font-semibold tracking-wide mb-10 '>Image Gallery</h1>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {images.map((image, index) => (
                    <a href={image.src} key={index}>
                        <img className='gallery-image' alt={image.alt} src={image.src} />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}