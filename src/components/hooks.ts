import Quill from "quill";

export function useQuill() {
  let quill: any;
  onMounted(() => {
    quill = new Quill("#editor", {
      modules: {
        toolbar: {
          container: "#toolbar",
          handlers: {
            file: function (value) {
              console.log("value: ", value);
            },
          },
        },
      },
      theme: "snow",
      placeholder: "请开始你的表演...",
    });
    var customButton = document.querySelector("#custom-button");
    if (customButton) {
      customButton.addEventListener("click", function () {
        var range = quill.getSelection();
        if (range) {
          quill.insertEmbed(range.index, "image", "/img/user-placeholder.webp");
        }
      });
    }
  });
  onUnmounted(() => {
    quill.destroy();
    quill = null;
  })
  return { quill };
}
