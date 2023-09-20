import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const BlockEmbed = Quill.import('blots/block/embed');
class AudioBlot extends BlockEmbed {
    static create(value) {
        const node = super.create();
        node.setAttribute('src', value.url);     
        node.setAttribute('controls', true);     
        node.setAttribute('controlsList', 'nodownload');//设置audio的下载功能为不能下载
        node.setAttribute('id', 'voice'); // 设置一个id
        return node;
    }

    // static value(node) {
    //   return {
    //     url: node.getAttribute('src')
    //   };
    // }
}
AudioBlot.blotName = 'audio';
AudioBlot.tagName = 'audio';
Quill.register(AudioBlot);
export function useQuill(el: string = '#editor') {
  const quill = ref();
  onMounted(() => {
    if (!document.querySelector(el)) {
      return;
    }
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'], 

      ['blockquote', 'code-block'],
      
    ];
    quill.value = new Quill(el, {
      theme: 'snow',
      placeholder: '请开始你的表演...',
      modules: {
        toolbar: {
          container: '#toolbar',
          // container: toolbarOptions,
          handlers: {
            file: function (value) {
              console.log('value: ', value);
            },
            link: function (value) {
              if (value) {
                const href = prompt('Enter the URL');
                this.quill.format('link', href);
              } else {
                this.quill.format('link', false);
              }
            },
            voice:function (value){
               
              const length = quill.value.getSelection().index;
              
              // 插入的位置 标签类型 参数，将传入到create的方法中去 source: String = 'api' 
              quill.value.insertEmbed(length, 'audio',  { url: 'https://web-tool.dolam.top/ikun/%E9%B8%A1.wav' }, "api");
              quill.value.setSelection(length + 1);  //光标位置向后移动一位 
            }
          },
        },
      },
    });



   

   

    // 外置toolbar
    const customButton = document.querySelector('#custom-button');
    console.log('customButton: ', customButton);
    if (customButton) {
      customButton.addEventListener('click', function () {
        const range = quill.value.getSelection();
        console.log('range: ', range);
        if (range) {
          quill.value.insertEmbed(
            range.index,
            'image',
            '/img/user-placeholder.webp',
          );
        }
      });
    }
  });
  onUnmounted(() => {
    quill.value.destroy();
    quill.value = null;
  });
  return { quill };
}
