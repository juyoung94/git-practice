/*str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요. 해당 문자열이 없으면 false를 반환하면 됩니다.
함수는 대·소문자 관계없이 해당 단어를 걸러주어야 합니다.*/
function checkSpam (str) {
    str = str.toLowerCase();
    if(str.includes("viagra") || str.includes("xxx")) return true;
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));


/*str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다.
새로 만든 문자열의 길이는 maxlength가 되어야 합니다.
함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 합니다.*/
console.log( truncate("What I'd like to tell on this topic is:", 20) );// = "What I'd like to te…"
console.log( truncate("Hi everyone!", 20) );// = "Hi everyone!"
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
}


/*달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정해 봅시다.
위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성해 봅시다.
실행 결과는 아래와 같아야 합니다.*/
// alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue (str) {
    return parseInt(str);
}