/* METHOD SETUP */
/************* FETCH-API (Promise) / ASYNC-AWAIT *************/
const fetchAsyncAwait = async (objConfig) =>
{
    try
    {
        const response = await fetch(objConfig.url, { method: objConfig.method });
        const data = await response.json();
        console.log(data, 'FETCH (Promise) / ASYNC-AWAIT')
    }
    catch(err)
    {
        console.log(err);
    }
}

export default fetchAsyncAwait;