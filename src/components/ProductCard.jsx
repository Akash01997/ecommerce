
let ProductCard = ({obj})=>{

  let {title, thumbnail, rating, price, category} = obj

  return(
        <div className="card w-96 bg-base-300 shadow-xl m-3">
        <figure><img src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
             <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                  <div className="badge badge-secondary bg-green-300">Category: {category}</div>
                  <div className="badge badge-secondary bg-green-300">Rating: {rating}</div>
                </div>
                <p className="p-1">$ {price} </p>
                <button class="bg-black text-white p-4 rounded-2xl">Add</button>
            </div>
        </div>
    );
};


export default ProductCard;