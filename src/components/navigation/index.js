import { Link } from "react-scroll";

export default function Navigation ({className}) {

    const menuItems = [
        {
            value: "Главная",
            link: "home",
            title: "Вернуться к началу"
        },
        {
            value: "Услуги",
            link: "service",
            title: "Перейти к услугам"
        },
        {
            value: "Кейсы",
            link: "service",
            title: "Перейти к кейсам"
        },
        {
            value: "О компании",
            link: "about",
            title: "Перейти к разделу о компании"
        },
        {
            value: "Контакты",
            link: "contacts",
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
                            <Link
                                className="navigation_list-link"
                                to={link}
                                smooth={true}
                                // offset={-70}
                                duration= {500}
                            >{value}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}