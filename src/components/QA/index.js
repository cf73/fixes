import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import get from 'lodash/get'

import {
  Link,
  SVGArrow,
  FiledUnderLink
} from '../'

import getCards from '../../utils/getCards'

import {
  black,
  white,
  darkWhite,
  whiteShadow,
  backgroundColor,
  red,
} from '../../colors'

const TICKER = 'Q&A'
export const gradient = `linear-gradient(to bottom, #EEFFE8 0%, rgba(255,255,255,0.92) 100%)`
const gradient2 = `linear-gradient(to bottom, #EEFFE8 0%, #F6FFF4 100%)`
const gradient3 = `linear-gradient(to bottom, #A7C6D9 0%, #546D67 100%)`

const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) { /* desktop */

  }

  @media (max-width: 812px) { /* mobile */
     
  }
`

const TopContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  background: ${gradient};

  @media (min-width: 1025px) { /* desktop */
    background-color: ${ props => props.overlay ? 'rgba(0,0,0,0)' : white };
    background-image: ${ props => props.overlay ? 'none' : gradient };
  }

  @media (max-width: 812px) { /* mobile */
    background-color: ${white};
    z-index: 1;
  }
`

const BottomContaniner = styled.div`
  position: relative;

  width: 100%;

  z-index: 2;

  background-color: ${white};

  @media (min-width: 1025px) { /* desktop */
    background-color: ${ props => props.overlay ? 'rgba(0,0,0,0)' : white };
    background-image: none;
  }

  @media (max-width: 812px) { /* mobile */
     
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const CardsContainer = styled.div`
  display: flex;  
  flex-direction: row; 
  flex-wrap: wrap;

  justify-content: flex-start;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 70px;

  @media (min-width: 1025px) { /* desktop */
    justify-content: flex-start;
    padding-left: 60px;
    padding-right: 0;
    padding-bottom: 200px;
  }

  @media (max-width: 812px) { /* mobile */
    justify-content: center;
    align-items: center;
    padding-left: 0;
    padding-right: 0;

    min-width: 100vw;
  }
`

const Footer = styled(Row)`
  display: flex;

  width: auto;
  min-height: 20vh;

  background-image: ${props => props.overlay ? null : gradient3 };

  @media (min-width: 1025px) { /* desktop */
    display: flex;
  }

  @media (max-width: 812px) { /* mobile */
    display: flex;
  }
`

const MobileRow = styled(Row)`
  align-items: center;
  padding-left: 60px;

  margin-top: 60px;

  @media (max-width: 812px) { /* mobile */
    flex-direction: column;
    padding-left: 0;
    margin-top: 0;
    justify-content: center;
  }
`

const FirstMobileRow = styled(MobileRow)`
  @media (max-width: 812px) { /* mobile */
    margin-top: -150px;
  }
`

const MobileColumn = styled(Column)`
  padding: 0;

  @media (min-width: 1025px) { /* desktop */
    
  }

  @media (max-width: 812px) { /* mobile */
    padding-top: 60px;
    padding-left: 10px;
  }
`

const FiledUnderContainer = styled(MobileColumn)`
  padding: 0;

  @media (min-width: 1025px) { /* desktop */
    padding-right: 20px;
    min-width: 371px;
  }

  @media (max-width: 812px) { /* mobile */
    padding-top: 30px;
    padding-left: 10px;
  }
`

const SubTitle = styled.div`
  font-family: Lato;
  font-size: 12px;
  line-height: 28px;
  letter-spacing: 0.22em;

  color: ${backgroundColor};

  text-transform: uppercase;

  padding-left: 0;

  @media (min-width: 1025px) { /* desktop */
    padding-left: 15px;
  }

  @media (max-width: 812px) { /* mobile */
    padding-left: 0;
  }
`

const getFiledUnder = array => {
  let results = []

  if(array)
  array.map( ({name}) =>
    results.push({
      name,
      link: `/subthemes/${kebabCase(name)}`
    })
  )

  return results
}

const getTags = array => {
  let results = []

  results = array.map( ({name}) => name )

  return results
}

const getRelatedContent = array => {
  const cards = {
    articles: [],
    clips: [],
    faqs: [],
  }

  array && array.forEach(item => {
    switch(item.__typename){
      case 'node__faq':
        cards.faqs.push(item)
        break
      case 'node__article':
        cards.articles.push(item)
        break
      case 'node__clip':
        cards.clips.push(item)
        break
      default:
        break;
    }
  })

  return getCards(cards)
}

const AllEntitiesContainer = styled(Row)`
  width: 100vw;
  justify-content: flex-end;

  padding-top: 90px;
  padding-right: 60px;
  padding-bottom: 30px;

  z-index: 4;

  @media (min-width: 1025px) { /* desktop */
    
  }

  @media (max-width: 812px) { /* mobile */
    justify-content: center;
    padding-right: 0;
  }
`

const AllEntitiesText = `All ${TICKER}s`
const AllEntities = () => <AllEntitiesContainer>
  <FiledUnderLink color={backgroundColor}>{AllEntitiesText}</FiledUnderLink>
</AllEntitiesContainer>

///

const Tags = styled.div`
  padding-left: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  overflow: auto;

  @media (min-width: 1025px) { /* desktop */
    padding-left: 15px;
  }

  @media (max-width: 812px) { /* mobile */
    padding-left: 0;
  }
