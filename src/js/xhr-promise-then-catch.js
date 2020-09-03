/* METHOD SETUP */
/************* XML Http Request / PROMISE *************/
export default function xhrPromiseThenCatch (requestObj)
{
    return new Promise((resolve, reject) =>
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
}