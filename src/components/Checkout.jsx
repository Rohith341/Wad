import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Checkout Page</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <h2>Your cart is empty.</h2>
        </div>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="card mb-3" style={{ width: '700px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt={product.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Price: </strong>{product.price} ₹</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <button onClick={handleBuyNow} className="btn btn-primary">Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
