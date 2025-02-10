function run(){
    let htmlcode=document.getElementById("html-code");
    let csscode=document.getElementById("css-code");
    let jscode=document.getElementById("js-code");
    let Output=document.getElementById("output");
    Output.contentDocument.body.innerHTML=htmlcode.value+"<style>"+csscode.value +"</style>";
    Output.contentWindow.eval(jscode.value);
} 