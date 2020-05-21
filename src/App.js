import React from 'react';
import './App.css';
import Content from "./Content";

function App() {

    const buttonNames = ['JavaScript', 'Swift', 'Scala', 'Go', 'Python', 'Ruby', 'C#', 'C++', 'Shell', 'TypeScript', 'PHP'];
    const onClickButton = (name) => {
        console.log('Clicked button \'' + name + '\'')
    }

    return (
        <div className={"main"}>
            <Content buttonNames={buttonNames} onClickButton={onClickButton}/>
        </div>
    );
}

export default App;
