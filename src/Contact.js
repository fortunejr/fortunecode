import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xeojngzn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const styles = {
    form: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1em',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1em',
      minHeight: '100px',
    },
    button: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1em',
      width: '100%',
      marginTop: '10px',
    },
    error: {
      color: 'red',
      fontSize: '0.9em',
      marginTop: '5px',
    },
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
  <div style={styles.formGroup}>
    <label htmlFor="email" style={styles.label}>
      Email Address
    </label>
    <input
      id="email"
      type="email"
      name="email"
      style={styles.input}
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
      style={styles.error}
    />
  </div>

  <div style={styles.formGroup}>
    <label htmlFor="message" style={styles.label}>
      Message
    </label>
    <textarea
      id="message"
      name="message"
      style={styles.textarea}
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
      style={styles.error}
    />
  </div>

  <button type="submit" disabled={state.submitting} style={styles.button}>
    Submit
  </button>
</form>

  </div>
  )
}

export default Contact