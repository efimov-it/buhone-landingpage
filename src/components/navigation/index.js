export default function Navigation ({className}) {

    const menuItems = [
        {
            value: "Главная",
            link: "#",
            title: "Вернуться к началу"
        },
        {
            value: "Услуги",
            link: "#",
            title: "Перейти к услугам"
        },
        {
            value: "Кейсы",
            link: "#",
            title: "Перейти к кейсам"
        },
        {
            value: "О компании",
            link: "#",
            title: "Перейти к разделу о компании"
        },
        {
            value: "Контакты",
            link: "#",
            title: "Перейти к контактам"
        }
    ]

    return (
        <nav className={"navigation " + (className ? className : "")}>
            <ul className="navigation_list">
                {
                    menuItems.map(({value, link, title})=>
                        <li
                            className="navigation_list-item"
                            title={title}
                        >
                            <a
                                className="navigation_list-link"
                                href={link}
                            >{value}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}