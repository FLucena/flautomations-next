import { Send } from '@mui/icons-material';
import { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#fcf5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '40px 0',
  },
  title: {
    fontSize: '70px',
    margin: '2px',
  },
  desc: {
    fontSize: '24px',
    fontWeight: '300',
    margin: '20px 0',
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
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);

    // Clear the input field after submitting
    setEmail('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Newsletter</h1>
      <div style={styles.desc}>
        Mantente al tanto de las últimas automatizaciones!
      </div>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            placeholder="Tu email"
            value={email}
            onChange={handleInputChange}
          />
          <button style={styles.button} type="submit">
            <Send />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;