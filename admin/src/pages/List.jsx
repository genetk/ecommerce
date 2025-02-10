
import axios from "axios";
import React,{ useEffect, useState, useCallback, useRef } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import PropTypes from "prop-types";


const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};


const ListItem = React.memo(({ item, onRemove }) => (
  <div
    className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
    key={item._id}
  >
    <img
      className="w-12"
      src={item.image[0]}
      alt={item.name}
      loading="lazy"  
    />
    <p>{item.name}</p>
    <p>{item.category}</p>
    <p>
      {currency}
      {item.price}
    </p>
    <p
      onClick={() => onRemove(item._id)}
      className="text-right md:text-center cursor-pointer text-lg"
    >
      X
    </p>
  </div>
));

ListItem.displayName = "ListItem";  

ListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const hasFetched = useRef(false);

  
  const fetchList = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  
  const debouncedFetchList = useCallback(debounce(fetchList, 500), [fetchList]);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      debouncedFetchList();  
    }
  }, [debouncedFetchList]);

  
  const removeProduct = useCallback(async (id) => {
    setList((prevList) => prevList.filter((item) => item._id !== id));  // Optimistic update
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        fetchList();  
      }
    } catch (error) {
      toast.error(error.message);
      fetchList();  
    }
  }, [fetchList, token]);

  
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item) => (
          <ListItem key={item._id} item={item} onRemove={removeProduct} />
        ))}
      </div>
    </>
  );
};

List.propTypes = {
  token: PropTypes.string.isRequired,
};

export default List;
