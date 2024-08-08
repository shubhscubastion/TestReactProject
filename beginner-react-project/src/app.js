import './app.css'
import Products from './Components/Products';

const differentProducts = [
    {
        pId:1,
        pName:'Milk',
        pDescription: 'Minim voluptate anim minim sit laboris Lorem est consequat id nisi velit veniam pariatur ullamco.',
        isAvailable:true,
        image: '/Images/milk.png',
        price:20
    },
    {
        pId:2,
        pName:'Cottage Cheese',
        pDescription: 'Labore enim aliqua amet laboris anim sunt officia nisi labore elit incididunt.',
        isAvailable:false,
        image: '/Images/cottage-cheese.png',
        price:99
    },
    {
        pId:3,
        pName:'Brocoli',
        pDescription:'Deserunt non veniam mollit aute amet laboris mollit nulla officia.',
        isAvailable:true,
        image:'/Images/broccoli.png',
        price:30
    }
]
function App(){
    return( 
        <div className='row' style={{'margin-bottom':20}}>
            <ul className="list-group shadow">
                <Products 
                    id={differentProducts[0].pId}
                    name={differentProducts[0].pName}
                    description={differentProducts[0].pDescription}
                    available={differentProducts[0].isAvailable}
                    image={differentProducts[0].image}
                    price={differentProducts[0].price}
                ></Products>
                <Products 
                    id={differentProducts[1].pId}
                    name={differentProducts[1].pName}
                    description={differentProducts[1].pDescription}
                    available={differentProducts[1].isAvailable}
                    image={differentProducts[1].image}
                    price={differentProducts[1].price}
                ></Products> 
                    <Products 
                            id={differentProducts[2].pId}
                            name={differentProducts[2].pName}
                            description={differentProducts[2].pDescription}
                            available={differentProducts[2].isAvailable}
                            image={differentProducts[2].image}
                            price={differentProducts[2].price}>
                    </Products> 
            </ul>
        </div>
    );
}
export default App