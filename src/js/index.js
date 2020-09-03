import '../assets/scss/main.scss';

const objConfig = { method: 'GET', url: 'http://localhost:3000/users' };

/* METHOD SETUP */
/************* XML Http Request *************/
const getXhr = (requestObj, callbackFunc) =>
{
    const xhr = new XMLHttpRequest();

    xhr.open(requestObj.method, requestObj.url);
    xhr.responseType = 'json';
    
    xhr.onload = () =>
    {
        if (xhr.status >= 200 && xhr.status < 300)
        {
            callbackFunc(xhr.response);
        }
    }

    xhr.onerror = () =>
    {
        callbackFunc(xhr);
    }

    xhr.send();
}

/* CALLING METHOD */
/************* XML Http Request / Callback Function *************/
getXhr(objConfig, (response, error) =>
{
    console.log(response, 'XHR');
});


/* METHOD SETUP */
/************* XML Http Request / PROMISE *************/
const getXhrPromise = (requestObj) => new Promise((resolve, reject) =>
{
    const xhr = new XMLHttpRequest();
    xhr.open(requestObj.method, requestObj.url);
    xhr.responseType = 'json';
    
    xhr.onload = () =>
    {
        if (xhr.status >= 200 && xhr.status < 300)
        {
            resolve(xhr.response);
        }
        else
        {
            reject({ request: xhr });
        }
    }

    xhr.onerror = () =>
    {
        reject(xhr.response);
    }

    xhr.send();
});

/* CALLING METHOD */
/************* XML Http Request / PROMISE / THEN-CATCH *************/
getXhrPromise(objConfig)
    .then(response => console.log(response, 'XHR/Promise/THEN-CATCH'))
    .catch(e => console.error(e));


/* METHOD SETUP */
/************* XML Http Request / PROMISE / ASYNC-AWAIT *************/    
const asyncFunctionXhrPromise = async(objConfig) =>
{
    try
    {
        const response = await getXhrPromise(objConfig);
        console.log(response, '/XHR/Promise/ASYNC-AWAIT');
    }
    catch(err)
    {
        console.log(err);
    }
}
/* CALLING METHOD */
asyncFunctionXhrPromise(objConfig);


/* METHOD SETUP */
/************* FETCH-API (Promise) / ASYNC-AWAIT *************/
const asyncFetch = async (objConfig) =>
{
    try
    {
        console.log(objConfig);
        const response = await fetch(objConfig.url, { method: objConfig.method });
        const data = await response.json();
        console.log(data, 'FETCH (Promise) / ASYNC-AWAIT')
    }
    catch(err)
    {
        console.log(err);
    }
}

/* CALLING METHOD */
asyncFetch(objConfig);