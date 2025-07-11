import React, { useEffect, useState } from 'react';
import ProductCard from "../assets/components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 4))) // 
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <div>
      <h1>¡Bienvenido/a a La Tiendita!</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '20px',
        color: '#333',
        padding: '0 20px'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
