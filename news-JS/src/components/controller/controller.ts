import AppLoader from './appLoader';
import { CallAlias, IFetchSource } from './types';

class AppController extends AppLoader {
    getSources(callback: CallAlias<IFetchSource>) {
        console.log(callback)
        super.getResp<IFetchSource>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
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
            target = target.parentNode;
        }
    }
}

export default AppController;
