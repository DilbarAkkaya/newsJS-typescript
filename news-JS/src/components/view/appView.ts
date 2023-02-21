import { IFetchSource, IFetchArticles } from '../controller/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    sources: Sources;

    news: News;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IFetchArticles) {
        console.log(data, 'drawnews');
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IFetchSource) {
        console.log(data, 'sourse');
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
