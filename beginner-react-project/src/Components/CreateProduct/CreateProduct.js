import ProductForms from "./ProductForm"
function CreateProduct(){
    function OnCreateProduct(newProduct){
        console.log(newProduct)
    }
    return(
        <div className="row">
            <div className="col-lg-8 mx-auto" style={{backgroundColor:'white', padding:'20px 20px'}}>
                <ProductForms createProduct={OnCreateProduct}></ProductForms>
            </div>
        </div>
    )
}
export default CreateProduct