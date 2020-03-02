import React, { useState } from 'react';
import './Carousal.css';

const INITIAL_IMAGE_INDEX = 0;

function Carousal({ data }) {
    const [activeIndex, setActiveIndex] = useState(INITIAL_IMAGE_INDEX);

    function onNext() {
        if (activeIndex !== data.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(INITIAL_IMAGE_INDEX);
        }
    }

    function onPrev() {
        if (activeIndex !== INITIAL_IMAGE_INDEX) {
            setActiveIndex(activeIndex - 1);
        } else {
            setActiveIndex(data.length - 1);
        }
    }


    return (
        <section className="carousal">
            <section key={data[activeIndex].id} className="carousal-content">
                <p className="carousal-next-arrow" onClick={onNext}></p>
                <label className="carousal-label">{data[activeIndex].label}</label>
                <label className="carousal-desc">{data[activeIndex].desc}</label>
                <p className="carousal-prev-arrow" onClick={onPrev}></p>
            </section>
        </section>
        );
}

export default Carousal;
