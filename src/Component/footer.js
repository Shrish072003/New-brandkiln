import React, { useState, useEffect } from 'react';

const Footer = () => {
  const defaultAddress = 'E 15/16. Mantri Kishor Park. Range Hills Road. Pune- 411007';
  // Initialize the address state with a default value
  const [address, setAddress] = useState(defaultAddress);

  useEffect(() => {
    // Function to fetch and update the address based on the selected country
    const updateAddressBasedOnCountry = () => {
      const savedCountry = localStorage.getItem('selectedCountry');

      // Assuming you might want to change address based on the country, use a switch or similar logic
      switch (savedCountry) {
        case 'India':
          setAddress('E 15/16. Mantri Kishor Park. Range Hills Road. Pune- 411007');
          break;
        case 'Mexico':
          setAddress('Monterrey N.L. San Pedro Garza Garcia. #C.P 66290');
          break;
        case 'UAE':
          setAddress('1604, Space Box, Park Place tower, SZR. Dubai, UAE');
          break;
        default:
          setAddress(defaultAddress);
          break;
      }
    };

    // Listen for changes in localStorage to update the address dynamically
    window.addEventListener('storage', updateAddressBasedOnCountry);

    // Check and update address on component mount
    updateAddressBasedOnCountry();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', updateAddressBasedOnCountry);
    };
  }, []);

  return (
    <div className='d-flex justify-content-between dfnghdhbf'>
      <div className='d-flex gap-3 hchdfc'>
        <a href="https://wa.me/+917900140363">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/company/brandkiln/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="mailto:manas@BrandKiln.com">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
        <a className='dfgdfgdf'>{address}</a>
      </div>
      <div className='hiden'>Copyright © 2024 Brand Kiln Pvt. Ltd</div>
      <div className='vis'>© 2024 Brand Kiln Pvt. Ltd</div>
    </div>
  );
}

export default Footer;
