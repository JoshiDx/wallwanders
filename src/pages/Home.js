import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className={"App-homeMain"}>
                <div className={"App-homeFirstPlate"}>
                    <span className={"App-homeFirstPlateText"}>Постери/картини</span>
                </div>
                <div className={"App-homeSecondPlates"}>
                    <div className={"App-homeSecondPlate"}>
                        <span className={"App-homeFirstPlateText"}>Стiкери</span>
                    </div>
                    <div className={"App-homeThirdPlate"}>
                        <span className={"App-homeFirstPlateText"}>Чашки</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;