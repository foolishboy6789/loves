document.addEventListener("DOMContentLoaded", function() {
    var text = document.getElementById("text");
    var textContent = text.innerText;
    text.innerHTML = ""; // 清空原始文本内容

    var i = 0;
    var intervalId = setInterval(function() {
        if (i <= textContent.length) {
            // 为每个子字符串创建 span 元素并逐个显示
            var span = document.createElement("span");
            span.textContent = textContent.substring(0, i);
            text.innerHTML = ""; // 清空原有内容
            text.appendChild(span);
            i++;
        } else {
            clearInterval(intervalId); // 停止定时器
        }
    }, 100); // 每个字符显示的间隔时间，单位为毫秒
});