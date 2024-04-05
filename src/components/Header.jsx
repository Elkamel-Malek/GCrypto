import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [openNavColor, setOpenNavColor] = useState(false);

  const toggleNavbar = () => {
    setOpenNavColor(!openNavColor);
  };

  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>GCrypto</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleNavbar}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse open={openNavColor} navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink to='/'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Courses
                </MDBDropdownToggle>
                <MDBDropdownMenu dark>
                  <MDBDropdownItem>
                    <MDBNavbarLink to='/'>Crypto</MDBNavbarLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBNavbarLink to='/blockchain'>Blockchain</MDBNavbarLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBNavbarLink to='/nft'>NFT</MDBNavbarLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBNavbarLink to='/mindset'>Mindset</MDBNavbarLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
