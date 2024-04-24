import React, { useEffect } from 'react';
import Layout from '@theme/Layout'; 

function Resume() {

  useEffect(() => {
    document.body.classList.add('static-document-page');

    return () => {
      document.body.classList.remove('static-document-page');
    };
  }, []);

  const iframeContainerStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '80%', 
    height: 0,
    overflow: 'hidden',
    backgroundColor: 'var(--ifm-color-primary)', 
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  };

  return (
    <Layout title="My Resume">
      <div className="container margin-vert--lg">
        <div style={iframeContainerStyle}>
          <iframe 
              src="/assets/IanResume.pdf"
              title="Resume"
              style={iframeStyle}
          >
              This browser does not support PDFs. Please <a href="/assets/IanResume.pdf">download the PDF</a> to view it.
          </iframe>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
