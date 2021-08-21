
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,  } from "react";
import  {getProducts as listProdeuct}  from '../redux/actions/product.action';
import Loading from '../components/Loading';



const Home = ({filter}) => {


        
    const dispatch= useDispatch() ;

    const getDataPorducts =useSelector(state => state.getProducts)
    const { products , loading , error} = getDataPorducts

    useEffect(() => {
        dispatch(listProdeuct())
    },[dispatch])

  
    let dataSearch = products.filter(item => {
        return Object.keys(item).some(key => 
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })




    return (
        <div>

            <div className=" container">
               
                    <div className="prodect ">
                       
                    <div className="home_products">
                        {loading ? (<div className="Loading"> <Loading /> </div>) : error ? ( <h2> {error}</h2>) :( dataSearch.map((product)=> <Product
                        key={product.id}
                        name={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        category={product.category}/>))}
                      </div>
                    </div>
                

            </div>
        </div>
    )
}

export default Home
