import { Send } from '@mui/icons-material';
const styles = {
  container: {
    height: '60vh',
    backgroundColor: '#fcf5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: '70px',
    marginBottom: '20px',
  },
  desc: {
    fontSize: '24px',
    fontWeight: '300',
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputContainer: {
    width: '50%',
    height: '40px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid lightgray',
  },
  input: {
    border: 'none',
    flex: '8',
    paddingLeft: '20px',
  },
  button: {
    flex: '1',
    border: 'none',
    backgroundColor: 'teal',
    color: 'white',
  },
};

const Newsletter = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Newsletter</h1>
      <div style={styles.desc}>
        Mantente al tanto de las últimas automatizaciones!
      </div>
      <div style={styles.inputContainer}>
        <input style={styles.input} placeholder="Tu email" />
        <button style={styles.button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
