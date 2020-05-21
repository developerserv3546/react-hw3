import React from "react";

function Content(props) {

    const onClick = (name) => {
        props.onClickButton(name);
        let obj = document.getElementById("output");
        let text = obj.innerText;

        obj.innerText = text + '\n~ Clicked button \'' + name + '\'';
    }

    return (
        <div className={"content"}>
            <div className={"left-block"}>
                {props.buttonNames.map((name) => {
                    return <button className={"myButton"} key={name} onClick={() => {
                        onClick(name)
                    }}>{name}</button>
                })}
            </div>
            <div className={"right-block"}>
                {/*<textarea id="output" className={"output"}/>*/}
                <div id="output" className={"output"}></div>
            </div>
        </div>
    );
}

export default Content;