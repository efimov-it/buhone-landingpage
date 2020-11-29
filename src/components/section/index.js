export default function Section ({smallHeader, bigHeader, children, className}) {
    return (
        <section
            className={"section " + (className ? className : "")}
        >
            <h3 className="head-text section_small-header">{smallHeader}</h3>
            <h2 className="head-text section_big-header">{bigHeader}</h2>

            {children}
        </section>
    )
}