import Button from "./Buttons";

let productCount=0;

function FormattedCountofProduct(){    
    return productCount > 0 ? productCount : "Zero"
}

function ProductDetails(props){
    let badgeClass = 'badge-padding-240 badge '
    badgeClass += props.available ? 'bg-success' : 'bg-danger'
    let style = {
        padding : '0px 20px',
        fontSize:14
    }
        return(
            <div className="d-flex align-items-center justify-content-start mt-1">
                                    <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>${props.price}</h6>
                                    <Button>+</Button>
                                    <span style={style}>{FormattedCountofProduct()}</span>
                                    <Button>-</Button>
                                    <span className={badgeClass}>{props.available ? 'Available':'Unavailable'}</span>
                                </div>
        );
}

export default ProductDetails;