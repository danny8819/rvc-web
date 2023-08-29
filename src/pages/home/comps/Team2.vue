<template>
  <div class="team">
    <div class="title">
      <p>我们的团队 Our Team</p>
    </div>
    <div id="banner">
      <div class="img-list img-wrapper">
        <div
          class="img-box"
          v-for="(member, i) in members"
          :id="i != members.length - 1 ? null : 'last-img-box'"
        >
          <div class="info">
            <h3>{{ member.nickname }}</h3>
            <h4>{{ member.role }}</h4>
            <h5>{{ member.description }}</h5>
          </div>
          <img :src="member.img" alt="" />
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button
        class="last btn"
        @click="throttle(() => clickFun('last'), animationTime * 1000)"
      >
        <svg
          t="1686471404424"
          class="icon left"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2373"
          width="128"
          height="128"
        >
          <path
            d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
            fill=""
            p-id="2374"
          ></path>
        </svg>
      </button>
      <button
        class="next btn"
        @click="throttle(() => clickFun('next'), animationTime * 1000)"
      >
        <svg
          t="1686471404424"
          class="icon right"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2373"
          width="128"
          height="128"
        >
          <path
            d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
            fill=""
            p-id="2374"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { getMember } from "@/api/website";

export default {
  name: "Team2",
  data() {
    return {
      imgListOne: [],
      imgBoxList: [],
      imgBoxCount: 0,
      root: null,
      timer: null,
      lastImgBox: null,
      postSpacing: null,
      postSize: null,
      imgListLength: 0,
      index: 0,
      indexOne: 1,
      animationTime: 0.5,
      btnGroup: null,
      imgBoxLength: 0,
      members: [],
      leftInit: 0,
      rightInit: 0,
    };
  },
  async mounted() {
    await getMember().then((res) => {
      this.members = res.data.members;
    });
    this.imgListOne = document.getElementsByClassName("img-list")[0];
    this.imgBoxList = Array.from(document.getElementsByClassName("img-box"));
    this.imgBoxCount = this.imgBoxList.length;
    console.log(this.imgBoxCount);
    this.root = document.documentElement;
    this.lastImgBox = document.getElementById("last-img-box");

    this.postSpacing = Number(
      getComputedStyle(this.root)
        .getPropertyValue("--post-spacing")
        .replace("vw", "")
    );
    this.postSize = Number(
      getComputedStyle(this.root)
        .getPropertyValue("--post-size")
        .replace("vw", "")
    );
    this.imgListLength = (this.postSize + this.postSpacing) * this.imgBoxCount;
    this.timer = null;
    this.imgBoxList.unshift(this.imgBoxList.pop());
    this.imgListOne.style.transition = this.animationTime + "s ease";
    this.btnGroup = document.querySelector(".btn-group");
    this.imgBoxLength = this.postSize + this.postSpacing;
    this.leftInit = (this.postSize + this.postSpacing) * this.imgBoxCount;
    this.lastImgBox.style.transform =
      `translateX(` + -1 * this.leftInit + `vw)`;
    console.log(this.leftInit);
    setTimeout(() => {
      this.btnGroup.style.opacity = "1";
      this.btnGroup.style.bottom = "5%";
    }, this.animationTime * 1000);
  },
  methods: {
    clickFun(flag) {
      if (flag == "next") {
        this.index--;
        // 因为右边没有显示的图片比较多，所以可以直接先整体向左移动
        this.imgListOne.style.left = this.imgBoxLength * this.index + "vw";
        setTimeout(() => {
          this.imgListOne.style.transition = "none";
          // 当点击下一个累计达到图片数量时，相当于要回到原点，则重置变量和位置
          if (Math.abs(this.index) === this.imgBoxCount) {
            this.index = 0;
            this.imgListOne.style.left = 0;
            this.imgBoxList.forEach((item) => {
              if (item.id === "last-img-box") {
                item.style.transform =
                  `translateX(` + -1 * this.leftInit + `vw)`;
              } else {
                item.style.transform = "none";
              }
            });
          } else {
            // 当第一张图片为last-img-box时，说明已经跑完了一轮，则将其放在最后的位置，初始状态其为-160.68vw
            if (this.imgBoxList[0].id == "last-img-box") {
              this.lastImgBox.style.transition = "none";
              this.lastImgBox.style.transform = "translateX(0px)";
            } else if (this.index >= 0) {
              /*
                  这种情况是为了解决在点击完第last，再点击next时造成的bug问题，其实就是回退，再点击last之前
                  没有加transform属性，点击last以后则添加了transform属性，再次点击next按钮后应该不加transform
              */
              this.imgBoxList[0].style.transform = "none";
            } else {
              // 正常情况下，点击next，则将最左侧的图片移到最后
              this.imgBoxList[0].style.transform =
                `translateX(` + this.leftInit + `vw)`;
            }
          }
          // 模拟移动情况，将最左侧的图片（元素）移动到最后
          this.imgBoxList.push(this.imgBoxList.shift());
        }, this.animationTime * 1000);
      } else {
        // 上一张 last
        this.index++;
        // 模拟移动情况，把最右侧的图片（元素）移动到最前
        this.imgBoxList.unshift(this.imgBoxList.pop());
        // 因为左侧图片只会有一张，所以需要先移动图片到左侧，再进行imgListOne的移到
        if (this.imgBoxList[0].id === "last-img-box" && this.index !== 0) {
          // 当第一张图片为last-img-box时，说明已经跑完了一轮，此时相对于一开始的位置为-321.36vw
          this.imgBoxList[0].style.transform =
            `translateX(` + -2 * this.leftInit + `vw)`;
        } else if (this.index < 0) {
          // 这种情况与点击next按钮出现的回退现象一致
          this.imgBoxList[0].style.transform = "none";
        } else {
          // 正常情况下，点击last，则将最右侧的图片移到最前
          this.imgBoxList[0].style.transform =
            `translateX(` + -1 * this.leftInit + `vw)`;
        }
        this.imgListOne.style.left = this.imgBoxLength * this.index + "vw";
        console.log(this.lastImgBox);
        // 当点击下一个累计达到图片数量时，相当于要回到原点，则重置变量和位置
        if (Math.abs(this.index) == this.imgBoxCount) {
          this.index = 0;
          setTimeout(() => {
            this.imgListOne.style.transition = "none";
            this.imgListOne.style.left = 0;
            this.imgBoxList.forEach((item) => {
              if (item.id === "last-img-box") {
                item.style.transform =
                  `translateX(` + -1 * this.leftInit + `vw)`;
              } else {
                item.style.transform = "none";
              }
            });
          }, this.animationTime * 1000);
        }
      }
      this.imgListOne.style.transition = this.animationTime + "s ease";
    },
    throttle(fn, delay) {
      if (this.timer) {
        return;
      }
      fn.apply(this, arguments);
      this.timer = setTimeout(() => {
        this.timer = null;
      }, delay);
    },
  },
};
</script>

<style scoped></style>
