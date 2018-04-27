const React = require('react')
const range = require('range')
const ReactFlex = require('react-flex')
require('react-flex/index.css')
import Img from 'gatsby-image'
const FlipMove = require('react-flip-move');
import styled from 'styled-components';

import Card from './card.js';

const Video = styled.video`
  width: 100%;
  display: block;
`

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

export const getCards = (relationships) => [
  ...defaultToEmpty(relationships.articles).map((article, i) => (
    <Card key={`article-${i}`} title={article.title} type="Article" slug="article">
      <div
        dangerouslySetInnerHTML={{
          __html: article.field_short_version.processed,
        }}
      />
    </Card>
  )),
  ...defaultToEmpty(relationships.clips).map((clip, i) => (
    <Card key={`clip-${i}`} type="Clip" title={clip.title} slug="clip">
      <h4>{clip.title}</h4>
      {clip.relationships.field_clip ? (
        <div>
          <Video controls>
            <source
              src={clip.relationships.field_clip.localFile.publicURL}
              type={
                clip.relationships.field_clip.localFile.internal.mediaType
              }
            />
          </Video>
        </div>
      ) : (
        <small>No video file attached</small>
      )}
    </Card>
  )),
  ...defaultToEmpty(relationships.faqs).map((faq, i) => (
    <Card key={`faq-${i}`} type="FAQ" title="faq.title" slug="faq">
      <h3>{faq.title}</h3>
    </Card>
  )),
  ...defaultToEmpty(relationships.quickfacts).map((quickfact, i) => (
    <Card key={`quickfact-${i}`} type="QuickFact" title="quickfact.title" slug="quickfact">
      <h4>{quickfact.title}</h4>
    </Card>
  )),
]

class SubthemeSection extends React.Component {
  constructor(props){
    super(props)

    const rels = props.data.relationships
    const getLength = (arr) => arr && arr.length || 0;
    const length = getLength(rels.articles) + getLength(rels.faqs) + getLength(rels.clips) + getLength(rels.quickfacts)
    this.order = shuffle(range.range(length))
    console.log(this.order)
  }

  render() {
    const subtheme = this.props.data
    const { Flex, Item } = ReactFlex

    // TODO (Conrad): Create custom card component for each type of data (article, clip, faq, etc)

    const allRelationships = shuffle(getCards(subtheme.relationships), this.order)

    const description = subtheme.description
      ? [
          <div
            style={{ minWidth: 300, padding: 10 }}
            key="description"
            dangerouslySetInnerHTML={{ __html: subtheme.description.processed }}
          />,
        ]
      : []

    const allCards = [...description, ...allRelationships]

    const filter = this.state && this.state.filter

    return (
      <div className={this.props.className}>
        <h3>{subtheme.name}</h3>
        <button onClick={() => { this.setState( {filter: !filter} )}}>
          Filter
        </button>
        <div style={{ display: 'flex', 'flex-wrap': 'wrap', overflowX: 'auto', justifyContent: 'space-around' }}>
          {allCards.filter((obj, i) => ((i % 2 == 0) || !filter))}
        </div>
      </div>
    )
  }
}


const SubthemeContainer = styled(SubthemeSection)`
  background-color: cornflowerblue;
  padding: 20px;
  margin: 50px;
`

export default SubthemeContainer;

