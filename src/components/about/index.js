export default function About ({id}) {

    const cases = [
        {
            text: "Завершено крупных сделок",
            count: 90,
            link: "#"
        },
        {
            text: "Завершено крупных сделок",
            count: 70,
            link: "#"
        },
        {
            text: "Завершено крупных сделок",
            count: 123,
            link: "#"
        },
        {
            text: "Завершено крупных сделок",
            count: 57,
            link: "#"
        }
    ]

    return (
        <section className="about" id={id}>
            <div className="about_left-block">
                <h3 className="head-text about_small-header">О нас</h3>
                <h2 className="head-text about_big-header">Компания<br /><span className="accent-text">ИвановПром</span></h2>
                <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in purus nec nulla sollicitudin volutpat varius non lorem. Nullam sagittis elit orci, at pretium ipsum feugiat eget. Nulla vel ipsum vitae mauris vehicula vulputate in sed sem. In sit amet faucibus risus. Aliquam non consequat nibh, quis rutrum nisl. Cras euismod scelerisque pretium. Ut scelerisque euismod mauris, sed congue ligula hendrerit eu. Mauris nec nulla lacus. Nulla facilisi. Vestibulum pulvinar non nisi ac fermentum.</p>
            </div>
            <div className="about_right-block about_cases">
                {
                    cases.map(({text, count, link}, key) =>
                        <div
                            className="case"
                            title={text + " (" + count + ")."}
                            key={key}
                        >
                            <p className="case_count">{count}</p>
                            <p className="case_text">{text}</p>
                            <a
                                className="case_link"
                                href={link}
                            >Все кейсы</a>
                        </div>
                    )
                }
            </div>
        </section>
    )
}