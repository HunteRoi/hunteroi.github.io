import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const SkillsList = styled.ul`
  list-style-type: none;
  margin: 1em 0 0 0;
`;

export const SkillItem = styled.li`
  list-style-type: none;
  border-radius: 4px;
  margin: 0 6px 10px;
  padding: 4px 0;
  display: inline-block;
  
  span {
    border: 1px solid;
    padding: 4px 10px;
    border-radius: 4px;
  }
`;

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  div {
    margin-bottom: 2.5rem;

    p {
      font-size: 20pt;
      font-weight: normal;
      line-height: 1.3;
      color: #707070;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
