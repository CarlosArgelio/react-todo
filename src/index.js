import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToDo as App } from './pages'

// function App(props) {
//     return (
//       <h1>¡{props.saludo}, {props.nombre}!</h1>
//     );
//   }
  
//   function withSaludo(saludo) {
//     return function WrappedComponentWithSaludo(WrappedComponent) {
//       return function ComponenteDeVerdad(props) {
//         return (
//           <React.Fragment>
//             <WrappedComponent {...props} saludo={saludo} />
//             <p>Estamos acompañando al WrappedComponent</p>
//           </React.Fragment>
//         );
//       }
//     }
//   }
  
//   const AppWithSaludo = withSaludo('Wenas')(App);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppWithSaludo nombre="Juanita" />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
