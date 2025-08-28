import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Obelis Docs" description="Deploy cloud apps faster with AI assistance">
      <section className="heroBanner">
        <div className="container">
          <Heading as="h1" style={{fontSize:'3rem', marginBottom:'.5rem'}}>Obelis Docs</Heading>
          <p style={{opacity:.95, fontSize:'1.125rem'}}>Deploy cloud apps faster with AI assistance</p>
          <div className="hero__cta">
            <Link className="button button--primary button--lg" to="/docs/quickstart">Get Started</Link>
          </div>
        </div>
      </section>

      <main className="container" style={{padding:'2.5rem 1rem'}}>
        <div className="features">
          <article className="card">
            <Heading as="h3">GitHub to AWS in minutes</Heading>
            <p>Connect your repo and deploy to your own AWS with best-practice setups.</p>
          </article>
          <article className="card">
            <Heading as="h3">AI-assisted configuration</Heading>
            <p>Let Obelis infer build settings, env vars, scaling policies, and more.</p>
          </article>
          <article className="card">
            <Heading as="h3">Secure by default</Heading>
            <p>Credentials management, security scans, and safer defaults baked in.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
