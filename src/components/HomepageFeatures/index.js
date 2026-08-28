import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureListEn = [
  {
    title: 'AI Traffic',
    description: (
      <>
        Bring freeroam maps to life with highly configurable AI Traffic.
      </>
    ),
  },
  {
    title: 'Dynamic Weather',
    description: (
      <>
        Together with <Link to="https://acstuff.ru/patch/">Custom Shaders Patch</Link> AssettoServer delivers dynamic weather, including smooth weather transitions and rain.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        AssettoServer is released under the GNU Affero General Public License and is easily extensible with plugins.
      </>
    ),
  },
];

const FeatureListZh = [
  {
    title: 'AI 车流',
    description: (
      <>
        高度可配置的 AI 车流，让自由漫游地图焕发生机。
      </>
    ),
  },
  {
    title: '动态天气',
    description: (
      <>
        搭配 <Link to="https://acstuff.ru/patch/">Custom Shaders Patch</Link>，AssettoServer 提供动态天气，包括平滑的天气过渡与降雨。
      </>
    ),
  },
  {
    title: '开源',
    description: (
      <>
        AssettoServer 以 GNU Affero 通用公共许可证（AGPL）发布，并可通过插件轻松扩展。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
       
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const {i18n} = useDocusaurusContext();
  const FeatureList = i18n.currentLocale === 'zh-Hans' ? FeatureListZh : FeatureListEn;
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
