import Section from "../section"

export default function OurService () {
    const service = [
        {
            name: "Бухгалтерское обслуживание",
            image: "/img/service/1.jpg"
        },
        {
            name: "Бухгалтерское обслуживание",
            image: "/img/service/1.jpg"
        },
        {
            name: "Бухгалтерское обслуживание",
            image: "/img/service/1.jpg"
        },
        {
            name: "Бухгалтерское обслуживание",
            image: "/img/service/1.jpg"
        },
        {
            name: "Бухгалтерское обслуживание",
            image: "/img/service/1.jpg"
        },
        {
            name: "Бухгалтерское обслуживание",
            image: "/img/service/1.jpg"
        },
    ]

    return (
        <Section
            className="our-service"
            smallHeader="Наши услуги"
            bigHeader="Мы специализируемся"
        >
            <div className="our-service_catalog">
                {
                    service.map(({name, image}, key) =>
                        <article
                            className="our-service_catalog-item"
                            key={key}
                        >
                            <img
                                src={image}
                                className="our-service_catalog-image"
                            />
                            <div className="our-service_catalog-fade" />
                            <h2 className="our-service_catalog-text">{name}</h2>
                        </article>
                    )
                }
            </div>
        </Section>
    )
}