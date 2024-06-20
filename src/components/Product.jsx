import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerUi from './ShimmerUI';
import useCallSingleProductApi from '../useCallSingleProductApi';

const Product = () => {
  let { id } = useParams();
 let obj = useCallSingleProductApi(id);

  if (obj == null) return <ShimmerUi />;

  const { thumbnail, title, category, price, rating, stock } = obj;
  return (
    <div className='h-[92vh] w-screen bg-base-200 pt-6'>
      <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto pt-6">
        <figure><img src={thumbnail} alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <button className='btn m-1'>
              Price
              <div className='badge badge-secondary'>{price}</div>
            </button>
            <button className='btn m-1'>
              Rating
              <div className='badge badge-secondary'>{rating}</div>
            </button>
            <button className='btn m-1'>
              Category
              <div className='badge badge-secondary'>{category}</div>
            </button>
            <button className='btn m-1'>
              Stock
              <div className='badge badge-secondary'>{stock}</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
