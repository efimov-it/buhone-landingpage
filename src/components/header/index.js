import './index.scss'
import Logo from '../logo'
import Navigation from '../navigation'

export default function Header () {
    return (
        <header className="header">
            <Logo className="header_logo" />

            <div className="header_content">
                <div className="header_contacts">

                </div>

                <Navigation className="header_navigation"/>
            </div>
        </header>
    )
}