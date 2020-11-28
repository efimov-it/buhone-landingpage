import Logo from '../logo'
import Navigation from '../navigation'
import ContactsList from '../contacts-list'

export default function Header () {
    return (
        <header className="header">
            <Logo className="header_logo" />
            <div className="header_content">
                <ContactsList className="header_contacts" />
                <Navigation className="header_navigation" />
            </div>
        </header>
    )
}