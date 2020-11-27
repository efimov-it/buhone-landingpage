import './index.scss'
export default function Navigation ({className}) {
    return (
        <nav className={"navigation " + (className ? className : "")}>
            <ul className="navigation_list">
                <li className="navigation_list-item">
                    <a
                        className="navigation_list-link"
                        href="#"
                    >Главная</a>
                </li>
                <li className="navigation_list-item">
                    <a
                        className="navigation_list-link"
                        href="#"
                    >Услуги</a>
                </li>
                <li className="navigation_list-item">
                    <a
                        className="navigation_list-link"
                        href="#"
                    >Кейсы</a>
                </li>
                <li className="navigation_list-item">
                    <a
                        className="navigation_list-link"
                        href="#"
                    >О компании</a>
                </li>
                <li className="navigation_list-item">
                    <a
                        className="navigation_list-link"
                        href="#"
                    >Контакты</a>
                </li>
            </ul>
        </nav>
    )
}