import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit'; // Importer les composants de MDBReactUIKit
import Button from '@mui/material/Button'; // Importer Button de Material-UI
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <MDBRow className='d-flex justify-content-center align-items-center vh-0' style={{ backgroundColor: '#343a40' }}>
        <MDBCol col='12'>
          <MDBCard className='text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px', backgroundColor: '#212529' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase" style={{ color: 'white' }}>Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <MDBInput id='email' type='email' size="l" placeholder='Email' labelClass='text-white' wrapperClass='mb-3 mx-5 w-100' style={{ backgroundColor: '#495057', border: '1px solid white', color: 'white' }} />
              <MDBInput id='password' type='password' size="l" placeholder='Password' labelClass='text-white' wrapperClass='mb-4 mx-5 w-100' style={{ backgroundColor: '#495057', border: '1px solid white', color: 'white' }} />
              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <Link to="/register">
                <Button
                  variant="outlined"
                  style={{ color: '#0d6efd', borderColor: '#0d6efd', width: '100%' }}
                >
                  Login
                </Button>
              </Link>
              <div className='mt-3 mb-5 text-center'>
                <p className="mb-1" style={{ color: 'white' }}>Or Login with</p>
                <div>
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='facebook-f' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='white' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='twitter' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='google' size="lg" />
                  </MDBBtn>
                </div>
              </div>
              <div>
                <p className="mb-0 text-center">Don't have an account? <Link to="/register" className="text-white-40">Register</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Login;
