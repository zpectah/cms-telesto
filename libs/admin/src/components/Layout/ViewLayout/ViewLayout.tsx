import React, { ReactNode } from 'react';
import { styled, Container, Typography } from '@mui/joy';
import { WithChildren } from '../../../types';
import { Breadcrumbs } from '../Breadcrumbs';

export interface ViewLayoutProps extends WithChildren {
  breadcrumbs?: boolean;
  heading: {
    title: string;
    subtitle?: string;
    secondary?: ReactNode;
  };
}

const Wrapper = styled('div')({});
const Section = styled('section')({
  paddingTop: '1rem',
});
const Heading = styled(Container)({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  justifyContent: 'space-between',
});
const HeadingBlock = styled('div')({});

const ViewLayout = (props: ViewLayoutProps) => {
  const { children, breadcrumbs, heading } = props;

  return (
    <Wrapper>
      {breadcrumbs && (
        <Section>
          <Container maxWidth={false}>
            <Breadcrumbs />
          </Container>
        </Section>
      )}
      <Section>
        <Heading maxWidth={false}>
          <HeadingBlock>
            <Typography level="h1">{heading?.title}</Typography>
            {heading?.subtitle && (
              <Typography level="h4">{heading?.subtitle}</Typography>
            )}
          </HeadingBlock>
          {heading?.secondary && (
            <HeadingBlock>{heading.secondary}</HeadingBlock>
          )}
        </Heading>
      </Section>
      <Section>
        <Container maxWidth={false}>{children}</Container>
      </Section>
    </Wrapper>
  );
};

export default ViewLayout;
