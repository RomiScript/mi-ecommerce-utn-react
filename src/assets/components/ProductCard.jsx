import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      textAlign: 'center'
    }}>
      <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain' }} />
      <h2 style={{ fontSize: '16px', marginTop: '10px' }}>{product.title}</h2>
      <p style={{ fontWeight: 'bold', color: '#2c7' }}>${product.price}</p>
      <Link to={`/product/${product.id}`} style={{ marginTop: '10px', display: 'inline-block', color: 'blue' }}>
        Ver detalle
      </Link>
    </div>
  );
};

export default ProductCard;
