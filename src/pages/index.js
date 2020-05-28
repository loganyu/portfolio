import React, { useEffect, useState } from 'react';

import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Header from "../components/header"
import {Button} from 'baseui/button';
import {
  Card,
  StyledBody,
  StyledThumbnail,
} from 'baseui/card';
import {Grid, Cell} from 'baseui/layout-grid';
import Check from 'baseui/icon/check';
import {ListItem, ListItemLabel} from 'baseui/list';
import {Paragraph1} from 'baseui/typography'

export default () => {
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    // Load the `styletron-engine-atomic` package dynamically.
    // Reason: It requires use of `document`, which is not available
    // outside the browser, so we need to wait until it successfully loads.
    // Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
    import('styletron-engine-atomic').then(styletron => {
      const clientEngine = new styletron.Client();
      setEngine(clientEngine);
    });
  }, []);
  if (!engine) return null;

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Header />
        <Grid>
          <Cell span={12}>
            <h1>Experience</h1>
          </Cell>
        </Grid>
        <Grid>
          <Cell span={4}>
            <Card
              overrides={{Root: {style: {marginBottom: '35px', minHeight: '200px'}}}}
              title="Cadre"
            >
              <StyledThumbnail
                src={'/cadre.png'}
              />
              <StyledBody>
                <Paragraph1>
                  Sept 2019 - Present
                </Paragraph1>
                <ul>
                  <li>
                    Reduced manual work and errors by automating and tracking the legal requirements for in the deal creation flow for customers
                  </li>
                  <li>
                    Increased customer sign up completion rate by building a simple onboarding flow and automating the customer access approval process
                  </li>
                </ul>
              </StyledBody>
            </Card>
          </Cell>
          <Cell span={4}>
            <Card
              overrides={{Root: {style: {marginBottom: '35px', minHeight: '200px'}}}}
              title="Braze"
            >
              <StyledThumbnail
                src={'/braze.png'}
              />
              <StyledBody>
                <Paragraph1>
                  Nov 2015 - Dec 2018
                </Paragraph1>
                <ul>
                  <li>
                    Enabled nontechnical teams to obtain customer data for debugging and analytics by building an internal company web application.
                  </li>
                  <li>
                    Enabled testing new features, releasing premium features, and analyzing adoption by creating a feature flag management application
                  </li>
                </ul>
              </StyledBody>
            </Card>
          </Cell>
          <Cell span={4}>
            <Card
              overrides={{Root: {style: {marginBottom: '35px', minHeight: '200px'}}}}
              title="Fitmoo"
            >
              <StyledThumbnail
                src={'/fitmoo.png'}
              />
              <StyledBody>
                <Paragraph1>
                  July 2014 - Jun 2015
                </Paragraph1>
                <ul>
                  <li>
                    Built features including API, events calendar, search bar using Elasticsearch, integrated website with Instagram API for this fitness ecommerce/social network platform
                  </li>
                  <li>
                    Built mobile app for iOS/Android using Cordova/Ionic/Angular
                  </li>
                </ul>
              </StyledBody>
            </Card>
          </Cell>
        </Grid>
        <Grid>
          <Cell span={12}>
            <h1>Skills</h1>
          </Cell>
        </Grid>
          <ListItem
            endEnhancer={() => (
              <Paragraph1>
                Years of Experience
              </Paragraph1>
            )}
          >
            <ListItemLabel>
              <Paragraph1>
                Skill
              </Paragraph1>
            </ListItemLabel>
          </ListItem>
          <ListItem
            endEnhancer={() => (
              <React.Fragment>
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
              </React.Fragment>
            )}
          >
            <ListItemLabel>Ruby On Rails</ListItemLabel>
          </ListItem>
          <ListItem
            endEnhancer={() => (
              <React.Fragment>
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
              </React.Fragment>
            )}
          >
            <ListItemLabel>Python/Django</ListItemLabel>
          </ListItem>
          <ListItem
            endEnhancer={() => (
              <React.Fragment>
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
              </React.Fragment>
            )}
          >
            <ListItemLabel>React</ListItemLabel>
          </ListItem>
          <ListItem
            endEnhancer={() => (
              <React.Fragment>
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
              </React.Fragment>
            )}
          >
            <ListItemLabel>MongoDB</ListItemLabel>
          </ListItem>
          <ListItem
            endEnhancer={() => (
              <React.Fragment>
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
                <div style={{width: '18px'}} />
                <Button shape="round" size="compact" kind="secondary">
                  <Check />
                </Button>
              </React.Fragment>
            )}
          >
            <ListItemLabel>PostgreSQL</ListItemLabel>
          </ListItem>
      </BaseProvider>
    </StyletronProvider>
  )
}