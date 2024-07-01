import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleRemove = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };



  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <Link to="/" className="btn btn-warning">Continue Shopping...</Link>
          </div>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="card mb-3 my-5" style={{ width: '700px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt={product.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">
                      {product.price} ₹
                    </button>
                    <button 
                      onClick={() => handleRemove(product.id)} 
                      className="btn btn-danger mx-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length !== 0 && (
        <div className="container text-center my-5" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button onClick={handleCheckout} className="btn btn-warning mx-5">CheckOut</button>
          
        </div>
      )}
    </>
  );
};

export default Cart;
