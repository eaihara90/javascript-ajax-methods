/* METHOD SETUP */
/************* XML Http Request *************/
export default (requestObj, callbackFunc) =>
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