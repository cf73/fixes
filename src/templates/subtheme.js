const React = require('react')
const ReactFlex = require('react-flex')
const queryString = require('query-string');

require('react-flex/index.css')
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import SubthemeSection from '../components/subtheme.js'

const FlipMove = require('react-flip-move');
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  padding-left: 30px;
  height: 100vh;
  width: 100%;
  // opacity: 0.8;
  background-image: ${props => props.background ?  `url(${props.background})` : `none`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: lightgrey;
  position: fixed;
`

const ThemesMenu = styled.div`
  position: fixed;
  top: 0px;
  left: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MenuItem = styled(Link)`
  cursor: pointer;
  textDecoration: none;
  color:inherit;
  height: 25px;
  width: 25px;
  background-color: ${props => props.selected ? `#000` : `#bbb`};
  border-radius: 50%;
  display: inline-block;
  margin-top: 10px;
  margin-left: 2.5px;
  box-shadow: 0px 0px 5px #fff;
`

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none !important;
  color:inherit;
`

class SubThemePage extends React.Component {
  render() {
    const {data, pathContext} = this.props;
    const {field_theme_image, theme} = pathContext;
    const {allTaxonomyTermSubthemes, taxonomyTermSubthemes} = data;
    const subtheme = taxonomyTermSubthemes;

    const themeLinks = allTaxonomyTermSubthemes.edges.map( edge => `/subthemes/${kebabCase(edge.node.name)}`);

    const queryParams = queryString.parse(this.props.location.search);

    const getShortname = subtheme => {
      const parts = subtheme.name ? subtheme.name.split('-') : [];
      return encodeURIComponent(kebabCase(parts[parts.length - 1]))
    }

    const background = field_theme_image && field_theme_image.localFile.publicURL;
      
    return (
      <Container background={background}>
        <StyledLink to={theme.path}>
          <h2>‹ {theme.name}</h2>
        </StyledLink>

        <h1>{taxonomyTermSubthemes.name}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: taxonomyTermSubthemes.description ? taxonomyTermSubthemes.description.processed : `<br/>`}}
        />

        <ThemesMenu>
          {
            themeLinks.map((link, i) => 
              <MenuItem key={`menuitem-${i}`} to={link} selected={link === window.location.pathname}/>
            )
          }
        </ThemesMenu>

        {
          <SubthemeSection
            data={subtheme}
            key={getShortname(subtheme)}
            name={getShortname(subtheme)}
            filter={queryParams[getShortname(subtheme)]}
            queryParams={queryParams}
          />
        }
      </Container>
    )
  }
}

export default SubThemePage

export const pageQuery = graphql`
  query subThemeQuery($id: String) {
    allTaxonomyTermSubthemes {
      edges {
        node {
          id
          name
        }
      }
    }

    taxonomyTermSubthemes(id: {eq: $id}) {
      name
      id
      description {
        processed
      }
      relationships {
        articles: backref_field_belongs_to_subtheme_node_article {
          ...ArticleFragment
        }
        clips: backref_field_belongs_to_subtheme_node_clip {
          ...PosterImageClipFragment
        }
        interviews: backref_field_which_subtheme_does_this_b_node_interview {
          ...InterviewFragment
        }
        faqs: backref_field_belongs_to_subtheme_node_faq {
          ...FAQFragment
        }
      }
    }
  }

`