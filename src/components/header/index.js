import Logo from '../logo'
import Navigation from '../navigation'
import ContactsList from '../contacts-list'

export default function Header ({id}) {
    return (
        <header className="header" id={id}>
            <Logo className="header_logo" />
            <div className="header_content">
                <ContactsList className="header_contacts" />
                <Navigation className="header_navigation" />
            </div>
        </header>
    )
}