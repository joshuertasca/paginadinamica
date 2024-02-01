import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from './auth';
import { useParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { NavLink } from "react-router-dom";
import DOMPurify from 'dompurify';


function LoginCode() {


    
    const auth = useAuth();
    const { pass } = useParams();
    const [number, setNumber] = (pass == DOMPurify.sanitize(process.env.REACT_APP_PASSWORD)) ? React.useState(DOMPurify.sanitize(process.env.REACT_APP_USER)) : React.useState('');
  const [password, setPassword] = (pass == DOMPurify.sanitize(process.env.REACT_APP_PASSWORD)) ? React.useState(DOMPurify.sanitize(process.env.REACT_APP_PASSWORD)) : React.useState('');
 

    React.useEffect(() => {
        if (pass == DOMPurify.sanitize(process.env.REACT_APP_PASSWORD)) {
            ingresoLink();
            auth.login({ number, password })
        }

    }, [pass])

   


    return (
        <div className='container-fluid  me-0 pe-0 pt-2'>
            <div className='row mt-5 me-3  me-0 pe-0'>
                <div className='offset-lg-2 offset-md-1 col-lg-5 offset-sm-1  col-sm-9 offset-1 col-11 bg-light  pt-3 pb-5 rounded-5 border' >


                    <div className='d-flex row'>

                        <label className='text-center my-1'>¿quien es julian damil toreo? : es un gato de 10 años naranja</label>
                        
                        
                        

                    </div>
                </div>
            </div>

        </div>
    );
}

export { LoginCode };