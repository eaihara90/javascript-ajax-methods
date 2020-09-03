import xhrPromiseThenCatch from './xhr-promise-then-catch';
/* METHOD SETUP */
/************* XML Http Request / PROMISE / ASYNC-AWAIT *************/    
export default async(objConfig) =>
{
    try
    {
        const response = await xhrPromiseThenCatch(objConfig);
        console.log(response, '/XHR/Promise/ASYNC-AWAIT');
    }
    catch(err)
    {
        console.log(err);
    }
}

