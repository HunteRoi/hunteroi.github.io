import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, SkillsList, SkillItem } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Tinaël and I’m a developer from Belgium!" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        
        <div>
          <p>
            Hi! I’m Tinaël, a developer living in Namen (Belgium). I love learning and sharing knowledge with the people I meet. 
            I'm also good at
          </p>
          <SkillsList>
            <SkillItem><span>SQL</span></SkillItem>
            <SkillItem><span>HTML</span></SkillItem>
            <SkillItem><span>CSS</span></SkillItem>
            <SkillItem><span>SCSS</span></SkillItem>
            <SkillItem><span>JavaScript</span></SkillItem>
            <SkillItem><span>TypeScript</span></SkillItem>
            <SkillItem><span>C#</span></SkillItem>
            <SkillItem><span>PHP</span></SkillItem>
            <SkillItem><span>Java</span></SkillItem>
            <SkillItem><span>C</span></SkillItem>
            <SkillItem><span>Python</span></SkillItem>
          </SkillsList>
        </div>

        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
