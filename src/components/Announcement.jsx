const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    padding: '10px',
  },
  icon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

const Announcement = () => {
  return (
    <div style={styles.container}>
      <span style={styles.icon}>🎉</span>
      <span style={styles.text}>Super Deal!</span>
      <button style={styles.button}>Learn More</button>
    </div>
  );
};

export default Announcement;
