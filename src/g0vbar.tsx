import * as React from 'react';

const left: any = "left";

const g0vbar = {
    background: "#343A40"
}

const g0vbarLinkStyle = {
    textDecoration: "underline",
    color: "white",
}

const g0vbarImg = {
    marginRight: "10px",
}

interface Props {
    width: string;
}

const G0vbar: React.FunctionComponent<Props> = (props) => {
    const g0vbarContent = {
        color: "white",
        fontSize: "12px",
        paddingTop: "5px",
        paddingBottom: "5px",
        textAlign: left,
        maxWidth: props.width,
        marginLeft: "auto",
        marginRight: "auto"
    }
    return (
        <div className="g0vbar" style={g0vbar}>
            <div className="g0vbar-content" style={g0vbarContent}>
                <img src="g0v.ico" />
                這是一個<a style={g0vbarLinkStyle} href="https://hack.g0v.tw">台灣g0v公民科技社群</a>
                開發的網站。
      </div>
        </div>
    );
}

export default G0vbar;