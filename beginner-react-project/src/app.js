import './app.css'
import Products from './Components/Products';
function App(){
    return( 
        <div className='row' style={{'margin-bottom':20}}>
        <Products/>  
        <Products/>  
        <Products/>  
        <Products/>  
        </div>
    );
}
export default App