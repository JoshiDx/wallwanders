import React, {Component} from 'react';

class HeaderPidoras extends Component {
    render() {
        return (
            <div className={"App-headerMain"}>
                <div className={"App-headerLogo"}>
                    <img src={require("../images/xui.png")} className={"App-headerLogoImg"}/>
                    <span className={"App-headerText"}>WallWanders</span>
                </div>
                <div className={"App-headerCart"}>
                    <img src={require("../images/pizdec.png")} className={"App-headerCartImg"}/>
                </div>
            </div>
        );
    }
}

export default HeaderPidoras;