import React, {Component} from 'react';

class FooterPidoras extends Component {
    render() {
        return (
            <div className={"App-footerMain"}>
                <div className={"App-footerInfo"}>
                    <span className={"App-footerInfoText"}>м.Львів вул.С.Бандери 25</span>
                    <span className={"App-footerInfoText"}>wallwonders@gmail.com</span>
                    <span className={"App-footerInfoText"}>+380988888888</span>
                </div>
                <div className={"App-footerPayments"}>
                    <span className={"App-footerInfoText"}>Оплата</span>
                    <div className={"App-footerPaymentsLogos"}>
                        <img src={require("../images/visa.png")} className={"App-footerPaymentLogo"}/>
                        <img src={require("../images/paypal.png")} className={"App-footerPaymentLogo"}/>
                        <img src={require("../images/american-express.png")} className={"App-footerPaymentLogo"}/>
                        <img src={require("../images/maestro.png")} className={"App-footerPaymentLogo"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterPidoras;