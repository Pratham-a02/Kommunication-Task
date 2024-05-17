const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, parameter){
    const arr = url.split('?');
    const retVal = arr[1];
    const newArr = retVal.split("&");
    const object = {}
    newArr.forEach((element) => {
        const currVal = element.split("=")
        object[currVal[0]] = currVal[1]
    });
    return object[parameter]
}

console.log(getUrlParameterValue(url,"utm_medium"));
console.log(getUrlParameterValue(url,"utm_campaign"));