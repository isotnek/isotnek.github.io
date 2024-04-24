import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI Research & Practice',
    imageSrc: require('@site/static/img/icons/science.png').default,
    description: (
      <>
        Researching applied and foundational machine learning and interested in complex systems and control theory, especially as they apply to biology.
      </>
    ),
    imgTitle: 'Icons created by Freepik - Flaticon',

  },
  {
    title: 'Looking for New Opportunities',
    imageSrc: require('@site/static/img/icons/job.png').default,
    description: (
      <>
        As a co-founding PM I recently took AI Squared from 0 to a $60MM USD + valuation, and I'm looking for opportunities to do it again. If you could use a scrappy, technical, and customer-focused PM please drop me a line!
      </>
    ),
    imgTitle: 'Job search icon created by Freepic - Flaticon'
  },
  {
    title: 'Biomechanist & Neuroscientist',
    imageSrc: require('@site/static/img/icons/brain.png').default,
    description: (
      <>
        Background in bridging neuroscience and biomechanics to study neural contributions to balance during human locomotion.
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
