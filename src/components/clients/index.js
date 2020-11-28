import SliderTemplate from "../slider-template"
import GreySection from "../grey-section"

export default function Clients () {
    const clients = [
        {
            name: "Microsoft",
            image: "/img/clients/1.png",
            link: "https://microsoft.com"
        },
        {
            name: "Microsoft",
            image: "/img/clients/1.png",
            link: "https://microsoft.com"
        },
        {
            name: "Microsoft",
            image: "/img/clients/1.png",
            link: "https://microsoft.com"
        },
        {
            name: "Microsoft",
            image: "/img/clients/1.png",
            link: "https://microsoft.com"
        },
        {
            name: "Microsoft",
            image: "/img/clients/1.png",
            link: "https://microsoft.com"
        },
        {
            name: "Microsoft",
            image: "/img/clients/1.png",
            link: "https://microsoft.com"
        }
    ]
    return (
        <GreySection
            smallHeader="Наши клиенты"
            bigHeader="С нами работают"
            className="clients"
        >
            <SliderTemplate
                className="clients_slider"
                colored={true}
                settings={{
                    slidesToShow: 4
                }}
            >
                {
                    clients.map(({name, image, link}, key) => 
                        <a
                            className="clients_link"
                            key={key}
                            title={name}
                            href={link}
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img
                                className="clients_logo" 
                                src={image}
                                rel={name}
                            />
                        </a>
                    )
                }
            </SliderTemplate>
        </GreySection>
    )
}