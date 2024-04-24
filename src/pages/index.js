import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import heroImage from '../../static/img/profilePhotos/selfImage3.jpg';

import styles from './index.module.css';

function CustomIcon({ to, html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };
  
  const heroImageContainerStyle = {
    width: '45%',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
  };
  
  const heroTextContainerStyle = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const heroImageStyle = {
    width: '500px', // adjust to change image size
  };

  return (
    <header className={clsx('hero hero--primary')}>
      <div style={containerStyle}>
        <div style={heroImageContainerStyle}>
          <img src={heroImage} alt="Hero" style={heroImageStyle} />
          <CustomIcon
            to="https://www.linkedin.com/in/yourprofile/"
            html={`<a href="https://www.linkedin.com/in/yourprofile/" class="custom-icon linkedin-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="custom-icon">
                          <path d="M416 32H31.9C..."></path>
                      </svg>
                  </a>`}
          />
          <CustomIcon
            to="https://github.com/yourusername"
            html={`<a href="https://github.com/yourusername" class="custom-icon github-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="custom-icon">
                          <path d="M165.9 397.4c0 2-..."></path>
                      </svg>
                  </a>`}
          />
        </div>
        <div style={heroTextContainerStyle}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <CustomIcon
            to="/contactMe"
            html={`<a href="/contactMe" class="custom-icon email-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="custom-icon">
                          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                      </svg>
                  </a>`}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      //title={`Hello from ${siteConfig.title}`}
      title={'Ian Sotnek - Technical Product Manager & Researcher'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
