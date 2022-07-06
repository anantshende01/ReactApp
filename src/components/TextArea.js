import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function TextArea(props) {
    const [text, setText] = useState("");
    const [capital, setcapital] = useState('initial')
    const [data, setdata] = useState("Capitalize Each word")


    const toUpCase = () => {
        const newText = text.toUpperCase();
        setText(newText)
        console.log(text)


    }
    const toLowCase = () => {
        const newText = text.toLowerCase();
        setText(newText)
        console.log(text)
        setcapital('initial')
        setdata('Default Writing')



    }
    const onChangeHandle = (event) => {
        console.log("OnChange")
        setText(event.target.value);

    }

    const caseChange = () => {

        if (capital === 'initial') {
            setcapital('capitalize')
            setdata('Capitalize Writing')
        }
        else if (capital === 'capitalize') {
            setcapital('initial')
            setdata('Default Writing')

        }


    }

    const btnStyle = {

    }

    return (

        <>
            <div className="mb-3 container">
                <h1>{props.title} - {text.slice(0, 15)} {text.length === 0 ? '' : '....'}</h1>
                <div className="form-check form-switch">
                    <input className="form-check-input" name="switch" type="checkbox" id="flexSwitchCheckDefault" onClick={caseChange} />
                    <label htmlFor="switch">{data}</label>
                </div>
                <p>{capital === 'initial' ? 'Default Writing' : 'Capitalizing Each Word'}</p>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={onChangeHandle}
                    style={{ backgroundColor: props.bgColor, color: props.bgColor === 'black' ? 'white' : 'black', caretColor: props.caret, textTransform: capital }}></textarea>
                <button type="submit" className="btn btn-primary mb-3 mx-2 my-2  btngrp" onClick={toLowCase} style={btnStyle}>LowerCase</button>
                <button type="submit" className="btn btn-primary mb-3 mx-2 my-2  btngrp" onClick={toUpCase} style={btnStyle}>UpperCase</button>
                <h2>Number of Characters: {text.length}</h2>
                <h2>Number of Words: {text.length === 0 ? 0 : text.split(" ").length}</h2>

            </div>
        </>
    )
}

TextArea.propTypes = {
    title: PropTypes.string
};

TextArea.defaultProps = {
    title: 'AnantApp'
};
