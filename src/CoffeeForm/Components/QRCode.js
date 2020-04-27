import QRCode from 'qrcode'
import React from 'react'



export class QRCode extends Component {

    render() {
        return (
            <div>
                <QRCode value={this.props.userIngredients}/>
            </div>
        )
    }
    
}

export default QRCode