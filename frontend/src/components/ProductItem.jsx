import  { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={()=>window.scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className=' overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className=' text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}
ProductItem.propTypes = {
  id: PropTypes.string.isRequired, // Ensure the type matches your data
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming `image` is an array of strings
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};


export default ProductItem
