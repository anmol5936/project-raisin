import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading2, SectionContainer } from '../shared';
import CategoryCard from './CategoryCard';
import { events } from '../../../config/content';

const EventCardContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  ${tw`
      flex 
      gap-4
      overflow-y-hidden
  `}
`;

const EventSection = () => (
  <SectionContainer>
    <Container>
      <Heading2 bold>{events.title}</Heading2>
      <EventCardContainer>
        {events.categoryDetails.map(({ link, image, title, desc }) => (
          <CategoryCard key={link} link={link} image={image} title={title} desc={desc} />
        ))}
      </EventCardContainer>
    </Container>
  </SectionContainer>
);

export default EventSection;