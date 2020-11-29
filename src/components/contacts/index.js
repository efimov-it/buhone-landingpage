import {Formik} from "formik"
import Icons from "../../assets/img/icons.svg"

const validate = values => {
    const errors = {}
    const requiredText = "Пожалуйста, заполните поле."
    if (!values.name) {
        errors.name = requiredText
    } else if (!values.surname) {
        errors.surname = requiredText
    } else if (!values.message) {
        errors.message = requiredText
    } else if (
        !/^[А-Я|а-я|Ёё|A-Z|a-z]{1,20}$/i.test(values.name)
    ) {
        errors.name = 'Имя должно состоять только из букв и не должно превышать 20 символов.';
    } else if (
        !/^[А-Я|а-я|Ёё|A-Z|a-z]{1,20}$/i.test(values.surname)
    ) {
        errors.surname = 'Фамилия должна состоять только из букв и не должна превышать 20 символов.';
    } else if (
        !/^[А-Я|а-я|Ёё|A-Z|a-z|0-9|\s|\,|\.|\?|\!]{1,100}$/i.test(values.message)
    ) {
        errors.message = 'Длина сообщения не должна превышать 100 символов и содержать спец. символы.';
    }
    return errors;
}

const sendMessage = (values, { setSubmitting }) => {
    //Спёр из доков и решил оставить как симуляцию отправки запроса
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      alert("Ваше сообщение отправлено!")
      setSubmitting(false)
    }, 1000)
}

const initialValues = {
    name: "",
    surname: "",
    message: ""
}

const fields = {
    name : {
        text: "Имя",
        title: "Введите Ваше имя.",
        placeholder: "Иван"
    },
    surname: {
        text: "Фамилия",
        title: "Введите Вашу фамилию.",
        placeholder: "Иванов"
    },
    message: {
        text: "Сообщение",
        title: "Введите текст сообщения.",
        placeholder: "Ваше сообщение"
    }
}

export default function Contacts ({id}) {
    return (
        <section className="contacts" id={id}>
            <div className="contacts_left-block">
                <h2 className="head-text contacts_head">Связь с нами</h2>
                <p className="contacts_text">У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
                <div className="contacts_info">
                    <div className="contacts_info-block">
                        <svg
                            className="contacts_info-icon"
                            viewBox="9 2.5 8 19"
                            width="20px"
                            height="30px"
                        >
                            <use xlinkHref={Icons+"#phone-white"} />
                        </svg>
                        <a
                            className="contacts_info-link"
                            href="tel:+71112223344"
                        >+7 (111) 222-33-44</a>
                    </div>
                    <div className="contacts_info-block">
                        <svg
                            className="contacts_info-icon"
                            viewBox="1 7 22.34 11"
                            width="40px"
                            height="30px"
                        >
                            <use xlinkHref={Icons+"#mail-white"} />
                        </svg>
                        <a
                            className="contacts_info-link"
                            href="mailto:order@bu-one.ru"
                        >order@bu-one.ru</a>
                    </div>
                </div>
            </div>
            <div className="contacts_right-block">
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={sendMessage}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form
                            className="contacts_form"
                            onSubmit={handleSubmit}
                        >
                            {
                                Object.keys(initialValues).map((keyName, key) =>
                                    <label
                                        className="contacts_field"
                                        key={key}
                                        title={fields[keyName].title}
                                    >
                                        <span className="contacts_field-placeholder">{fields[keyName].text}</span>
                                        {
                                            keyName !== "message" ?
                                                <input
                                                    className="contacts_field-input"
                                                    type="text"
                                                    name={keyName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values[keyName]}
                                                    placeholder={fields[keyName].placeholder}
                                                />
                                            :
                                                <textarea
                                                    className="contacts_field-input"
                                                    name={keyName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values[keyName]}
                                                    placeholder={fields[keyName].placeholder}
                                                />
                                        }
                                        <span
                                            className={"contacts_field-error" +
                                                        (errors[keyName] && touched[keyName] && errors[keyName] ? " contacts_field-error__shown" : "")}>
                                                {errors[keyName] && touched[keyName] && errors[keyName]}
                                        </span>
                                    </label>
                                )
                            }
                            <button
                                className="contacts_submit"
                                type="submit"
                                disabled={isSubmitting}
                                title="Отправить сообщение"
                            >
                                Отправить сообщение
                            </button>
                        </form>
                    )}
                </Formik>  
            </div>
        </section>
    )
}