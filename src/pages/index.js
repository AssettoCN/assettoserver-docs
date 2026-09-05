import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-Hans';



  const tagline = isZh
    ? '为自由漫游而生的 Assetto Corsa 自定义服务器'
    : siteConfig.tagline;
  const description = isZh
    ? '为自由漫游而生的 Assetto Corsa 自定义服务器'
    : 'Custom Assetto Corsa server with focus on freeroam';

  return (
    <Layout description={description}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img src={`${siteConfig.baseUrl}img/logo.svg`} height="100" alt="AssettoServer Logo"></img>
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg margin-right--md" to="docs/intro">
            {isZh ? '开始使用' : 'Get Started'}
          </Link>
          <Link className="button button--secondary button--lg margin-right--md" href="https://github.com/compujuckel/AssettoServer/releases/latest">
            {isZh ? '下载' : 'Download'}
          </Link>
        </div>
      </div>
    </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
