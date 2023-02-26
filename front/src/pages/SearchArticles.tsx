import React, { useEffect, useState } from 'react'
import Articles from '../components/SearchArticles/Articles';
import Search from '../components/SearchArticles/Search';
import { ArticleModel } from '../models/article';

// affiche la liste des articles proposés à la curation. Tous les liens en target blank
const SearchArticles: React.FC = () => {
  const [searchedArticles, setSearchedArticles] = useState<ArticleModel[]> ([]);
  const [keyWord, setKeyWord] = useState <string> ();
  
  const loadArticles = async (keyword: string) => {
    try {
      const resp = await fetch('http://localhost:3001/get-articles-by-key-words/' + keyword);
      const articles = await resp.json();
      if (articles.isArray()) {
        if (articles.length > 0) {
          if (articlesAreFormated(articles)) {
            setSearchedArticles(articles);
          }
        } else {
          setSearchedArticles([]);
        }
      }
    } catch(err) {
        console.log(err);
    }
  }
  
  useEffect(() => {
    loadArticles("blockchain");
  }, []);


  const articlesAreFormated = (articles: any[]|ArticleModel[]): articles is ArticleModel[] => {
    const article = articles[0];

    return (
      "description" in article &&
      "datePublished" in article &&
      "url" in article &&
      "category" in article &&
      "title" in article
    );
  }

  type ChooseKeyWordHandler = (keyWord:string) => void;
  const chooseKeyWordHandler: ChooseKeyWordHandler  = (keyWord) => {
    setKeyWord(keyWord);
  }
  
  const submitNewResearchHandler = () => {
    if (keyWord) {
      loadArticles(keyWord);
    }
  }

  // => DISPLAYED
  let displayedArticles: JSX.Element|JSX.Element[] = <p>No article found</p>
  if (searchedArticles.length > 0) {
    displayedArticles = <Articles articles={searchedArticles}/>
  }

  return (
    <div>
      <div>
        <Search onSelected={chooseKeyWordHandler} onSubmitted={submitNewResearchHandler} />
      </div>
      <div>{displayedArticles}</div>
    </div>
  )
}

export default SearchArticles;