import React, {Component} from 'react';

class Posters extends Component {
    render() {
        return (
            <div className={"App-postersMain"}>
                <div className={"App-previewPosters"}></div>
                <div className={"App-Sidebar"}>
                    <div className={"App-SidebarText"}>
                        Тематика
                    </div>
                    <div className={"App-SidebarText"}>
                        Тематика
                    </div>
                </div>
            </div>
        );
    }
}

export default Posters;