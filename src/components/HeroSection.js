import React from 'react';
import Features from './Features';

function HeroSection() {
  const styles = {
    section: {
    //   backgroundColor: '#f6f9fc',
      padding: '0rem 6rem 2rem 6rem',
      fontFamily: '"Arial", sans-serif',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
    },


        bg: {
            background: 'linear-gradient(to bottom, rgba(226, 245, 251, 1) 75%, rgba(255, 255, 255, 1) 25%)'
        },
    title: {
        
      fontSize: '3rem',
      color: '#003049',
      fontWeight: 'bold',
      flexBasis: '20%',
      marginBottom:'-7rem',
      marginTop:'-4rem',
    },
    card: {
      textAlign: 'left',
      flexBasis: '25%',
      marginTop:'2rem',
    },
    cardText: {
      fontSize: '1rem',
      color: '#999',
      marginBottom: '0.5rem',
    },
    cardHeading: {
      fontSize: '2rem',
      color: '#003049',
      marginBottom: '1rem',
    },
    button: {
      backgroundColor: '#003049',
      color: '#fff',
      border: 'none',
      padding: '0.7rem 1.5rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    productImage: {
      flexBasis: '25%',
      maxWidth: '50%',
      height: 'auto',
    //   backgroundColor:'rgba(255, 233, 181, 1)',
      background: 'linear-gradient(to Top, rgba(255, 233, 181, 1) 75%, rgba(0, 0, 0, 0) 25%)',
      borderRadius: '90px 0px 90px 0px',
    },
    benefits: {
      display: 'flex',
      flexDirection: 'column',
    //   gap: '1rem',
      flexBasis: '30%',
      marginTop:'3rem',
      
    },
    benefitCard: {
    //   backgroundColor: '#fff',
    //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      padding: '0.1rem',
      textAlign: 'start',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      
    },
    benefitImage: {
      width: '50px',
      height: '50px',
    },
    benefitText: {
      fontSize: '0.8rem',
      color: '#333',
      flexDirection:'start',
    },
  };

  return (
    <div  style={styles.bg}>
    <div style={styles.title}>
    <h1 style={{fontFamily:'Jost'}}>Essential Vitamins</h1>
  </div>
    <section style={styles.section}>

      <div style={styles.card}>
        <p style={styles.cardText}>Online Medical Supplies</p>
        <h3 style={styles.cardHeading}>Get Your Vitamins & Minerals</h3>
        <button style={styles.button}>Explore</button>
      </div>
      <div>
        <img
          src="heroimg.png"
          alt="Probiotics"
          style={styles.productImage}
        />
      </div>
      <div style={styles.benefits}>
        <div style={styles.benefitCard}>
          <img src="ac.png" alt="Vitamins" style={styles.benefitImage} />
          <p style={styles.benefitText}><h1>Vitamins</h1> Increased Vitamins and minerals in your diet</p>
        </div>
        <div style={styles.benefitCard}>
          <img src="ab.png" alt="Weight Loss" style={styles.benefitImage} />
          <p style={styles.benefitText}><h1>Weight Loss</h1> Find scientifically proven solutions</p>
        </div>
        <div style={styles.benefitCard}>
          <img src="ad.png" alt="Functional Foods" style={styles.benefitImage} />
          <p style={styles.benefitText}><h1>Functional Foods</h1> From protein powders to baby formula</p>
        </div>
      </div>
     
    </section>
    <Features />
    </div>
  );
}

export default HeroSection;
