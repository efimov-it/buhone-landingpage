import Icons from '../../assets/img/icons.svg'

export default function ContactList ({className}) {

    const contacts = [
        {
            type: "phone",
            value: "8 (111) 222-33-44",
            link: "tel:81112223344",
            title: "Позвонить."
        },
        {
            type: "clock",
            value: "Пн-Пт 10:00-18:00",
            link: null,
            title: "Рабочие часы."
        },
        {
            type: "mail",
            value: "order@buhone.ru",
            link: "mailto:order@buhone.ru",
            title: "Написать письмо."
        },
        {
            type: "location",
            value: "Невский пр. 130",
            link: "https://yandex.ru/maps/-/CCUEMJUN-A",
            title: "Открыть на карте."
        }
    ]

    return (
        <ul className={"contacts-list " + (className ? className : "")}>
            {
                contacts.map( ({type, value, link, title}, key) => 
                    <li
                        className="contacts-list_item"
                        title={title}
                        key={key}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="contacts-list_icon"
                        >
                            <use xlinkHref={Icons+"#"+type} />
                        </svg>
                        {
                            link ?
                                <a
                                    href={link}
                                    target={link.indexOf("http") !== -1 ? "_blank" : null}
                                    rel={link.indexOf("http") !== -1 ? "noopener noreferer" : null}
                                    className="contacts-list_link"
                                >{value}</a>
                            :
                                <span className="contacts-list_text">{value}</span>
                        }
                    </li>
                )
            }
        </ul>
    )
}