import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Platte River Days',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Take a Kid Fishing',
    Svg: require('@site/static/img/undraw_fishing.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Arbor Day',
    Svg: require('@site/static/img/undraw_environment.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Highway Cleanup',
    Svg: require('@site/static/img/undraw_throw_away.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Vision Screening',
    Svg: require('@site/static/img/undraw_news.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Landing Maintainence',
    Svg: require('@site/static/img/undraw_a_day_at_the_park.svg').default,
    description: (
      <></>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
