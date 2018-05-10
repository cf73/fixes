const React = require('react')
const range = require('range')
const ReactFlex = require('react-flex')
require('react-flex/index.css')
import Img from 'gatsby-image'
const FlipMove = require('react-flip-move');
import styled from 'styled-components';
import Link, { navigateTo } from 'gatsby-link';
import Card from './card.js';
import RCCard from './rccard.js';
const queryString = require('query-string');
import './subtheme.css';
import kebabCase from 'lodash/kebabCase'

const Video = styled.video`
  width: 100%;
  display: block;
`
const FAQQuestion = styled.div`
  background-color:#ffffffed;
  height:auto;
  padding:30px;
  margin:0 auto;
`
const SubthemeTitle = styled.div`
  font-family: 'Lato';
  font-weight: normal;
  text-rendering: optimizeLegibility;
  font-size: 24px;
  line-height: 1.1;
  color: #0c063e;
  margin-top: 15px;
  color: #a6a6a6;
  text-transform: uppercase;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0.12em;
`
const NUM_CARDS_TO_SHOW = 3;

const defaultToEmpty = arr => (arr ? arr : [])

const shuffle = (arr) => {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

const reorder = (arr, order) => {
  const newArr = new Array(arr.length);
  order.forEach((item, i) => {
    newArr[i] = arr[item];
  })
  return newArr;
}


class PlayablePoster extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    if (!this.props.clip.relationships.field_poster_image) {
      return (
        <div className={'poster'}/>
      );
    }

    if (this.state.play) {
      return (
        /*
        <Video controls>
          <source
            src={this.props.clip.field_external_video_url.uri}
          />
        </Video>
        */
        <div className={'poster'}>
          <iframe src="https://player.vimeo.com/video/18769983?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      )
    }

    if (this.props.linkable) {
      return (
        <Link to={`${kebabCase(this.props.clip.title)}`}>
          <div className={'poster'}>
            <img src={this.props.clip.relationships.field_poster_image.localFile.publicURL} />
          </div>
        </Link>
      )
    }
    return (
      <div className={'poster'} onClick={() => this.setState({ play: true })}>
        <img src={this.props.clip.relationships.field_poster_image.localFile.publicURL} />
      </div>
    );
  }
}

export const ArticleCard = ({ article, i, relatedContent }) => (
  relatedContent ?
    <RCCard style={{padding:15}} key={`article-${i}`} article={article} imgSrc={article.relationships.field_main_image && article.relationships.field_main_image.localFile.publicURL } title={article.title} type="Article" slug="article" changed={article.changed}>
    {article.field_short_version && (
      <p className={'RCcard-large-text'} dangerouslySetInnerHTML={{ __html: article.field_short_version.processed }} />
    )}
    </RCCard> :
    <Card style={{padding:30}} key={`article-${i}`} title={article.title} type="Article" slug="article" changed={article.changed} link={`/articles/${kebabCase(article.title)}`}>
    {article.field_short_version && (
      <p className={'card-large-text'} dangerouslySetInnerHTML={{ __html: article.field_short_version.processed }} />
    )}
    </Card>
)

export const ClipCard = ({ clip = { relationships: {} }, i, relatedContent, linkable }) => (
  relatedContent ?
  <RCCard key={`clip-${i}`} title={clip.title} slug="clip" changed={clip.changed}>
    <PlayablePoster
      clip={clip}
      linkable={linkable}
    />
    <p style={{paddingLeft:30, paddingRight:30, paddingBottom: 20}} className={'caption'}>{clip.title}</p>
  </RCCard> :
  <Card key={`clip-${i}`} title={clip.title} slug="clip" changed={clip.changed} link={`/clips/${kebabCase(clip.title)}`}>
    <PlayablePoster
      clip={clip}
      linkable={linkable}
    />
    <p style={{paddingLeft:30, paddingRight:30, paddingBottom: 20}} className={'caption'}>{clip.title}</p>
  </Card>
)

export const FAQCard = ({ faq = {}, i, relatedContent }) => (
  <Card style={{padding:45, display:'flex', alignItems:'center'}} key={`faq-${i}`}  slug="faq" changed={faq.changed} background={faq.relationships.field_faq_image && faq.relationships.field_faq_image.localFile.publicURL} link={`/faqs/${kebabCase(faq.title)}`}>
    <FAQQuestion>
      <h4>FAQ</h4>
      <p style={{fontSize:24, fontFamily:'Lato', lineHeight:1.5, fontWeight:700, fontStyle:'italic'}} className={'card-large-text'}>{faq.title}</p>
    </FAQQuestion>
  </Card>
)

export const InterviewCard = ({ interview = {}, i, relatedContent }) => (
  <Card style={{padding:30}} key={`interview-${i}`} type="Interview" title={interview.title} slug="interview" changed={interview.changed} link={`/interviews/${kebabCase(interview.title)}`}>
    <p className={'card-large-text'}>{interview.title}</p>
  </Card>
)

export const QuickFactCard = ({ quickfact, i, relatedContent, style = {}, ...rest }) => (
  <Card {...rest} key={`quickfact-${i}`} type="QuickFact" title={quickfact.title} slug="quickfact" changed={quickfact.changed} style={{ ...style, padding:15}}>
    <h4>{quickfact.title}</h4>
    <div
      dangerouslySetInnerHTML={{
        __html: quickfact.field_quickfact.processed,
      }}
    />
  </Card>
)

