import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Memorial Park Gazebo',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'R.B.I. Club',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Christmas on the Platte',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Polar Plunge Special Olympics',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'High School Scholarships',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Annual Take-A-Kid Ice Fishing',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Royalton Community Center',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Royalton High School Activities',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Blanchard Dam Landing',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Memorial Park Dock',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Platte River Day',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Annual Senior Citizens Appreciation Dinner',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Used Eyeglass Recycling',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'R.H.S. Athletic Banquet',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Highway 10 Cleanup',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Meet the Candidates Night',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Crane Meadows Lifetime Sponsor',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Share-A-Meal',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Annual Bass Fishing Tournament',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Royalton Grad Bash',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Volleyball Bash for a Cure',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Chartered Troop 60 - Royalton Boy Scouts',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Arbor Day Trees & Program',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Kids Sight - Vision Screening',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Junior Achievement Contributors',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'R.H.S. Climbing Wall',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Splash Pad Shelter',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: '1000 Books Before Kindergarten',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Community Skating & Hockey Rink',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Hearing Aides',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Purchase Eyeglasses for Needy Families',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Royalton Community Library',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: '"Welcome to Royalton" Signs',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Lions Club International Foundation',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Portable Bleachers for R.H.S. Sports',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Softball & Baseball Field Dugouts',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Annual Christmas Tree Sales',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Chartered Pack 60 - Royalton Cub Scouts',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Electronic Community Message Board',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Alzheimers "Ride for the Mind" Food Booth',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Regulation Little League Field at Elementary School',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Float in Area Parades',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Annual Donation to Community Center',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  },
  {
    title: 'Football Press Box Addition',
    Svg: require('@site/static/img/undraw_empty_street.svg').default,
    description: (
      <></>
    ),
  }
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
