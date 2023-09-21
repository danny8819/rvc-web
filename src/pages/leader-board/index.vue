<template>
  <div class="container-1200">
    <div class="leader-board">
      <div class="leader-board-left">
        <button class="leader-board-left-item" data-active="true">
          <span
            ><span
              ><div>
                <div>Creators</div>
              </div></span
            ><span class=" " data-active="true"></span
          ></span>
        </button>

        <button class="leader-board-left-item">
          <span
            ><span
              ><div>
                <div>Creators (mature)</div>
              </div></span
            ><span class=" "></span
          ></span>
        </button>

        <button class="leader-board-left-item">
          <span
            ><span
              ><div>
                <div>New Creators</div>
              </div></span
            ><span class=" "></span
          ></span>
        </button>

        <button class="leader-board-left-item">
          <span
            ><span
              ><div>
                <div>Creators (SDXL)</div>
              </div></span
            ><span class=" "></span
          ></span>
        </button>
      </div>

      <div class="leader-board-right">
        <div class="mantine-16p2n18">
          <div class="leader-board__title-wrap">
            <h1 class="mantine-1bf5ncy">Creators</h1>
            <button class="mantine-k3za0l">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                ></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </button>
          </div>
          <div class="leader-board__desc-wrap">
            <div class="mantine-ffu62h">
              Top model creators in the community
            </div>
            <button class="mantine-4nb3cp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="  "
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </button>
          </div>
          <div class="leader-board__time-wrap">
            As of September 18, 2023 8:00am. Refreshes in:
            <span class="mantine-ljqvxq">5 hours and 53 minutes</span>
          </div>
          <div class="leader-board__creators-list">
            <div class="listitem" v-for="(item, index) in 11" :key="index">
              <div class="mantine-nkpavc">
                <div class="mantine-1tzm6pr">
                  <div class="mantine-1azqbd9">
                    <div class="mantine-160pczo">
                      <div class="mantine-1j3zg8g">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fcc419"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="mantine-1x18yxx"
                          style="fill: rgb(252, 196, 25)"
                        >
                          <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                        </svg>
                        <div class="mantine-hl2r30">1</div>
                      </div>
                    </div>
                    <div class="mantine-hhhjsb">
                      <div class="mantine-kh5kgh">
                        <div class="mantine-1gg8vod">
                          <div class="mantine-7682u5">
                            <img
                              loading="lazy"
                              class="mantine-1trwvlz"
                              src="https://cdn.discordapp.com/avatars/180327464155742208/59254be18ccd627daf138d053327485d.png"
                              alt="Lykon's Avatar"
                            />
                          </div>
                          <div class="mantine-1qlxz9s">
                            <div class="mantine-1u5ck20">
                              <div class="mantine-1gg8vod">
                                <div>Lykon</div>
                                <div style="display: flex">
                                  <img
                                    src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b80644c0-465b-4ddf-bda6-b711f8df115a/width=28/b80644c0-465b-4ddf-bda6-b711f8df115a.jpeg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mantine-1u5ck20">
                          <div class="mantine-zzljas">
                            <span class="mantine-145h3id"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="  "
                              >
                                <path d="M8 21l8 0"></path>
                                <path d="M12 17l0 4"></path>
                                <path d="M7 4l10 0"></path>
                                <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
                                <path
                                  d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                                ></path>
                                <path
                                  d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                                ></path></svg></span
                            ><span class="mantine-h9iq4m">116,125</span>
                          </div>
                          <div class="mantine-zzljas">
                            <span class="mantine-145h3id"
                              ><div class="mantine-Rating-root mantine-3whl0h">
                                <div
                                  data-active="false"
                                  class="mantine-116ok0u mantine-Rating-symbolGroup"
                                >
                                  <div
                                    class="mantine-16zn1oj"
                                    data-read-only="true"
                                    for="mantine-r3ra-0-0"
                                  >
                                    <div class="mantine-om7bs8">
                                      <svg
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mantine-r36d0n"
                                      >
                                        <path
                                          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div
                                    class="  "
                                    data-read-only="true"
                                    for="mantine-r3ra-0-1"
                                  >
                                    <div class=" ">
                                      <svg
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mantine-r36d0n"
                                      >
                                        <path
                                          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-active="false"
                                  class="mantine-116ok0u mantine-Rating-symbolGroup"
                                >
                                  <div
                                    class="  "
                                    data-read-only="true"
                                    for="mantine-r3ra-1-0"
                                  >
                                    <div class=" ">
                                      <svg
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mantine-r36d0n"
                                      >
                                        <path
                                          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-active="false"
                                  class="mantine-116ok0u mantine-Rating-symbolGroup"
                                >
                                  <div
                                    class="  "
                                    data-read-only="true"
                                    for="mantine-r3ra-2-0"
                                  >
                                    <div class=" ">
                                      <svg
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mantine-r36d0n"
                                      >
                                        <path
                                          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-active="false"
                                  class="mantine-116ok0u mantine-Rating-symbolGroup"
                                >
                                  <div
                                    class="  "
                                    data-read-only="true"
                                    for="mantine-r3ra-3-0"
                                  >
                                    <div class=" ">
                                      <svg
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mantine-r36d0n"
                                      >
                                        <path
                                          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-active="false"
                                  class="mantine-116ok0u mantine-Rating-symbolGroup"
                                >
                                  <div
                                    class="  "
                                    data-read-only="true"
                                    for="mantine-r3ra-4-0"
                                  >
                                    <div class=" ">
                                      <svg
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mantine-r36d0n"
                                      >
                                        <path
                                          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div></div></span
                            ><span class="mantine-h9iq4m">409</span>
                          </div>
                          <div class="mantine-zzljas">
                            <span class="mantine-145h3id"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class=" "
                              >
                                <path
                                  d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                                ></path></svg></span
                            ><span class="mantine-h9iq4m">18k</span>
                          </div>
                          <div class="mantine-zzljas">
                            <span class="mantine-145h3id"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="  "
                              >
                                <path
                                  d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
                                ></path>
                                <path d="M7 11l5 5l5 -5"></path>
                                <path d="M12 4l0 12"></path></svg></span
                            ><span class="mantine-h9iq4m">133k</span>
                          </div>
                          <div class="mantine-zzljas">
                            <span class="mantine-145h3id"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class=" "
                              >
                                <path
                                  d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"
                                ></path>
                                <path
                                  d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"
                                ></path>
                                <path d="M9.7 17l4.6 0"></path></svg></span
                            ><span class="mantine-h9iq4m">4</span>
                          </div>
                          <div class="mantine-zzljas">
                            <span class="mantine-145h3id"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#51cf66"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class=" "
                              >
                                <path d="M5 12l5 5l10 -10"></path></svg></span
                            ><span class="mantine-h9iq4m">11</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.leader-board {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}
