import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import Seo from '../components/seo';
import Twitter from '../components/twitter/twitter';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>
      Hi people! {''}
      <span role="img" aria-label="party">
        🎉
      </span>
    </h1>
    <p>Thanks for helping with our site!</p>
    <Twitter />{' '}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
