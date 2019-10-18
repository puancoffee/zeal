import React from 'react'
import axios from 'axios'

class productDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            productData: {}
        }
    }
    componentDidMount() {
        axios
            .get(`${process.env.REACT_APP_API_URL_PRODUCT}/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response);
                this.setState({productData: response.data})

            })
            .catch((err) => {
                console.log(err);
            })
           
    }
    render() {
        let productData = Object.assign({}, this.state.productData)
        productData.product = productData.product || {}

        return (
            <div className='container'>
                <div style={headerStyle}
                    className="card mb-3"
                   >
                    <div className="row no-gutters">
                        <div  className="col-md-4">
                            <img
                                src={`${process.env.REACT_APP_API_URL}/${productData.product.images}`}
                                className="card-img"
                                alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                        {this.state.productData.name}</h5>
                                <p className="card-text">{productData.product.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">Rp.{productData.product.price}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default productDetails

const headerStyle = {
    marginTop: '130px'
}