import React from 'react';
import Layout from '@theme/Layout';

function ContactPage() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
    },
    message: {
      marginBottom: '20px',
      fontSize: '1.2em',
      textAlign: 'center',
      maxWidth: '600px',
    },
  };

  const handleMailto = () => {
    window.location.href = "mailto:ian.sotnek@gmail.com";
  }

  return (
    <Layout title="Contact Me">
      <div style={styles.container}>
        <h1>Contact Me</h1>
        <p style={styles.message}>
          I always appreciate connecting with passionate individuals. Whether you have questions, ideas, or just want to chat, don't hesitate to reach out!
        </p>
        <button className="button button--primary" onClick={handleMailto}>
          Email Me
        </button>
      </div>
    </Layout>
  );
}

export default ContactPage;
