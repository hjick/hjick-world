import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Container, Typography } from '@mui/material';
import Layout from '@theme/Layout';
import React from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h4" fontWeight={700}>
            이현직 인생 기록
          </Typography>
        </Container>
      </main>
    </Layout>
  );
}
