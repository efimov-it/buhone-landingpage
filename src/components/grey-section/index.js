export default function GreySection ({smallHeader, bigHeader, children, className}) {
    return (
        <section
            className={"grey-section " + (className ? className : "")}
        >
            <h3 className="head-text grey-section_small-header">{smallHeader}</h3>
            <h2 className="head-text grey-section_big-header">{bigHeader}</h2>

            {children}
        </section>
    )
}