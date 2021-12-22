let getCSS=document.querySelectorAll("#getCSS")[0]
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4){
            if (request.status>=200 && request.status < 300){
                //创建style标签
                const style = document.createElement("style")
                //填写style内容
                style.innerHTML = request.response
                //插入style标签
                document.head.appendChild(style)
            }else{
                alert('css加载失败')
            }
        }

    }
    // request.onerror = () => {
    //     console.log("失败了")
    // }
    request.send()
}
let getJS= document.querySelectorAll("#getJS")[0]
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = () => {
        //创建script标签
        const script = document.createElement("script")
        //填写script内容
        script.innerHTML = request.response
        //插入script标签
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send()
}
let getHTML = document.querySelectorAll("#getHTML")[0]
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET",'/3.html')
    request.onload = () => {
        const div = document.createElement("div")
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {

    }
    request.send()
}
let getXML = document.querySelectorAll('#getXML')[0]
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >=200 && request.status < 300){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
let getJSON = document.querySelectorAll('#getJSON')[0]
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () => {
        if (request.readyState ===4 && request.status >= 200 && request.status < 300){
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}
let getPage = document.querySelectorAll('#getPage')[0]
let n = 1;
getPage.onclick= () => {
    if (n <=2){
        const request = new XMLHttpRequest()
        request.open('GET',`/page${n+1}.json`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status >= 200 && request.status < 300){
                const array = JSON.parse(request.response);
                array.forEach(item =>{
                    const li = document.createElement("li");
                    li.textContent = item.id;
                    wrapLi.appendChild(li);
                });
                n += 1;
            }
        }
        request.send()
    }else{
        alert("这是最后一页了")
    }
}