import styled from 'styled-components'
import Link from 'next/link'
import { formatDate } from '../util'
import { Authors } from '../Pagination'

const ArticleBlockWrapper = styled.div`
  margin-bottom: 20px;
  height: 100%;
  width: 100%;
`
const Category = styled.a`
  font-family: var(--span-font);
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #3f1f69;
  text-tranform: capitalize;
`

const ArticleTextContent = styled.div`
  margin-top: 20px;
`
const ArticleTitle = styled.h2`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
  & > a {
    text-decoration: none;
    color: #000000;
  }
`
const ArticleByline = styled.p`
  font-family: var(--span-font);
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin: 0;
  /* or 18px */
  color: #595959;
`
const ArticleBio = styled.p`
  font-family: var(--span-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 172.1%;
  /* or 28px */
  color: #080808;
  margin: 50px 0;
`
const AuthorUnderline = styled.div`
  margin-top: 10px;
  width: 50px;
  height: 9px;
  background-color: #3f1f69;
  margin: 20px 0;
`

const LargeArticleBlock = (attributes: { article; date; category; authors; title; excerpt; slug }) => {
  const authors = JSON.parse(attributes.authors)
  return (
    <ArticleBlockWrapper>
      <ArticleTextContent>
        <Link href={{ pathname: '/section', query: { slug: attributes.category } }} as={'/section/' + attributes.category} passHref>
          <Category>{attributes.category}</Category>
        </Link>
        <ArticleTitle>
          <Link href={{ pathname: '/article', query: { slug: attributes.slug } }} as={'/article/' + attributes.slug} passHref>
            <a dangerouslySetInnerHTML={{ __html: attributes.title }} />
          </Link>
        </ArticleTitle>
        <ArticleByline>
          by <Authors authors={authors} />
        </ArticleByline>
        <ArticleByline>{formatDate(attributes.date)}</ArticleByline>
        <AuthorUnderline />
      </ArticleTextContent>
      <ArticleBio dangerouslySetInnerHTML={{ __html: attributes.excerpt }} />
    </ArticleBlockWrapper>
  )
}

export default LargeArticleBlock
