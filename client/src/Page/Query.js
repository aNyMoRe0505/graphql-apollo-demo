import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { BannerArticleQuery, ArticleQuery } from '../queries';

const Query = () => {
  const { loading: bannerArticleLoading, data: bannerArticle } = useQuery(BannerArticleQuery);
  const { data: articleData } = useQuery(ArticleQuery, {
    variables: {
      articleId: '1',
    }
  });

  console.log('bannerArticleLoading', bannerArticleLoading);

  return (
    <>
      <Link to="/">回 root</Link>
     <h1>Query!!</h1>
     <h2>all articles</h2>
     {bannerArticle?.articles?.map(a => (
        <div key={`article-${a.id}`} style={{ marginTop: 10 }}>
          {`id: ${a.id}, content: ${a.content}, `}
          {`authorId: ${a.author.id}, authorName: ${a.author.name}`}
        </div>
     ))}
     <h2>all banners</h2>
     {bannerArticle?.banners?.map(banner => (
        <div key={`article-${banner.id}`} style={{ marginTop: 10 }}>
          {`id: ${banner.id}, description: ${banner.description}`}
        </div>
     ))}
     <h2>article (id 1)</h2>
     <div>
       {`id: ${articleData?.article?.id}, content: ${articleData?.article?.content}, `}
       {`authorId: ${articleData?.article?.author?.id}, authorName: ${articleData?.article?.author?.name}`}
      </div>
    </>
  )
};

export default Query;