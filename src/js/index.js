import '../assets/scss/main.scss';
import xhr from './xhr';
import xhrPromiseThenCatch from './xhr-promise-then-catch';
import xhrPromiseAsyncAwait from './xhr-promise-async-await';
import fetchAsyncAwait from './fetch-async-await';

const objConfig = { method: 'GET', url: 'http://localhost:3000/users' };


xhr(objConfig, (response, error) => console.log(response, 'XHR'));

xhrPromiseThenCatch(objConfig).then(response => console.log(response, 'XHR/Promise/THEN-CATCH')).catch(e => console.error(e));

xhrPromiseAsyncAwait(objConfig);

fetchAsyncAwait(objConfig);