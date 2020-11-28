import Slider from 'react-slick'
import Icons from '../../assets/img/icons.svg'

export default function SliderTemplate ({className, children}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: <SliderArrows direction="left" />,
        nextArrow: <SliderArrows direction="right" />
    }

    return (
        <Slider
            className={"slider-template " + (className ? className : "")}
            {...settings}
        >
            {children}
        </Slider>
    )
}

function SliderArrows ({className, onClick, direction}) {
    return (
        <button
            className={"slider-template_button " +
                        (className ? className : "") +
                        (direction === "left" ? " slider-template_button__left" : "")}
            onClick={onClick}
        >
            <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
            >
                <use xlinkHref={Icons+"#arrow_"+direction} /> 
            </svg>
        </button>
    )
}