export const getCards = (relationships, queryFilter, relatedContent, linkableClip) => [
  ...defaultToEmpty(relationships.articles).filter(article => !queryFilter || queryFilter == `recent` || queryFilter == `article`).map((article, i) => (<ArticleCard key={`article-${article.title}`} article={article} i={i} relatedContent={relatedContent} />)),
  ...defaultToEmpty(relationships.clips).filter(clip => !queryFilter || queryFilter == `recent` || queryFilter == `clip`).map((clip, i) => (<ClipCard linkable={linkableClip} clip={clip} i={i} relatedContent={relatedContent} />)),
  ...defaultToEmpty(relationships.faqs).filter(faq => !queryFilter || queryFilter == `recent` || queryFilter == `faq`).map((faq, i) => (<FAQCard key={`article-${faq.title}`} faq={faq} i={i} relatedContent={relatedContent} />)),
  ...defaultToEmpty(relationships.interviews).filter(interview => !queryFilter || queryFilter == `recent` || queryFilter == `interview`).map((interview, i) => (<InterviewCard interview={interview} i={i} relatedContent={relatedContent} />)),
  ...defaultToEmpty(relationships.quickfacts).filter(quickfact => !queryFilter || queryFilter == `recent` || queryFilter == `quickfact`).map((quickfact, i) => (<QuickFactCard quickfact={quickfact} i={i} relatedContent={relatedContent} />)),
]

const DISPLAY_NAMES_TO_SLUG = new Map([
  [`articles`, `article`],
  [`interviews`, `interview`],
  [`faqs`, `faq`],
  [`clips`, `clip`],
  [`recently added`, `recent`]
])

const itemExists = (itemTag, parent) => {
  console.log(parent.relationships)
  console.log(itemTag)
  return parent.relationships[itemTag]

}

const Filters = ({ queryParams, name, filter, subtheme }) => (
  <div style={{
    opacity:0.75,
    mixBlendMode:'normal'
  }}
    >
    <span style={{
            marginRight: 30,
            fontFamily: 'Lato',
            letterSpacing: '0.04em',
            color:'rgb(255, 132, 0)',
            marginLeft:15
          }}
          >Sort by: </span>
    {
      Array.from(DISPLAY_NAMES_TO_SLUG.keys()).filter(itemType => (itemType === `recently added` || itemExists(itemType, subtheme))).map(filterType => {
        const filterSlug = DISPLAY_NAMES_TO_SLUG.get(filterType)

        return (
          <button
            onClick={() => {
              const newQueryParams = { ... queryParams }
              if (newQueryParams[name] == filterSlug){
                delete newQueryParams[name]
              } else {
                newQueryParams[name] = filterSlug;
              }
              navigateTo(`?${queryString.stringify(newQueryParams)}`)
            }}
            style={{
              background: filter == filterSlug ? `none` : `none`,
              color: filter == filterSlug ? `rgb(255, 132, 0)` : `rgba(59, 59, 59, 0.8)`,
              fontWeight: filter == filterSlug ? `800` : `400`,
              marginRight: 20,
              marginBottom: 20,
              float: (
                (filterSlug === `recent`) ?
                `none` : `none`
              )
            }}
          >
            {filterType}
          </button>
      )})
    }
  </div>
)


class SubthemeSection extends React.Component {
  constructor(props){
    console.log('creating subsection')
    super(props)

    this.updateOrder(props)
    this.state = { numCards: NUM_CARDS_TO_SHOW }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.filter)
    console.log(this.props.filter)
    return (
      nextProps.filter !== this.props.filter ||
      nextState.numCards !== this.state.numCards
    );
  }
  componentWillUpdate(nextProps) {
    this.updateOrder(nextProps)
  }
  updateOrder(props) {
    if (props.filter) return;
    const length = getCards(props.data.relationships, props.filter).length;
    this.order = shuffle(range.range(length))
  }
  render() {
    const subtheme = this.props.data
    console.log(this.state)
    const { Flex, Item } = ReactFlex

    // TODO (Conrad): Create custom card component for each type of data (article, clip, faq, etc)

    const { filter } = this.props;

    const allCards = filter ?
      getCards(subtheme.relationships, filter, null, true).sort((a, b) => (b.props.changed - a.props.changed)) :
      //reorder(getCards(subtheme.relationships, filter, null, true), this.order)
      getCards(subtheme.relationships, filter, null, true)

    const description = subtheme.description
      ? <div
            className={'subtheme-description'}
            key="description"
            dangerouslySetInnerHTML={{ __html: subtheme.description.processed }}
          />
      : null

    return (
      <div className={this.props.className}>
        <SubthemeTitle>{subtheme.name}</SubthemeTitle>
        { description }
        <Filters
          queryParams={this.props.queryParams}
          name={this.props.name}
          filter={filter}
          subtheme={subtheme}
        />
        <div style={{ display: 'flex', 'flex-wrap': 'wrap', overflowX: 'auto', justifyContent: 'space-around' }}>
          {
            allCards.slice(0, this.state.numCards)
          }
        </div>
        {
          allCards.length >= this.state.numCards ?
            <button style={{ margin: 20 }} onClick={() => { this.setState({ numCards: this.state.numCards + NUM_CARDS_TO_SHOW }); } }>
              Show More
            </button> :
            null
        }

      </div>
    )
  }
}


const SubthemeContainer = styled(SubthemeSection)`
  background-color: rgba(241,239,239,0.94);
  border: solid thin lightgrey;
  padding: 30px;
  padding: 90px;
  margin-bottom:60px;
`

export default SubthemeContainer;

