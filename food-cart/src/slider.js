import React, { useState } from 'react';
import './slider1.css'; // Import CSS file

function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    function plusSlides(n) {
        setSlideIndex(prevIndex => prevIndex + n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slides.length);
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    

    return (
        <div className="slideshow-container">
            <div className="mySlides fade">
                <source media="(max-width: 700px)" srcSet="pesto (2).jpg" />
                <img src="pesto (1).jpg" style={{ width: '100%' }} alt="Pesto Slide" />
            </div>
            <div className="mySlides fade">
                <source media="(max-width: 700px)" srcSet="ramen (1).jpg" />
                <img src="ramen.jpg" style={{ width: '100%' }} alt="Ramen Slide" />
            </div>
            <div className="mySlides fade">
                <img src="basil-pizza (1).jpg" style={{ width: '100%' }} alt="Basil Pizza Slide" />
            </div>
            <div className="mySlides fade">
                <img src="biryani (2).jpg" style={{ width: '100%' }} alt="Biryani Slide" />
            </div>
            <div className="mySlides fade">
                <img src="vanilla-icecream (1).jpg" style={{ width: '100%' }} alt="Vanilla Ice Cream Slide" />
            </div>
            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>
        </div>
    );
}

export default Slider;
