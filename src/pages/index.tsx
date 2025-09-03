import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader(): ReactNode {
  return (
    <header className="hero hero--primary" style={{padding: '4rem 0'}}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Obelis Documentation
        </Heading>
        <p className="hero__subtitle">
          Learn how to deploy and manage your infrastructure with your AI DevOps Engineer
        </p>
        <div className="buttons" style={{marginTop: '2rem'}}>
          <Link
            className="button button--primary button--lg"
            to="/docs/quickstart">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link}: {title: string; description: string; link: string}): ReactNode {
  return (
    <div className="col col--4">
      <div className="card" style={{height: '100%'}}>
        <div className="card__body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link to={link} className="button button--secondary button--block">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  const features = [
    {
      title: 'Quick Start Guide',
      description: 'Get your first application deployed to AWS in under 5 minutes with our step-by-step guide.',
      link: '/docs/quickstart',
    },
    {
      title: 'Connect GitHub & AWS',
      description: 'Learn how to connect your GitHub repositories and AWS credentials securely.',
      link: '/docs/howto/connect-github',
    },
    {
      title: 'Environment Variables',
      description: 'Configure environment variables and secrets for your applications.',
      link: '/docs/howto/environment-variables',
    },
  ];

  return (
    <section className="container" style={{padding: '3rem 0'}}>
      <div className="text--center" style={{marginBottom: '3rem'}}>
        <Heading as="h2">Getting Started</Heading>
        <p style={{fontSize: '1.1rem'}}>
          Everything you need to deploy your applications with Obelis AI
        </p>
      </div>
      <div className="row">
        {features.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

function DocumentationSections(): ReactNode {
  return (
    <section className="container" style={{padding: '3rem 0'}}>
      <div className="row">
        <div className="col col--6">
          <div className="card">
            <div className="card__header">
              <h3>📚 Documentation</h3>
            </div>
            <div className="card__body">
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/requirements">→ System Requirements</Link>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/deploy-your-first-app">→ Deploy Your First App</Link>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/howto/custom-domains">→ Custom Domains</Link>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/howto/aws-credentials">→ AWS Credentials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col--6">
          <div className="card">
            <div className="card__header">
              <h3>🛠️ Resources</h3>
            </div>
            <div className="card__body">
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/faq">→ Frequently Asked Questions</Link>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/troubleshooting">→ Troubleshooting Guide</Link>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/reference/cli">→ CLI Reference</Link>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <Link to="/docs/reference/config">→ Configuration Reference</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunitySection(): ReactNode {
  return (
    <section style={{backgroundColor: 'var(--ifm-color-emphasis-100)', padding: '3rem 0'}}>
      <div className="container text--center">
        <Heading as="h2">Need Help?</Heading>
        <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
          Join our community or explore more resources
        </p>
        <div className="buttons" style={{justifyContent: 'center'}}>
          <Link
            className="button button--primary"
            to="https://discord.gg/VAeT5Q3hbc">
            Join Discord Community
          </Link>
          <Link
            className="button button--secondary"
            to="https://beta.obelis.ai"
            style={{marginLeft: '1rem'}}>
            Access App
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Documentation"
      description="Deploy cloud apps faster with AI assistance. Obelis handles infrastructure complexity while you focus on building.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <DocumentationSections />
        <CommunitySection />
      </main>
    </Layout>
  );
}