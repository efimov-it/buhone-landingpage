import Section from "../section"
import Slider from "../slider-template"

export default function Reviews () {

    const reviews = [
        {
            name: "Иван Иванов",
            post: "Директор ООО \"Раз-два\"",
            image: "/img/reviews/1.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ex cursus, mattis est vitae, convallis nunc. Nam vitae dui neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec est magna. Nulla iaculis mauris nisl, id pulvinar libero venenatis in. Aenean eleifend, ante vitae mollis fermentum, elit tellus luctus purus, at imperdiet tellus mi luctus lectus. Cras commodo, purus ac lacinia aliquet, neque erat vulputate arcu, aliquam faucibus odio ligula non elit. Duis aliquet metus lorem, quis eleifend lectus scelerisque ullamcorper. Morbi fringilla enim lacus, quis vehicula urna convallis vitae. Pellentesque dui nibh, dignissim at purus quis, vehicula posuere sem. Donec scelerisque diam quam, vitae commodo risus rhoncus eu. Maecenas commodo faucibus blandit. Vivamus tempor laoreet tellus id accumsan. Maecenas felis mi, imperdiet in purus vitae, interdum condimentum quam. Etiam porta urna non diam viverra pulvinar."
        },
        {
            name: "Иван Иванов",
            post: "Директор ООО \"Раз-два\"",
            image: "/img/reviews/1.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis iaculis ex, at auctor ex tempor at. Aenean at orci eget ligula volutpat tincidunt. Morbi sed arcu ante. Nullam quis nulla sagittis, faucibus leo ac, convallis leo. Vivamus finibus arcu non lacus posuere cursus et ut est. Mauris eget iaculis est. Cras nec commodo tellus. Nulla pellentesque massa et elit blandit, quis cursus quam malesuada. Proin tincidunt felis ut neque dignissim, ut posuere est consectetur."
        },
        {
            name: "Иван Иванов",
            post: "Директор ООО \"Раз-два\"",
            image: "/img/reviews/1.jpg",
            text: "Maecenas feugiat malesuada mi, sed vestibulum lorem placerat id. Pellentesque convallis aliquam urna, ut posuere enim ultricies quis. Curabitur id libero nibh. Praesent at viverra tortor, vel varius nunc. Mauris aliquam in velit non fermentum. Vestibulum aliquet lacus pellentesque cursus luctus. Integer lacus nulla, tincidunt et semper et, placerat et tortor. Phasellus rhoncus, lacus in efficitur sagittis, sapien velit rutrum tellus, a pulvinar ipsum neque sed lectus. Ut fermentum purus nec sapien aliquet, vel tincidunt lorem ornare. Curabitur tempus non felis eu ultricies."
        },
        {
            name: "Иван Иванов",
            post: "Директор ООО \"Раз-два\"",
            image: "/img/reviews/1.jpg",
            text: "Sed congue tempor tortor, viverra venenatis ante tempus sit amet. In hac habitasse platea dictumst. Maecenas interdum et nibh ut semper. Ut est dolor, rhoncus sit amet ultrices eget, pulvinar nec velit. Aliquam egestas sapien nulla, sit amet dapibus tortor vehicula vitae. Morbi sollicitudin vulputate ipsum a consectetur. Morbi fringilla velit sed diam gravida ultricies. Donec diam magna, posuere et blandit quis, aliquet ac nunc."
        }
    ]

    return (
        <Section
            className="reviews"
            smallHeader="Отзывы"
            bigHeader="Ваши благодарности"
        >
            <Slider
                className="reviews_slider"
                colored={true}
                settings={{
                    fade: true
                }}
            >
                {
                    reviews.map(({name, post, image, text}, key) =>
                        <div className="reviews_item">
                            <div className="reviews_text">{text}</div>
                            <div className="reviews_author">
                                <img
                                    src={image}
                                    className="reviews_author-image"
                                    alt={name}
                                />
                                <div className="reviews_author-info">
                                    <p className="reviews_author-name">{name}</p>
                                    <p className="reviews_author-post">{post}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </Section>
    )
}