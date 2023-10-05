<template>
  <div class="article-container my-8">
    <div class="feature-article">
      <div class="feature-thumbnail">
        <img
          class="ob-hz-thumbnail"
          src="https://static.linhaojun.top/aurora/articles/3ec095cd9b7bd3f766166a4db14160c6.jpg"
        />
        <span
          class="thumbnail-screen"
          style="
            background: linear-gradient(
              130deg,
              rgb(36, 198, 220),
              rgb(84, 51, 255) 41.07%,
              rgb(255, 0, 153) 76.05%
            );
          "
        ></span>
      </div>
      <div class="feature-content text-white">
        <span>
          <b>RVC</b>
          <em># 模型</em>
        </span>
        <h1>
          <span>RVC入门</span>
        </h1>
        <p>学会了RVC入门，你就可以入门了</p>
        <div class="article-footer text-white">
          <div class="flex flex-row items-center">
            <img
              class="hover:opacity-50 cursor-pointer"
              src="https://picsum.photos/28.webp"
              alt=""
            />
            <span class="text-ob-dim">
              <strong
                class="text-ob-normal pr-1.5 hover:text-gray hover:opacity-50 cursor-pointer"
              >
                阿外西
              </strong>
              shared on Jul 28, 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.article-container {
  border-radius: 1rem;
  height: 100%;
  list-style-type: none;
  position: relative;
}

.article-container:hover .article,
.article-container:hover .feature-article {
  transform: scale(1.015);
}

.article {
  background-color: #212121;
  border-radius: 1rem;
  display: grid;
  height: 100%;
  overflow: hidden;
  position: relative;
  top: 0;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  z-index: 10;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  transition: transform 0.2s ease-in-out;
}

.article .article-thumbnail {
  position: relative;
  grid-row: span 1 / span 1;
}

.article .article-thumbnail img {
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  display: block;
  height: 120%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: 20;
}

.article .article-thumbnail .thumbnail-screen {
  height: 120%;
  opacity: 0.4;
  pointer-events: none;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 30;
  max-width: 120%;
  mix-blend-mode: screen;
}

.article .article-thumbnail:after {
  pointer-events: none;
  content: '';
  position: absolute;
  z-index: 35;
  top: 13%;
  left: 0;
  height: 120%;
  width: 100%;
  background: var(--article-cover);
}

.article .article-content {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  z-index: 40;
  grid-row: span 2 / span 2;
}

.article .article-content span {
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.1));
}

.article .article-content span b {
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
}

.article .article-content span ul {
  display: inline-flex;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 1rem;
}

.article .article-content span ul li {
  margin-right: 0.75rem;
}

.article .article-content h1 {
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .article .article-content h1 {
    margin-top: 1rem;
    margin-bottom: 1.25rem;
  }
}

.article .article-content p {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  word-break: break-all;
}

.article .article-content .article-footer {
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-start;
  flex: 1 1 0%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
}

.article .article-content .article-footer img {
  border-radius: 9999px;
  margin-right: 0.5rem;
  height: 28px;
  width: 28px;
}

.feature-article {
  background-color: #212121;
  border-radius: 1rem;
  display: grid;
  overflow: hidden;
  position: relative;
  top: 0;

  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  z-index: 10;
  grid-template-rows: repeat(3, minmax(0, 1fr));
}

@media (min-width: 1024px) {
  .feature-article {
    height: 28rem;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: none;
  }
}

.feature-article {
  transition: transform 0.2s ease-in-out;
}

.feature-article .feature-thumbnail {
  position: relative;
  grid-row: span 1 / span 1;
}

@media (min-width: 1024px) {
  .feature-article .feature-thumbnail {
    grid-row: auto;
  }
}

.feature-article .feature-thumbnail img {
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 120%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 20;
}

@media (min-width: 1024px) {
  .feature-article .feature-thumbnail img {
    height: 28rem;
    width: 120%;
  }
}

.feature-article .feature-thumbnail span {
  height: 120%;
  opacity: 0.4;
  pointer-events: none;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 30;
}

@media (min-width: 1024px) {
  .feature-article .feature-thumbnail span {
    height: 28rem;
    width: 120%;
  }
}

.feature-article .feature-thumbnail::after {
  pointer-events: none;
  content: '';
  position: absolute;
  z-index: 35;
  left: 71%;
  top: 0;
  height: 100%;
  width: 50%;
  --gradient-cover: linear-gradient(
    90deg,
    rgba(33, 33, 33, 0) 0,
    rgba(33, 33, 33, 0.013) 8.1%,
    rgba(33, 33, 33, 0.049) 15.5%,
    rgba(33, 33, 33, 0.104) 22.5%,
    rgba(33, 33, 33, 0.175) 29%,
    rgba(33, 33, 33, 0.259) 35.3%,
    rgba(33, 33, 33, 0.352) 41.2%,
    rgba(33, 33, 33, 0.45) 47.1%,
    rgba(33, 33, 33, 0.55) 52.9%,
    rgba(33, 33, 33, 0.648) 58.8%,
    rgba(33, 33, 33, 0.741) 64.7%,
    rgba(33, 33, 33, 0.825) 71%,
    rgba(33, 33, 33, 0.896) 77.5%,
    rgba(33, 33, 33, 0.951) 84.5%,
    rgba(33, 33, 33, 0.987) 91.9%,
    #212121
  );
  background: var(--gradient-cover);
}

.feature-article .feature-content {
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  z-index: 40;
  grid-row: span 2 / span 2;
}

@media (min-width: 1024px) {
  .feature-article .feature-content {
    padding: 3rem;
    grid-row: auto;
  }
}

.feature-article .feature-content b {
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
}

@media (min-width: 1024px) {
  .feature-article .feature-content b {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

.feature-article .feature-content ul {
  display: inline-flex;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 1rem;
}

@media (min-width: 1024px) {
  .feature-article .feature-content ul {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

.feature-article .feature-content ul li {
  margin-right: 0.75rem;
}

.feature-article .feature-content h1 {
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .feature-article .feature-content h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
}

.feature-article .feature-content p {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {
  .feature-article .feature-content p {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.feature-article .feature-content p {
  word-wrap: break-word;
  word-break: break-all;
}

.feature-article .feature-content .article-footer {
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-start;
  flex: 1 1 0%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
}

.feature-article .feature-content .article-footer img {
  border-radius: 9999px;
  margin-right: 0.5rem;
  height: 28px;
  width: 28px;
}

.thumbnail-screen {
  max-width: 120%;
  mix-blend-mode: screen;
}

@media (max-width: 1023px) {
  .feature-article > div:first-of-type:after {
    top: 13%;
    left: 0;
    height: 120%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(33, 33, 33, 0) 0,
      rgba(33, 33, 33, 0.013) 8.1%,
      rgba(33, 33, 33, 0.049) 15.5%,
      rgba(33, 33, 33, 0.104) 22.5%,
      rgba(33, 33, 33, 0.175) 29%,
      rgba(33, 33, 33, 0.259) 35.3%,
      rgba(33, 33, 33, 0.352) 41.2%,
      rgba(33, 33, 33, 0.45) 47.1%,
      rgba(33, 33, 33, 0.55) 52.9%,
      rgba(33, 33, 33, 0.648) 58.8%,
      rgba(33, 33, 33, 0.741) 64.7%,
      rgba(33, 33, 33, 0.825) 71%,
      rgba(33, 33, 33, 0.896) 77.5%,
      rgba(33, 33, 33, 0.951) 84.5%,
      rgba(33, 33, 33, 0.987) 91.9%,
      #212121
    );
  }
}
</style>
