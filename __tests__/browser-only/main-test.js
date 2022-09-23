import passthroughTest from './passthrough-test';
import fetchSanityCheckTest from './fetch-sanity-check-test';
import PretenderInterceptor from 'mirage-pretender';

fetchSanityCheckTest('pretender', PretenderInterceptor);
passthroughTest('pretender', PretenderInterceptor);
