import React from 'react';

const Login = () => {
  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="tu@email.com"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="********"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={(e) => {
            e.preventDefault();
            alert('Inicio de sesión simulado ');
          }}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
