import React, {Component} from 'react';

function swap()
{
    return React.cloneElement(this.doRender(),{
        style: {display: 'inline'},
})
}
class Posters extends Component {
    render() {
        return (
            <div className={"App-postersMain"}>
                <div className={"App-previewPosters"}></div>
                <div className={"App-Sidebar"}>
                    <div className={"App-SidebarText"}>
                        <table>
                            <tr>
                            Тематика
                            <img className={"App-SidebarIconPlus"} src={require("../images/Vector.png")} alt={"plus"} id={"plus"} onClick={swap}/>
                                <img className={"App-SidebarIconMinus"} src={require("../images/Vectorminus.png")} alt={"minus"} id={"minus"} onClick={swap} />
                            </tr>
                        </table>
                    </div>
                    <div className={"App-SidebarText"}>
                        <table>
                            <tr>
                            Форма
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={"App-Market"}>
                    <div className={"App-Poster"}>
                        <img src={require("../images/FirstPoster.png")} alt={"Love"}/>
                        <span className={"App-PosterText"}>Love</span>
                        <span className={"App-Price"}> 150 грн</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posters;