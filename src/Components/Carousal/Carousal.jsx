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
        <div className="carousal">
            <div key={data[activeIndex].id} className="carousal-content">
                <p className="carousal-next-arrow" onClick={onNext}></p>
                <p>{data[activeIndex].label}</p>
                <p>{data[activeIndex].desc}</p>
                <p className="carousal-prev-arrow" onClick={onPrev}></p>
            </div>
        </div>
        );
}

export default Carousal;
