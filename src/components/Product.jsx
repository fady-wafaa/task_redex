// import { useEffect } from "react";
// import { useSelector ,useDispatch } from "react-redux";
// import  {getProducts as listProdeuct}  from '../redux/actions/product.action';







const Product = ({ image, description, price, name ,id }) => {


    return (
        < >
          
            
          
            <div class="card" key ={id} >
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                     
                        <p class="card-text">{description}</p>
                        <a href="/" class="btn btn-primary">{price}</a>
                    </div>
            </div>
            

        </>
    )
}

export default Product
