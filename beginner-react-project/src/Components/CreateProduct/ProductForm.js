import React,{ useState } from "react"
// import ProductList from "../ListOfProducts/ProductList";

function ProductForms(props){
    let [pName,UpdateName]=useState('');
    let [pPrice,UpdatePrice]=useState('');
    let [pDescription,UpdateDescription]=useState('');
    let [pAvailable,UpdateAvailable]=useState('');
    let [pImageUrl,UpdateImageUrl]=useState('');

function NameInputHandler(event){
    UpdateName(event.target.value);
}

function PriceInputHandler(event){
    UpdatePrice(event.target.value);
}

function DescriptionInputHandler(event){
    UpdateDescription(event.target.value);
}

function AvailableInputHandler(event){
    UpdateAvailable(event.target.checked);
}

function ImageInputHandler(event){
    UpdateImageUrl(event.target.value)
}

function CreateProductSubmitEventHandler(event){
    event.preventDefault();
    let newProduct={
        pId:1,
        pName:pName,
        pDescription: pDescription,
        isAvailable:Boolean(pAvailable),
        image: pImageUrl,
        price:Number(pPrice)
        
    }
    UpdateName('');
    UpdatePrice('');
    UpdateDescription('');
    UpdateAvailable(false);
    UpdateImageUrl('');

//    console.log(newProduct);
    props.createProduct(newProduct);
}

    return(
        <form className="row g-3" onSubmit={CreateProductSubmitEventHandler} >
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name" 
                    onChange={NameInputHandler}
                    value={pName}
            />

        
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price" 
                    onChange={PriceInputHandler}
                    value={pPrice}
                    />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" 
                    onChange={DescriptionInputHandler}
                    value={pDescription}
                    />
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" 
            onChange={AvailableInputHandler} 
            checked={pAvailable}
            />
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" 
            className="form-control" 
            id="select-image" 
            onChange={ImageInputHandler}
            value={pImageUrl}
            />
            
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    )
}

export default ProductForms