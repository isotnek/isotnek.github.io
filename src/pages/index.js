import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import heroImage from '../../static/img/profilePhotos/selfImage3.jpg';



import styles from './index.module.css';

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
        </div>
        <div style={heroTextContainerStyle}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
