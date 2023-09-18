import Quill from "quill";
import "quill/dist/quill.snow.css";

export function useQuill(el:string="#editor") {
  const quill = ref();
  onMounted(() => {
    if(!document.querySelector(el)){
        return
    }
    quill.value = new Quill(el, {
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
    const customButton = document.querySelector("#custom-button");
    if (customButton) {
      customButton.addEventListener("click", function () {
        const range = quill.value.getSelection();
        if (range) {
          quill.value.insertEmbed(range.index, "image", "/img/user-placeholder.webp");
        }
      });
    }
  });
  onUnmounted(() => {
    quill.value.destroy();
    quill.value = null;
  })
  return { quill };
}
