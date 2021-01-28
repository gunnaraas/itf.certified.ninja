import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_road_to_knowledge.svg',
    description: (
      <>
        The certified.ninja course notes are designed to be an easy to use
        supplementary resource as you prepare for the CompTIA ITF+ Certification Exam.
        Read the textbook and regularly attending classes, you will
        be well prepared for the certification exam!
      </>
    ),
  },
  {
    title: 'Collaborative Learning',
    imageUrl: 'img/undraw_Personal_notebook.svg',
    description: (
      <>
        Interested in adding extra information to the notebook?
        This website is open source, hosted on GitHub and rendered with Docusaurus!
        Press the GitHub button for instructions on how to edit this eBook.
      </>
    ),
  },
  {
    title: 'Open New Career Paths',
    imageUrl: 'img/undraw_Options.svg',
    description: (
      <>
        By offering a broad overview of many areas of information technology,
        this class helps give you insight into the many possible career paths
        for you in Information Technology!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="An online learning resource for MNCFS students preparing for the CompTIA ITF+ exam">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