`

const Tag = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  font-family: Lato;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 0.22em;
  font-weight: 600;

  text-transform: uppercase;

  color: ${red};

  margin-right: 15px;
  margin-bottom: 15px;

  border-radius: 3px;
  background-color: ${white};
`

const TopCard = styled(Column)`
  position: relative;

  width: 614px;
  min-height: 300px;

  justify-content: center;

  margin-top: 50px;
  margin-bottom: 60px;
  padding: 60px;

  border-radius: 3px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);

  background-image: ${gradient2};
  color: ${backgroundColor};

  @media (min-width: 1025px) { /* desktop */
    width: 614px;
  }

  @media (max-width: 812px) { /* mobile */
    margin-top: 0;
    margin-bottom: 0;

    padding: 0;
    padding-top: 100px;
    padding-left: 20px;

    width: 100vw;
    max-width: 100vw;
  }

  &::before {
    content: '?';
    position: absolute;

    display: flex;
    flex-direction: row;
    justify-content: center;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;

    font-family: 'Tisa Pro';
    font-size: 400px;
    opacity: 0.06;
  }
`

const Title = styled.div`
  font-family: 'Tisa Pro';
  font-size: 36px;
  line-height: 42px;

  margin-bottom: 10px;
`

const Description = styled.div`
  font-family: 'Tisa Pro';
  font-size: 20px;
  line-height: 24px;
`

const MAX_WIDTH = 664

const Experts = styled(Column)`
  max-width: ${MAX_WIDTH}px;
  margin: auto;

  align-items: center;

  color: ${backgroundColor};

  @media (min-width: 1025px) { /* desktop */
    max-width: 664px;
  }

  @media (max-width: 812px) { /* mobile */
    width: 100vw;
    max-width: 100vw;
    padding: 10px;
  }
`

const ExpertTitle = styled.div`
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;

  line-height: 24px;
  letter-spacing: 0.02em;
`

const ExpertAnswer = styled.div`
  font-family: 'Tisa Pro';
  font-size: 17px;
  line-height: 24px;
`

const MobileSideBarContainer = styled(Column)`
  color: ${darkWhite};
  width: 100vw;
`

class QA extends React.Component {
  render() {
    const {data, overlay} = this.props
    const nodeName = 'nodeFaq'

    console.log(data)

    const title = get(this, `props.data.${nodeName}.title`)
    const description = get(this, `props.data.${nodeName}.field_question_summary.processed`)

    const field_expert_1  = get(this, `props.data.${nodeName}.field_expert_1.processed`)
    const field_expert_1_answer  = get(this, `props.data.${nodeName}.field_expert_1_answer.processed`)
    const field_expert_2 = get(this, `props.data.${nodeName}.field_expert_2.processed`)
    const field_expert_3_name = get(this, `props.data.${nodeName}.field_expert_3_name.processed`)
    const field_expert_4_name = get(this, `props.data.${nodeName}.field_expert_4_name.processed`)
    const field_expert_4_answer = get(this, `props.data.${nodeName}.field_expert_4_answer.processed`)

    const filedUnder = getFiledUnder(get(this, `props.data.${nodeName}.relationships.field_belongs_to_subtheme`))
    const tags = getTags(get(this, `props.data.${nodeName}.relationships.field_tags`))

    const relatedContent = getRelatedContent(get(this, `props.data.${nodeName}.relationships.field_article_related_content`))

    // TODO: order of answers is messed up in Drupal, fix it there first.

    let answers = []
    if(field_expert_1) answers.push({answer: field_expert_1, expert: field_expert_2})
    if(field_expert_1_answer) answers.push({answer: field_expert_1_answer, expert: field_expert_3_name})
    if(field_expert_4_answer) answers.push({answer: field_expert_4_answer, expert: field_expert_4_name})

    const MobileSideBar = props => (
      <MobileSideBarContainer>

        <MobileRow style={{alignItems: 'flex-start'}}>
          <FiledUnderContainer>
            <SubTitle>filed under:</SubTitle>
            {
              filedUnder && filedUnder.map( ({name, link}, key) => <FiledUnderLink key={key} to={link}>{name}</FiledUnderLink>)
            }
          </FiledUnderContainer>

          <MobileColumn>
            <SubTitle>explore:</SubTitle>
            <Tags>
              {
                tags && tags.map( (name, key) => <Tag key={key}>{name}</Tag>)
              }
            </Tags>
          </MobileColumn>
        </MobileRow>

        <MobileRow>
          {
            relatedContent.length > 0 && <SubTitle style={{marginTop: 90}}>see also:</SubTitle>
          }
        </MobileRow>

        <CardsContainer>
          { relatedContent }
        </CardsContainer>
        
      </MobileSideBarContainer>
    )

    return (
      <Container>
        <TopContainer overlay={overlay}>
          { !overlay && <AllEntities /> }
          <TopCard>
            <Title>{title}</Title>
            <Description dangerouslySetInnerHTML={{ __html: description }}/>
          </TopCard>
        </TopContainer>
        <BottomContaniner overlay={overlay}>
          <Experts>
          {
            answers.map( ({answer, expert}, key) => <Row key={key}>
              <Column>
                <ExpertTitle>{expert}</ExpertTitle>
                <ExpertAnswer dangerouslySetInnerHTML={{ __html: answer }}/>
              </Column>
            </Row>)
          }
          </Experts>
          <Footer overlay={overlay}>
            <MobileSideBar />
          </Footer>
        </BottomContaniner>
      </Container>
    )
  }
}

export default QA