import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
            <MDBRow className='d-flex justify-content-center align-items-center vh-90'>
                <MDBCol col='14'>
                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                            <p className="text-white-50 mb-4">Please fill in the following information to create an account.</p>
                            {/* Utilisation des inputs de MDBReactUIKit avec des styles similaires à ceux de la page Login */}
                            <MDBInput placeholder='Full Name' id='fullname' type='text' size="l" labelClass='text-white' wrapperClass='mb-3 mx-5 w-100' style={{ backgroundColor: '#495057', border: '1px solid white', color: 'white' }} />
                            <MDBInput placeholder='Email address' id='email' type='email' size="l" labelClass='text-white' wrapperClass='mb-3 mx-5 w-100' style={{ backgroundColor: '#495057', border: '1px solid white', color: 'white' }} />
                            <MDBInput placeholder='Password' id='password' type='password' size="l" labelClass='text-white' wrapperClass='mb-3 mx-5 w-100' style={{ backgroundColor: '#495057', border: '1px solid white', color: 'white' }} />
                            <MDBInput placeholder='Confirm Password' id='confirmPassword' type='password' size="l" labelClass='text-white' wrapperClass='mb-3 mx-5 w-100' style={{ backgroundColor: '#495057', border: '1px solid white', color: 'white' }} />

                            <Button
                                variant="outlined"
                                style={{ color: '#0d6efd', borderColor: '#0d6efd' }}
                            >
                                Register
                            </Button>

                            <div className='d-flex flex-row mt-3 mb-4'>
                                <MDBIcon fab icon='facebook-f' size="lg" className='m-3' style={{ color: 'white' }} />
                                <MDBIcon fab icon='twitter' size="lg" className='m-3' style={{ color: 'white' }} />
                                <MDBIcon fab icon='google' size="lg" className='m-3' style={{ color: 'white' }} />
                            </div>
                            <div>
                                <p className="mb-0">Already have an account? <Link to="/login" className="text-white-40">Login</Link></p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default Register;
