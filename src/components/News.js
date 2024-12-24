// import React from 'react';

// function News() {
//   const styles = {
//     section: {
//       padding: '0rem 6rem 8rem 6rem',
//       fontFamily: '"Arial", sans-serif',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       gap: '2rem',
//     },
//     ingredientsGrid: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//     //   gap: '2rem',   
//     },
//     ingredientCard: {
//       padding: '1rem',
//       textAlign: 'center',
//       transition: 'transform 0.3s ease',
//     },
//     ingredientImage: {
//       width: '100%',
//       height: 'auto',
//       borderRadius: '10px',
//     },
//     title: {
//       color: '#003049',
//       fontWeight: 'bold',
//     //   marginBottom: '2rem',
//     },

//   };

//   return (
//     <div>
//         <p style={{font:'0.2rem', fontFamily:'Jost'}}>OUR BLOG</p>
//     <h2 style={styles.title}>Latest news</h2>


//     <section style={styles.section}>

//       <div style={styles.ingredientsGrid}>

//         <div style={{ ...styles.ingredientCard, width: '250px' }}>
//           <img src="TP.png" alt="Vitamin C" style={styles.ingredientImage} />
//         </div>

//         <div style={{ ...styles.ingredientCard, width: '250px', }}>
//           <img src="md2.png" alt="Vitamin B3" style={styles.ingredientImage} />

//         </div>

//         <div style={{ ...styles.ingredientCard, width: '250px' }}>
//           <img src="tp.png" alt="Magnesium" style={styles.ingredientImage} />
//         </div>

//         <div style={{ ...styles.ingredientCard, width: '250px' }}>
//           <img src="md2.png" alt="Hyaluronic Acid" style={styles.ingredientImage} />
//         </div>

//         <div style={{ ...styles.ingredientCard, width: '250px'}}>
//           <img src="md1.png" alt="Lactobacillus" style={styles.ingredientImage} />
//         </div>
//         <div style={{ ...styles.ingredientCard, width: '250px' }}>
//           <img src="mx1.png" alt="Magnesium" style={styles.ingredientImage} />
//         </div>
//         <div style={{ ...styles.ingredientCard, width: '250px'}}>
//           <img src="md1.png" alt="Lactobacillus" style={styles.ingredientImage} />
//         </div>
//         <div style={{ ...styles.ingredientCard, width: '250px' }}>
//           <img src="mx1.png" alt="Magnesium" style={styles.ingredientImage} />
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// }

// export default News;
// import React from 'react';

// function News() {
//   const styles = {
//     container: {
//       padding: '0rem 6rem 8rem 6rem',
//       fontFamily: '"Arial", sans-serif',
//     },
//     title: {
//       color: '#003049',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: '2rem',
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(4, 1fr)', // 4 equal columns
//       gap: '1rem', // Space between grid items
//     },
//     gridItem: {
//       borderRadius: '10px',
//       overflow: 'hidden',
//       transition: 'transform 0.3s ease',
//       backgroundColor: '#fff',
//       boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <p style={{ fontSize: '0.8rem', fontFamily: 'Jost', textAlign: 'center' }}>OUR BLOG</p>
//       <h2 style={styles.title}>Latest News</h2>

//       <div style={styles.grid}>
//         {/* Manually defined grid items */}
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '1 / 2', // Spans 2 columns
//             gridRow: '1',
//             height: '400px',
//           }}
//         >
//           <img src="TP.png" alt="Vitamin C" style={styles.image}  />

          
//         </div>
        
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '2 / 3',
//             gridRow: '1',
//             height: '200px',
//           }}
//         >
//           <img src="md2.png" alt="Vitamin B3" style={styles.image} />
//         </div>
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '3 / 4',
//             gridRow: '1',
//             height: '400px',
//           }}
//         >
//           <img src="tp.png" alt="Magnesium" style={styles.image} />
//         </div>
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '4 / 5',
//             gridRow: '1',
//             height: '200px',
//           }}
//         >
//           <img src="md2.png" alt="Hyaluronic Acid" style={styles.image} />
//         </div>
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '1 / 2', // Spans 2 columns
//             gridRow: '2',
//             height: '200px',
//           }}
//         >
//           <img src="md1.png" alt="Lactobacillus" style={styles.image} />
//         </div>
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '2 / 3',
//             gridRow: '2', // Spans 2 rows
//             height: '400px',
//             paddingTop:'-3rem',
//             // position:'absolute',
//           }}
//         >
//           <img src="mx1.png" alt="Magnesium" style={styles.image} />
//         </div>
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '3 / 4',
//             gridRow: '2',
//             height: '200px',
//           }}
//         >
//           <img src="md1.png" alt="Lactobacillus" style={styles.image} />
//         </div>
//         <div
//           style={{
//             ...styles.gridItem,
//             gridColumn: '4 / 5',
//             gridRow: '2',
//             height: '400px',
//           }}
//         >
//           <img src="mx1.png" alt="Magnesium" style={styles.image} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;
import React from 'react';

function News() {
  const styles = {
    container: {
      padding: '0rem 6rem 8rem 6rem',
      fontFamily: '"Arial", sans-serif',
    },
    title: {
      color: '#003049',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // 4 equal columns
      gap: '1rem', // Space between grid items
    },
    gridItem: {
      position: 'relative', // Enables absolute positioning for child elements
      borderRadius: '10px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      height: '200px', // Default height for items
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    textOverlay: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Centers the text
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.7)', // Makes text more readable
    },
  };

  return (
    <div style={styles.container}>
      <p style={{ fontSize: '0.8rem', fontFamily: 'Jost', textAlign: 'center' }}>OUR BLOG</p>
      <h2 style={styles.title}>Latest News</h2>

      <div style={styles.grid}>
        {/* Grid Items */}
        <div style={{ ...styles.gridItem, height: '400px' }}>
          <img src="TP.png" alt="Vitamin C" style={styles.image} />
          <div style={styles.textOverlay}>Vitamin C</div>
        </div>
        <div style={styles.gridItem}>
          <img src="md2.png" alt="Vitamin B3" style={styles.image} />
          <div style={styles.textOverlay}>Vitamin B3</div>
        </div>
        <div style={{ ...styles.gridItem, height: '400px' }}>
          <img src="tp.png" alt="Magnesium" style={styles.image} />
          <div style={styles.textOverlay}>Magnesium</div>
        </div>
        <div style={styles.gridItem}>
          <img src="md2.png" alt="Hyaluronic Acid" style={styles.image} />
          <div style={styles.textOverlay}>Hyaluronic Acid</div>
        </div>
        <div style={styles.gridItem}>
          <img src="md1.png" alt="Lactobacillus" style={styles.image} />
          <div style={styles.textOverlay}>Lactobacillus</div>
        </div>
        <div style={{ ...styles.gridItem, height: '400px' }}>
          <img src="mx1.png" alt="Magnesium" style={styles.image} />
          <div style={styles.textOverlay}>Magnesium</div>
        </div>
        <div style={styles.gridItem}>
          <img src="md1.png" alt="Lactobacillus" style={styles.image} />
          <div style={styles.textOverlay}>Lactobacillus</div>
        </div>
        <div style={{ ...styles.gridItem, height: '400px' }}>
          <img src="mx1.png" alt="Magnesium" style={styles.image} />
          <div style={styles.textOverlay}>Magnesium</div>
        </div>
      </div>
    </div>
  );
}

export default News;
