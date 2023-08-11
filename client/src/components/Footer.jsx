import React from 'react';

const Footer = (propObj) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <p>&copy; {currentYear} NoteWave Dev'd & Design By GH@MKYRENE. All rights reserved.</p>
   <p>Count: {propObj.count}</p>
   
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f4',
    borderTop: '1px solid #ccc',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    color: 'black',
  },
};

export default Footer;
