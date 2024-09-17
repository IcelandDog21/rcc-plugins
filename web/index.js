window.addEventListener("scroll", () => {
    var header = document.querySelector(".sidebar-main");
    header.classList.toggle("sticky", window.scrollY > 0);
    var img = document.querySelector(".sidebar-img");
    img.classList.toggle("sticky-img", window.scrollY > 0);
})

// 打字效果
document.addEventListener('DOMContentLoaded', function () {
    var typingEffect = document.getElementById('typing-effect');
    var text = "一个致力于Minecraft 红石的社区."; // 你想要显示的文本
    var index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 400); // 等待1秒后开始打字效果
});
