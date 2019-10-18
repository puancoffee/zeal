import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar, faTimesCircle, faMap} from '@fortawesome/free-solid-svg-icons'

export default class Product extends React.Component {
    constructor(props) {
        super()
        this.state = {
            width: window.innerWidth,
            products: []
        }
    }
    componentDidMount() {
        axios
            .get(`${process.env.REACT_APP_API_URL_PRODUCT}`)
            .then((response) => {
                const products = response.data
                console.log(response)
                this.setState({products})

            })
            .catch((err) => {
                console.log(err);

            })
    }

    render() {
        const {width} = this.state
        const isMobile = width <= 500

        if (isMobile) {
            return (
                <div className='container'>
                <div className="row">
                {this
                    .state
                    .products
                    .map(listProduct => <div className="col-12" key={listProduct._id}>
                        <div style={imageStyle} >
                        <NavLink to={`/details/detail/${listProduct._id}`}>
                            <img
                                style={slideStyles}
                                src={`${process.env.REACT_APP_API_URL}/${listProduct.product.images}`}
                                alt="Lorem ipsum"/></NavLink>
                            <small>{listProduct.product.category.name}</small>
                            <h5>{listProduct.product.name}</h5>
                            <small>{listProduct.description}</small>
                            <h5>Rp.{listProduct.product.price},-</h5>
                            <h6><FontAwesomeIcon icon={faCalendar}/>
                                &nbsp; {listProduct.date}</h6>
                            <h6><FontAwesomeIcon icon={faTimesCircle}/>
                                &nbsp; 10:00 WIB</h6>
                            <small><FontAwesomeIcon icon={faMap}/>
                                &nbsp; {listProduct.location}</small>
                        </div>
                    </div>)}
            </div>
            </div>
            )
        }
        return (
            <div className='container'>
            <div class="row">
                {this
                    .state
                    .products
                    .map(listProduct => <div className="col-3" key={listProduct._id}>
                        <div style={imageStyle} >
                        <NavLink to={`/details/detail/${listProduct._id}`}>
                            <img
                                style={slideStyles}
                                src={`${process.env.REACT_APP_API_URL}/${listProduct.product.images}`}
                                alt="Lorem ipsum"/></NavLink>
                            <small>{listProduct.product.category.name}</small>
                            <h5>{listProduct.product.name}</h5>
                            <small>{listProduct.description}</small>
                            <h5>Rp.{listProduct.product.price},-</h5>
                            <h6><FontAwesomeIcon icon={faCalendar}/>
                                &nbsp; {listProduct.date}</h6>
                            <h6><FontAwesomeIcon icon={faTimesCircle}/>
                                &nbsp; 10:00 WIB</h6>
                            <small><FontAwesomeIcon icon={faMap}/>
                                &nbsp; {listProduct.location}</small>
                        </div>
                    </div>)}
            </div>
            </div>
        )
    }
}

const slideStyle = {
    display: 'block',
    width: '100%',
    maxHeight: '360px',
    borderRadius: '8px'
}
const slideStyles = {
    display: 'block',
    width: '100%',
    maxHeight: '360px',
    borderRadius: '8px'
}
const container = {
    paddingRight: '0px',
    paddingLeft: '0px',
    marginLeft: 'auto',
    marginRight: 'auto'
}
const imageStyle = {
    display: 'block',
    margin: '15px',
    fontFamily: "Barlow Semi Condensed"
}