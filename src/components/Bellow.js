import React from 'react'; 
import News from './News';

function Bellow() {
  const styles = {
    container: {
      fontFamily: '"Arial", sans-serif',
      padding: '2rem',
    //   backgroundColor: '#f6f9fc',
    },
    newsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
    },
    newsCard: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      overflow: 'hidden',
      textAlign: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    newsImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    footer: {
      backgroundColor: '#003049',
      color: '#ffffff',
      padding: '2rem',
      textAlign: 'center',
      
    },
    footerGrid: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '2rem',
      
      
   
      
    },
    footerItem: {
        minWidth: '20rem',
      backgroundColor:'rgba(33, 93, 114, 1)',
      borderRadius:'7%',
    },
    footerLogo: {
      marginBottom: '1rem',
      height:'20%',
      width:'20%',
    },
    footerText: {
      fontSize: '0.9rem',
      paddingLeft:'5rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* Better Ingredients Section */}
      <section style={{ padding: '2rem' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    <div style={{textAlign: 'start',width: '500px'}}>
        <h3 style={{Color: 'BLUE'}}>INGREDIENTS</h3>
      <h2 style={{ fontSize: '2rem' }}>Better Ingredients</h2>
      <p style={{ fontSize: '0.7rem', color: '#666' }}>
        Only the best when you choose products offered on our platform - <br></br>
        high-quality ingredients for high-quality products.
      </p>
    </div>
    <div style={{

      borderRadius: '8px',
      textAlign: 'center',
    //   backgroundColor: '#f9f9f9',
      width: '300px'
    }}>
      <img src="abb.png" alt="Vitamin C" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      {/* <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Vitamin C</h4> */}
      {/* <p style={{ fontSize: '1rem', color: '#666' }}>Vitamin C as ascorbic acid</p> */}
      {/* <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>See More</button> */}
    </div>
    <div style={{
      borderRadius: '8px',
      textAlign: 'center',
    //   backgroundColor: '#f9f9f9',
      width: '300px'
    }}>
      <img src="bb.png" alt="Vitamin B3" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      {/* <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Vitamin B3</h4>
      <p style={{ fontSize: '1rem', color: '#666' }}>Niacin for healthy gut and skin</p>
      <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>See More</button> */}
    </div>
    <div style={{
    //   border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
    //   backgroundColor: '#f9f9f9',
      width: '300px'
    }}>
      <img src="abd.png" alt="Magnesium" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      {/* <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Magnesium</h4>
      <p style={{ fontSize: '1rem', color: '#666' }}>Boost energy and support muscle function</p>
      <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>See More</button> */}
    </div>
    <div style={{
    //   border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
    //   backgroundColor: '#f9f9f9',
      width: '300px'
    }}>
      <img src="aba.png" alt="Hyaluronic Acid" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      {/* <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hyaluronic Acid</h4>
      <p style={{ fontSize: '1rem', color: '#666' }}>Soft skin</p>
      <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>See More</button> */}
    </div>
    <div style={{
    //   border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem',
    //   borderRadius: '8px',
      textAlign: 'center',
    //   backgroundColor: '#f9f9f9',
      width: '300px'
    }}>
      <img src="abc.png" alt="Lactobacillus" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      {/* <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lactobacillus</h4>
      <p style={{ fontSize: '1rem', color: '#666' }}>Improve your gut microbiome</p>
      <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>See More</button> */}
    </div>
    <div style={{
    //   border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
    //   backgroundColor: '#f9f9f9',
      width: '100px'
    }}>
      <img src="xyz.png" alt="Lactobacillus" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      {/* <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lactobacillus</h4>
      <p style={{ fontSize: '1rem', color: '#666' }}>Improve your gut microbiome</p>
      <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>See More</button> */}
    </div>
  </div>
</section>


<News/>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div style={styles.footerItem}>
            <p>Phone Number</p>
            <p>+91 7750824225</p>
          </div>
          <div style={styles.footerItem}>
            <p>Email Address</p>
            <p>tridebkumarp@gmail.com</p>
          </div>
          <div style={styles.footerItem}>
            <p>Office Location</p>
            <p>Alok City Silvassa, Zone 396230</p>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'flex-start', paddingLeft:'4.4rem'}}>
          <img src="ftr.png" alt="Elbrit Logo" style={styles.footerLogo} />
          <p style={styles.footerText  }>
          Your health, physical and emotional well-being is important 
          <br></br>
          to us. We are always by your side and have made it even 
            <br></br>  easier for you to find the necessary vitamins.

          </p>
        </div>
        <p style={{display:'flex', paddingLeft:'4.4rem'}}>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </footer>
    </div>
  );
}

export default Bellow;
