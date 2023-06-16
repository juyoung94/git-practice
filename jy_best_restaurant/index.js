document.querySelector("#getData").addEventListener("click", () => {
    //cors error 뜨는 중..
    axios.post("https://api.notion.com/v1/databases/e075fbf230534f5db9f5711703a0799c/query", {},
        {
            headers: {
                "Authorization" : "secret_VxobeQzSHypMdxfPkD0ZGacqSlX2hCyIgTDI7IjxTzO",
                "Notion-Version" : "2022-06-28",
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "*"
            },
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
});

// while(true){
//     let num = prompt("100보다 큰 숫자를 입력해주세요.", "");
//     if(num === "" || num == null ||num > 100) break;
// }


// 소수(prime number)는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수입니다.
// 다시 말해서 1과 그 수 자신 이외의 자연수로는 나눌 수 없는 자연수를 소수라고 부르죠.
// 5는 2나 3, 4로 나눌 수 없기 때문에 소수입니다. 5를 이들 숫자로 나누면 나머지가 있기 때문이죠.
// 2부터 n까지의 숫자 중 소수만 출력해주는 코드를 작성해봅시다.
// n = 10이라면 결과는 2,3,5,7이 되어야겠죠.
//  주의: 작성한 코드는 임의의 숫자 n에 대해 동작해야 합니다.
// let n = 20;
// Num :
//     for(let i = 2; i <= n; i++){
//         // console.log(i);
//         for(let j = 2; j < i; j++){
//             if(i % j === 0) continue Num;
//         }
//         console.log(i);
//     }



// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask(
//     "동의하십니까?",
//     function() { alert("동의하셨습니다."); },
//     function() { alert("취소 버튼을 누르셨습니다."); }
// );