import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI Research & Practice',
    imageSrc: require('@site/static/img/icons/science.png').default,
    description: (
      <>
        Researching applied and foundational machine learning, and interested in applications of neuromorphic information processing for robust and performant autonomous systems.
      </>
    ),
    imgTitle: 'Icons created by Freepik - Flaticon',

  },
  {
    title: 'Co-Founder of AI Squared',
    imageSrc: require('@site/static/img/icons/AIS_logo.png').default,
    description: (
      <>
        Working to empower knowledge workers to make better decisions, by integrating AI-derived insights when, where, and how they will be most impactful.
      </>
    ),
    imgTitle: 'www.squared.ai'
  },
  {
    title: 'Biomechanist & Neuroscientist',
    imageSrc: require('@site/static/img/icons/brain.png').default,
    description: (
      <>
        Bridged neuroscience and biomechanics to study neural contributions to balance during human locomotion.
      </>
    ),
    imgTitle: 'Brain icons created by Freepik - Flaticon'
  },
];

const iconStyle = {
  width: '160px',
  height: '160px',
  objectFit: 'contain'
};

function Feature({Svg, imageSrc, title, description, imgTitle}) {  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg 
          ? <Svg style={iconStyle} role="img" /> 
          : <img src={imageSrc} alt={title} title={imgTitle} style={iconStyle} />} 
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
