import LogoImage from "../../assets/img/logo.svg"

export default function Logo ({className}) {
    return (
        <a
            className={"logo " + (className ? className : "")}
            href="/"
            title="На главную."
        >
            <img
                src={LogoImage}
                className="logo_image"
                alt="logo"
            />
            <h1 className="logo_text">BuhOne</h1>
        </a>
    )
}