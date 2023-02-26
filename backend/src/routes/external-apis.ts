import { Router } from 'express';
import { getArticlesFromExt } from '../services/ext-api-call';

const router = Router();

router.get('/get-articles-by-key-words/:search', async (req, res, next) => {
    const searchedTopic = req.params.search as string;
    const articles = await getArticlesFromExt(searchedTopic);
    res.status(200).json({
        articles: articles
    })
});

export default router;