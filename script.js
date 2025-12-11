document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launch-btn");
  const pathInput = document.getElementById("program-path");

  launchBtn.addEventListener("click", () => {
    const url = pathInput.value.trim();

    if (!url) {
      alert("index.html の場所を入力してください。");
      return;
    }

    // 入力された index.html に画面を切り替え
    window.location.href = url;
  });
});