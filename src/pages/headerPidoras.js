import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HeaderPidoras extends Component {
    render() {
        return (
            <div className={"App-headerMain"}>
                <Link to={"/"} className={"App-headerLogo"}>
                    <div className={"App-headerLogo"}>
                        <img src={require("../images/xui.png")} className={"App-headerLogoImg"}/>
                        <span className={"App-headerText"}>WallWanders</span>
                    </div>
                </Link>
                <div className={"App-headerCart"}>
                    <Link to={"/catalog"}>
                        <img src={require("../images/pizdec.png")} className={"App-headerCartImg"}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HeaderPidoras;