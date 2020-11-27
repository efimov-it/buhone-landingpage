import "./index.scss"

export default function Logo ({className}) {
    return (
        <a
            className={"logo " + (className ? className : "")}
            href="/"
        >
            <img
                src=""
                className="logo_image"
            />
            <h1 className="logo_text">BuhOne</h1>
        </a>
    )
}