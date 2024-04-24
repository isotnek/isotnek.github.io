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
          If you want to connect, collaborate, or just want to chat, please don't hesitate to reach out!
        </p>
        <button className="button button--primary" onClick={handleMailto}>
          Email Me
        </button>
      </div>
    </Layout>
  );
}

export default ContactPage;
