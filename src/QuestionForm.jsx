import { useState } from "react";
import Select from "react-select";

// eslint-disable-next-line react/prop-types
const QuestionForm = ({ onCreate }) => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([""]);
    const [type, setType] = useState([""]);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        setOptions([...options, ""]);
    };

    const handleDeleteOption = (index) => {
        const newOptions = [...options];
        newOptions.splice(index, 1);
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ question, options, type });
        setQuestion("");
        setOptions([""]);
    };

    const defultType = [
        { value: "alarm", label: "Alarm" },
        { value: "button", label: "Button" },
        { value: "text", label: "Text" },
        { value: "photo", label: "Photo" },
        { value: "finish", label: "Finish" },
        // С возможностью расширения
    ];

    return (
        <div>
            <h3>Создание опроса</h3>
            <form onSubmit={handleSubmit}>
                <label className="root-label">
                    Вопрос:
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </label>
                <br />
                <label className="root-label">
                    Параметры:
                    {options.map((option, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={option}
                                onChange={(e) =>
                                    handleOptionChange(index, e.target.value)
                                }
                            />
                            <label className="root-label">
                                Тип:
                                <Select
                                defaultValue={type}
                                onChange={(el) => setType(el.value)}
                                    options={defultType}
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            boxShadow: "none",
                                            border: "none",
                                            backgroundColor: "black",
                                            color: "#000000",
                                            width: "100%",
                                        }),
                                    }}
                                />
                            </label>
                            <button
                                className="root-btn"
                                type="button"
                                onClick={() => handleDeleteOption(index)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </label>
                <button
                    className="root-btn"
                    type="button"
                    onClick={handleAddOption}
                >
                    Add Option
                </button>
                <br />
                <button type="submit">Create Question</button>
            </form>
        </div>
    );
};

export default QuestionForm;
