import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import Navbar from "./navbar";

const Layout = () => {
  const navigate   = useNavigate();
  const isLoggedIn = useContext( UserContext );

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    // Se l'utente non è loggato, lo reindirizziamo alla pagina di login.
    // In generale, il controllo sul se l'utente sia loggato o meno si
    // effettua con una chiamata ad un service. Ma a scopo didattico puoi
    // simularne il funzionamento settato a TRUE una variabile boolean (isLoggedIn) memorizzata nel Context
    // (https://reactjs.org/docs/context.html)
    // dell'applicazione (siccome deve poter essere letta sia dal componente 'Layout' che 'Login')
    // quando l'utente fa click sul pulsante di login, e successivamente 
    // leggere quella variabile in questo punto per controllare il ridirezionamento
    // della navigazione.
    if ( !isLoggedIn ) {
      navigate( '/login' );
    }
  }, [ navigate, isLoggedIn ] );

  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  );
};

export default Layout;