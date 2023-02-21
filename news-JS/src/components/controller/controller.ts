import AppLoader from './appLoader';
import { CallType, IFetchSource, IFetchArticles } from './types';

class AppController extends AppLoader {
    getSources(callback: CallType<IFetchSource>) {
        super.getResp<IFetchSource>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallType<IFetchArticles>) {
        let target: HTMLDivElement = e.target as HTMLDivElement;
        const newsContainer = e.currentTarget as HTMLElement;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<IFetchArticles>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLInputElement;
        }
    }
}

export default AppController;
