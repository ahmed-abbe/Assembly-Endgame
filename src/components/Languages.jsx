import clsx from "clsx";

const Languages = ({ languages, wrongGuessCount }) => {
    return (
        <div className="language-chips">
            {languages.map((language, index) => {
                const className = clsx("chip", {
                    lost: wrongGuessCount > index
                })

                return (
                    <span
                        key={language.name}
                        className={className}
                        style={{
                            backgroundColor: language.backgroundColor,
                            color: language.color,
                        }}
                    >
                        {language.name}
                    </span>
                );
            })}
        </div>
    );
};

export default Languages;
