import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi-redirect-production.up.railway.app/', {
            apiKey: '2acbde45657e45608e9ef56423cffd57',
        });
    }
}

export default AppLoader;
