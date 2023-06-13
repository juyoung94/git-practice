document.querySelector("#getData").addEventListener("click", () => {
    //cors error 뜨는 중..
    axios.post("https://api.notion.com/v1/databases/e075fbf230534f5db9f5711703a0799c/query", {},
        {
            headers: {
                "Authorization" : "secret_VxobeQzSHypMdxfPkD0ZGacqSlX2hCyIgTDI7IjxTzO",
                "Notion-Version" : "2022-06-28",
                "Content-Type" : "application/json"
            },
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
});