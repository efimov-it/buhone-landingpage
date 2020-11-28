import Slider from 'react-slick'
import Icons from '../../assets/img/icons.svg'

export default function SliderTemplate ({className, children, settings, colored = false}) {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SliderArrows direction="left" />,
        nextArrow: <SliderArrows direction="right" />,
        ...settings
    }

    return (
        <Slider
            className={"slider-template " +
                        (className ? className : "") +
                        (colored ? " slider-template__colored" : "")}
            {...sliderSettings}
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
            title={direction === "left" ? "Назад" : "Вперёд"}
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