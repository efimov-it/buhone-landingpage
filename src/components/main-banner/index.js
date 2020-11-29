import SliderTemplate from '../slider-template'

export default function MainBanner () {

    const banners = [
        {
            image: "/img/banner/banner_1.jpg",
            text: "Бухгалтерские услуги в Санкт-Петербурге",
            buttonText: "Наша презентация",
            link: "#"
        },
        {
            image: "/img/banner/banner_1.jpg",
            text: "Бухгалтерские услуги в Санкт-Петербурге",
            buttonText: "Наша презентация",
            link: "#"
        },
        {
            image: "/img/banner/banner_1.jpg",
            text: "Бухгалтерские услуги в Санкт-Петербурге",
            buttonText: "Наша презентация",
            link: "#"
        },
        {
            image: "/img/banner/banner_1.jpg",
            text: "Бухгалтерские услуги в Санкт-Петербурге",
            buttonText: "Наша презентация",
            link: "#"
        }
    ]

    return (
        <section>
            <SliderTemplate
                className="main-banner"
                settings={{
                    speed: 1000,
                    fade: true
                }}
            >
                {
                    banners.map(({image, text, buttonText, link}, key) =>
                        <div className="main-banner_slide" key={key}>
                            <img
                                src={image}
                                className="main-banner_slide-image"
                                alt={text}
                            />

                            <div className="main-banner_slide-content">
                                <h2 className="main-banner_slide-text">{text}</h2>
                                <a
                                    className="main-banner_slide-button"
                                    href={link}
                                    title="Перейти"
                                >{buttonText}</a>
                            </div>
                        </div>    
                    )
                }
            </SliderTemplate>
        </section>
    )
}