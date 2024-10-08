import React from "react";

import ProductDetails from './ProductDetails'

function Products(props){
    return (
            <div className="board-row" style={{marginInline :150}}>
                <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                        <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                        <p className="font-italic text-muted mb-0 small">{props.description}</p>
                        <ProductDetails price={props.price} available={props.available}/>
                        </div> 
                        <img src={props.image} alt ="Generic placeholder" width="100" className="ml-lg-5 order-1 order-lg-2" style={{marginLeft:'auto'}}/>
                    </div>
                </li>
            </div>     
    );
}

export default Products;