.leader-board-left {
  width: 100%;
  max-width: 300px;

  .leader-board-left-item {
    &[data-active] {
      border-right-color: rgb(24, 100, 171);
      color: rgb(165, 216, 255);
      background-color: rgba(25, 113, 194, 0.2);
    }

    cursor: pointer;
    border-width: 0px 1px 0px 0px;
    border-top-style: initial;
    border-bottom-style: initial;
    border-left-style: initial;
    border-top-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image: initial;
    appearance: none;
    font-size: 16px;
    background-color: transparent;
    text-align: left;
    color: rgb(193, 194, 197);
    text-decoration: none;
    box-sizing: border-box;
    display: flex;

    align-items: center;
    width: 100%;
    padding: 8px 12px;
    user-select: none;
    border-right-style: solid;
    border-right-color: rgb(33, 37, 41);

    &:hover {
      background-color: rgb(37, 38, 43);
    }
  }
}

.leader-board-right {
  box-sizing: border-box;
  width: 550px;
  padding: 12px;
  margin-left: 20px;

  .mantine-16p2n18 {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0px;
    width: 100%;
    max-width: 600px;
    .leader-board__title-wrap {
      box-sizing: border-box;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      gap: 8px;

      .mantine-1bf5ncy {
        color: inherit;
        text-decoration: none;

        font-weight: 700;
        font-size: 34px;
        line-height: 1.3;
        margin: 0px;
      }
      .mantine-k3za0l {
        cursor: pointer;
        appearance: none;
        font-size: 16px;
        text-align: left;
        text-decoration: none;
        box-sizing: border-box;
        border: 1px solid transparent;
        background-color: transparent;
        color: rgb(233, 236, 239);
        position: relative;
        height: 28px;
        min-height: 28px;
        width: 28px;
        min-width: 28px;
        border-radius: 4px;
        padding: 0px;
        line-height: 1;

        align-items: center;

        justify-content: center;
        display: none;
      }
    }
    .leader-board__desc-wrap {
      box-sizing: border-box;
      display: flex;
      flex-flow: wrap;

      align-items: center;

      justify-content: flex-start;
      gap: 5px;
      .mantine-ffu62h {
        color: rgb(144, 146, 150);
        font-size: 18px;
        line-height: 1.55;
        text-decoration: none;
      }
      .mantine-4nb3cp {
        cursor: pointer;
        appearance: none;
        font-size: 16px;
        text-align: left;
        text-decoration: none;
        box-sizing: border-box;
        border: 1px solid transparent;
        background-color: transparent;
        color: rgb(233, 236, 239);
        position: relative;
        height: 22px;
        min-height: 22px;
        width: 22px;
        min-width: 22px;
        border-radius: 4px;
        padding: 0px;
        line-height: 1;
        display: flex;

        align-items: center;

        justify-content: center;
      }
    }
    .leader-board__time-wrap {
      color: rgb(144, 146, 150);
      font-size: 12px;
      line-height: 1.55;
      text-decoration: none;
      margin-bottom: 20px;
      .mantine-ljqvxq {
        color: inherit;
        font-size: inherit;
        line-height: 1.55;
        
        text-decoration: none;
      }
    }

    .leader-board__creators-list {
      width: 100%;
      max-width: 100%;

      .listitem {
        margin-bottom: 18px;
        .mantine-nkpavc {
          min-height: 98px;
          .mantine-1tzm6pr {
            outline: 0px;

            display: block;
            text-decoration: none;
            color: rgb(193, 194, 197);
            background-color: rgb(26, 27, 30);
            box-sizing: border-box;
            border-radius: 8px;
            box-shadow:
              rgba(0, 0, 0, 0.05) 0px 1px 3px,
              rgba(0, 0, 0, 0.1) 0px 1px 2px;
            border: 1px solid rgb(55, 58, 64);
            padding: 12px;

            .mantine-1azqbd9 {
              margin: -8px;
              display: flex;
              flex-wrap: wrap;

              justify-content: flex-start;

              align-items: center;

              .mantine-160pczo {
                box-sizing: border-box;
                
                flex: 0 0 16.6667%;
                padding: 8px;
                max-width: 16.6667%;
                .mantine-1j3zg8g {
                  display: flex;
                  flex-direction: column;

                  align-items: center;

                  justify-content: flex-start;
                  gap: 0px;
                  position: relative;
                  .mantine-1x18yxx {
                    fill: rgb(252, 196, 25);
                    // fill: rgb(173, 181, 189);
                    // fill: rgb(255, 146, 43);
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0.4;
                  }
                }
              }
              .mantine-hhhjsb {
                box-sizing: border-box;
                
                flex: 0 0 83.3333%;
                padding: 8px;
                max-width: 83.3333%;
                .mantine-kh5kgh {
                  display: flex;
                  flex-direction: column;

                  align-items: stretch;

                  justify-content: flex-start;
                  gap: 8px;
                  .mantine-1gg8vod {
                    box-sizing: border-box;

                    display: flex;

                    flex-direction: row;

                    align-items: center;
                    
                    
                    
                    flex-wrap: nowrap;

                    justify-content: flex-start;
                    gap: 8px;
                    .mantine-7682u5 {
                      box-sizing: border-box;
                      position: relative;
                      display: block;
                                                                                  user-select: none;
                      overflow: hidden;
                      width: 38px;
                      min-width: 38px;
                      height: 38px;
                      border-radius: 32px;
                      
                      text-decoration: none;
                      border: 0;
                      background-color: transparent;
                      padding: 0;
                      background-color: rgba(0, 0, 0, 0.31);
                      .mantine-1trwvlz {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                        display: block;
                      }
                    }
                  }
                  .mantine-1u5ck20 {
                    box-sizing: border-box;

                    display: flex;

                    flex-direction: row;

                    align-items: center;

                    flex-wrap: wrap;

                    justify-content: flex-start;
                    gap: 4px;
                    .mantine-zzljas {
                      font-size: 13px;
                      height: 26px;
                      line-height: 24px;
                      text-decoration: none;
                      padding: 0px 5px 0px 3px;
                      box-sizing: border-box;
                      display: inline-flex;

                      align-items: center;

                      justify-content: center;
                      width: auto;
                      text-transform: uppercase;
                      border-radius: 4px;
                      font-weight: 700;
                      letter-spacing: 0.25px;
                      cursor: inherit;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      background: rgb(52, 58, 64);
                      color: rgb(255, 255, 255);
                      border: 1px solid transparent;
                      .mantine-145h3id {
                        margin-right: calc(10px / 2);
                        line-height: 1;
                        margin-right: 4px;
                      }
                      .mantine-h9iq4m {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


</style>
