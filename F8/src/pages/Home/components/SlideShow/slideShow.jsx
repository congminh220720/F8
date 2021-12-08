import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react/cjs/react.development';
import { getSlideShow } from '../../../../redux/reducers/slideShow';
import './style.scss'

function SlideShow(props) {
    const { ListSlideShow } = useSelector((state) => state.slideshow);
    const dispatch = useDispatch();

    const sideArray = renderSlider(ListSlideShow)
    const [sidleShow, setSlideShow] = useState()
    const [widthSlide, setWidthSlide] = useState()
    const [quantity, setQuantity] = useState()
    const [widthChange, setWidthChange ] = useState()

    const refWidth = useRef();
    
    useEffect(() => {
        dispatch(getSlideShow)
        setWidthChange(0)
    }, [])

    useEffect(() => {
        if (ListSlideShow) {
            setSlideShow(sideArray)
            const widthSlideElement = refWidth.current.offsetWidth
            const quantityElement = refWidth.current.querySelectorAll('.slider__show-item').length;
            setWidthSlide(widthSlideElement);
            setQuantity(quantityElement);
            
        }
    }, [ListSlideShow])

    useEffect(() => {
        refWidth.current.style.transform = `translateX(-${widthChange}px)`;
        // refWidth.current.style.transform = `translate3d(-${widthChange}px, 0, 0)`;
        // const autoClick = setInterval(() => {
        //     handleMoveSlideLeft();
          
        // }, 4000)

        // return () => {
        //     clearInterval(autoClick);
        // }
       
    }, [widthChange])

    
    function renderSlider(slideShow){
        return slideShow?.map((slider,i) => ( 
             <div key={i} className="slider__show-item" style={{background: `${slider.data?.props?.style?.background}`}}>
             <div className="slider__show__left">
                     <div className="slider__show__left-about" >
                         <h2 className="slider__show__left-heading">
                             {slider.title}
                         </h2>
 
                         <p className="slider__show__left-desc">
                             {slider.description}
                         </p>
 
                         <div className="slider__show__left-btn">
                             <a  href="">{slider.cta_title}</a>
                         </div>
                     </div>
             </div>
             <div className="slider__show__right">
                 <a href="" >
                     <img className="slider__show__right-img" src={slider.banner_cdn} alt="" />
                 </a>
             </div>
         </div>
     ))
    }
    

    function handleMoveSlideLeft(){
        const maxWidth = (quantity - 1) * widthSlide;
        if (widthChange < maxWidth){
            setWidthChange(widthChange + widthSlide)
        }else{
            setWidthChange(0)
        }   
    }

    function handleMoveSlideRight() {
        const maxWidth = (quantity - 1) * widthSlide;
        if (widthChange === 0) {
            setWidthChange(maxWidth)
        } else {
            setWidthChange(widthChange - widthSlide)
        }

    }

    return (
        <div className="Home__slider__show">
               <div className="slider__show">
                   <div className="slider__show-move">
                    <button className="slider__show-move-btn-left" onClick={handleMoveSlideRight    }><i className="fas fa-chevron-left"></i></button>
                        <div ref={refWidth} className="slider__show-move-box">
                        {/* {renderSlider(sides)} */}
                        {sideArray}
                
                        </div>
                    <button className="slider__show-move-btn-right" onClick={handleMoveSlideLeft}><i className="fas fa-chevron-right"></i></button>
                        <ul className="slider__show-move-btn-key">
                            <li><button>1</button></li>
                            <li><button>2</button></li>
                            <li><button>3</button></li>
                        </ul>
                   </div>
               </div>
           </div>
    );
}

export default SlideShow;