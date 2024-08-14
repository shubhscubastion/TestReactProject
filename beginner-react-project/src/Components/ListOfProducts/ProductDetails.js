import Button from "./Buttons";
import { useState } from 'react';
function ProductDetails(props){
    let [productCount,setCount]=useState(0);
    
    function FormattedCountofProduct(){    
        return (productCount > 0 ? productCount : "Zero"
        )
    }
    let IncrementNumber =function (){
        setCount(++productCount)
        
    }
    let DecrementNumber =function (){
        setCount(--productCount);
        
    }
    let badgeClass = 'badge-padding-240 badge '
    badgeClass += props.available ? 'bg-success' : 'bg-danger'
    let style = {
        padding : '0px 20px',
        fontSize:14
    }
        return(
            <div className="d-flex align-items-center justify-content-start mt-1">
                                    <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>${props.price}</h6>
                                    <Button eventHandler={DecrementNumber}>-</Button>
                                    <span style={style}>{FormattedCountofProduct()}</span>
                                    <Button eventHandler={IncrementNumber}>+</Button>
                                    <span className={badgeClass}>{props.available ? 'Available':'Unavailable'}</span>
                                </div>
        );
}

export default ProductDetails;