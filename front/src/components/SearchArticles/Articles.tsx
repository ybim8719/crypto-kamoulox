import React from 'react'
import { Fragment } from 'react'
import { ArticleModel } from '../../models/article'
import Article from './Article'
import classes from './Articles.module.css';

const Articles:React.FC<{articles:ArticleModel[]}> = (props) => {
  let content: JSX.Element[]|JSX.Element = <p>RIEN</p>
  if (props.articles) {
    content = props.articles.map((item: ArticleModel) => {
      return <Article article={item}/>
    })
  }

  return (
    <Fragment>
      <div className={classes.articles}>
        {content}

        <div>
          TEST CSS d'article pour virer antdesign...
        </div>
      </div>
    </Fragment>
  )
}

export default Articles;