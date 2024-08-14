import './app.css'
import CreateProduct from './Components/CreateProduct/CreateProduct';
import ProductList from './Components/ListOfProducts/ProductList';

function App(){
    return(
    <> 
        <CreateProduct></CreateProduct>
        <ProductList></ProductList>
    </>
    );
}
export default App