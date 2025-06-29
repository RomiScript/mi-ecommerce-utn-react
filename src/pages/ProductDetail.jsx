import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // capturamos el ID de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>No se encontró el producto.</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ height: '300px', objectFit: 'contain' }} />
      <p style={{ marginTop: '20px' }}>{product.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '18px' }}>${product.price}</p>
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Gracias por tu compra ✨')}
      >
        Comprar
      </button>
    </div>
  );
};

export default ProductDetail;
