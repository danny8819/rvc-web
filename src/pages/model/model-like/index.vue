<template>
  <div class="model-like">
    <div class="">
      <div class="model-container" style="width: 992px">
        <!-- title -->
        <h1 class="model-title">喜欢的模型</h1>
        <!-- content -->
        <div class="model-content">
          <!-- tabs -->
          <TabsBox />
          <!-- filter -->
          <FilterBox />
          <!-- tags -->
          <TagsScroll />
          <!-- 模型 -->
          <div style="position: relative">
            <div class="model-63e7k9">
              <div
                class="model-16xlp3a"
                v-for="(item, index) in splitData"
                :key="index"
              >
                <ModelCard v-for="(i, j) in item" :data="i" :key="j" />
              </div>
            </div>
            <!-- 底部 -->
            <div class="model-116ea4z">
              <div
                class="model-Divider-root model-Divider-horizontal model-Divider-withLabel model-1wj58lv"
                role="separator"
              >
                <div class="model-6egeyz">
                  <div class="footer-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-clock"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                    已获取全部数据
                  </div>
                </div>
              </div>
              <div class="model-8od8ev">
                <div class="model-l8k4bd">
                  <div class="model-1jt6jod">使用筛选工具可获取更多信息</div>
                  <div class="model-1xmuiwy">回到顶部</div>
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
import TagsScroll from '@/pages/model/model-like/TagsScroll.vue';
import FilterBox from '@/pages/model/model-like/FilterBox.vue';
import ModelCard from '@/pages/model/model-like/ModelCard.vue';
import TabsBox from '@/pages/model/model-like/TabsBox.vue';

const imgs = [
  {
    id: 2513691,
    userId: 1471097,
    name: '00213-637001597.png',
    url: '2380abe2-5f86-4c6b-95ba-a25ee144f4e6',
    nsfw: 'None',
    width: 800,
    height: 1104,
    hash: 'UAGuRgBY-y00tpRh0e%MNpxvS~^+LN.8vyv|',
    type: 'image',
    metadata: {
      hash: 'UAGuRgBY-y00tpRh0e%MNpxvS~^+LN.8vyv|',
      size: 1534570,
      width: 800,
      height: 1104,
    },
    modelVersionId: 162380,
    tags: [
      114500, 5262, 5228, 115513, 6350, 5787, 5786, 110302, 3655, 5785, 115460,
      1853, 150102, 5499, 129015, 192, 7712, 111760, 5484, 111754, 66, 4, 5193,
      1930,
    ],
  },
  {
    id: 2512167,
    userId: 1471097,
    name: '00097-3915717363.png',
    url: '98fc4f52-566d-49e9-8c2d-02524b9dde2f',
    nsfw: 'Soft',
    width: 768,
    height: 1072,
    hash: 'UBH-Dj544mIW5ONfXnwHWF-U~BI;9Hx[$g?G',
    type: 'image',
    metadata: {
      hash: 'UBH-Dj544mIW5ONfXnwHWF-U~BI;9Hx[$g?G',
      size: 1181600,
      width: 768,
      height: 1072,
    },
    modelVersionId: 162380,
    tags: [
      5163, 192, 66, 5133, 5484, 111754, 111882, 5193, 1705, 114500, 5262, 5228,
      5148, 115513, 111960, 3645, 3643, 3641, 5787, 4213, 115041, 531, 5786,
      5791, 3655, 5785, 111763, 3622, 8447, 3626, 7229, 22328, 9143, 115460,
      110749, 5110, 3787, 120929, 321, 162017, 390, 383, 116876, 112345, 147145,
      131458, 6015, 113104, 6924,
    ],
  },
  {
    id: 2512594,
    userId: 1471097,
    name: '00124-2663865681.png',
    url: '3601e73a-f779-4394-ad52-03d0b72ad167',
    nsfw: 'None',
    width: 768,
    height: 1024,
    hash: 'UKKdi4xux^IA9a8{?bR+VsE2xujE~qIUxvxa',
    type: 'image',
    metadata: {
      hash: 'UKKdi4xux^IA9a8{?bR+VsE2xujE~qIUxvxa',
      size: 980497,
      width: 768,
      height: 1024,
    },
    modelVersionId: 162380,
    tags: [
      7802, 66, 5193, 112022, 833, 111761, 112777, 20693, 111939, 111778,
      112368, 114500, 5262, 5228, 5148, 3642, 5773, 1930, 3643, 5787, 5109,
      27182, 115693, 5785, 3623, 4087, 114599, 122842, 192,
    ],
  },
  {
    id: 2511980,
    userId: 1471097,
    name: '00078-3361226529.png',
    url: '52805f32-cf80-48bc-93fd-6bc071ecbf02',
    nsfw: 'None',
    width: 768,
    height: 1072,
    hash: 'U8BgVj=bcn9|59NE4ot-+a~q]o8{O]HsOFH@',
    type: 'image',
    metadata: {
      hash: 'U8BgVj=bcn9|59NE4ot-+a~q]o8{O]HsOFH@',
      size: 1163978,
      width: 768,
      height: 1072,
    },
    modelVersionId: 162380,
    tags: [
      114500, 5262, 115513, 5453, 15772, 3800, 27182, 5169, 3350, 115460, 2193,
      143276, 1441, 110937, 110958, 3819, 5163, 192, 66, 5133, 5484, 111754,
    ],
  },
  {
    id: 2511911,
    userId: 1471097,
    name: '00075-2070379043.png',
    url: 'e7f8dc7d-d1b3-4f49-91e0-e1fc3da093a0',
    nsfw: 'None',
    width: 768,
    height: 1072,
    hash: 'UDF=aVro~C~W_3D%0g?H^aXo9G?G^cSjIpxU',
    type: 'image',
    metadata: {
      hash: 'UDF=aVro~C~W_3D%0g?H^aXo9G?G^cSjIpxU',
      size: 1223156,
      width: 768,
      height: 1072,
    },
    modelVersionId: 162380,
    tags: [
      5163, 5232, 66, 5484, 111754, 4, 8211, 111780, 111781, 5262, 115513,
      78490, 114273, 122902, 531, 111782, 114923, 3622, 111850, 16001, 3725,
      129859, 161864, 5169, 1422, 161839, 120244, 162034, 140255, 5310, 2607,
      161865, 313, 162113, 7659, 110771, 119036, 111704, 5231,
    ],
  },
  {
    id: 2511881,
    userId: 1471097,
    name: '00026-1918875782.png',
    url: '7d3d0492-8c84-4b59-b8f4-7f62db3fa5ac',
    nsfw: 'None',
    width: 720,
    height: 1048,
    hash: 'UCHB3;=^69=r{]InIAM{GvwZOYOZ}mNM4o#Q',
    type: 'image',
    metadata: {
      hash: 'UCHB3;=^69=r{]InIAM{GvwZOYOZ}mNM4o#Q',
      size: 1203638,
      width: 720,
      height: 1048,
    },
    modelVersionId: 162380,
    tags: [
      114500, 5262, 5228, 115513, 5798, 15772, 2687, 6350, 5193, 1930, 833,
      111761, 111939, 5163, 66, 5133, 5484, 111754, 112378, 4, 7802, 5773, 5787,
      6997, 110302, 111857, 161816, 116235, 5942, 3350, 115460, 130570, 5780,
      143276, 123080, 27192, 111524, 111680, 192,
    ],
  },
  {
    id: 2512699,
    userId: 1471097,
    name: '00127-2236095291.png',
    url: 'c2fbfa0c-e5e4-4de2-8413-c8ab0fdaae92',
    nsfw: 'Soft',
    width: 768,
    height: 1024,
    hash: 'UBI4hqyX00$d010K}]xZTc9[$SH@Mx55-;%L',
    type: 'image',
    metadata: {
      hash: 'UBI4hqyX00$d010K}]xZTc9[$SH@Mx55-;%L',
      size: 1055829,
      width: 768,
      height: 1024,
    },
    modelVersionId: 162380,
    tags: [
      66, 5193, 7802, 5484, 111754, 5791, 112715, 114500, 5262, 5228, 111960,
      2687, 6350, 5773, 5787, 531, 7954, 1238, 3627, 111763, 6923, 7157, 3852,
      7229, 4286, 5942, 115460, 111783, 110749, 123249, 5110, 111794, 162279,
      122400, 111785, 137163, 55, 161889, 111797, 162282, 7903, 130825, 163237,
      192, 6924,
    ],
  },
  {
    id: 2511876,
    userId: 1471097,
    name: '00072-2364398952.png',
    url: '5d31064e-7d52-4623-9400-48c6fc04f911',
    nsfw: 'None',
    width: 768,
    height: 1072,
    hash: 'UBEV.|E18_?b?wX9McjEpe%M9FIUITxaDiRO',
    type: 'image',
    metadata: {
      hash: 'UBEV.|E18_?b?wX9McjEpe%M9FIUITxaDiRO',
      size: 1336949,
      width: 768,
      height: 1072,
    },
    modelVersionId: 162380,
    tags: [
      3819, 6594, 111834, 111835, 5262, 115513, 3350, 116352, 3084, 2879, 448,
      140292,
    ],
  },
  {
    id: 2512544,
    userId: 1471097,
    name: '00118-1546989934.png',
    url: 'ad44bcd2-092d-49ca-a588-281614f6a14d',
    nsfw: 'None',
    width: 768,
    height: 1024,
    hash: 'UDHn$?nO_N?v8_i^?cIU.TI:^+^kyDSgn$~q',
    type: 'image',
    metadata: {
      hash: 'UDHn$?nO_N?v8_i^?cIU.TI:^+^kyDSgn$~q',
      size: 1190399,
      width: 768,
      height: 1024,
    },
    modelVersionId: 162380,
    tags: [
      111754, 66, 5484, 4211, 5772, 5163, 192, 5133, 112483, 15772, 7802,
      111844, 111845, 114500, 5262, 5228, 115513, 2687, 3800, 27182, 6997,
      110302, 125495, 115460, 112218, 117074, 5248,
    ],
  },
  {
    id: 2512773,
    userId: 1471097,
    name: '00132-1543619246.png',
    url: '22859b70-e106-4866-b74a-b1c63595a41b',
    nsfw: 'None',
    width: 768,
    height: 1024,
    hash: 'UEKdY-M$,l~T,C-q$,9F4n?a~WIp~CD*-qt7',
    type: 'image',
    metadata: {
      hash: 'UEKdY-M$,l~T,C-q$,9F4n?a~WIp~CD*-qt7',
      size: 1231750,
      width: 768,
      height: 1024,
    },
    modelVersionId: 162380,
    tags: [
      5163, 6652, 192, 66, 111778, 5133, 4, 7620, 2397, 111753, 5484, 111754,
      114500, 5262, 5228, 5148, 3629, 6350, 5773, 1930, 335, 115041, 27182, 531,
      1238, 115693, 111857, 3627, 111763, 116235, 122113, 3623, 3350, 115460,
      4087, 122379, 110731, 111893, 5782, 162248, 161890, 3919,
    ],
  },
];

const data = imgs.map(item => {
  const { width, height, url, name } = item;

  return {
    src: `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=450/${name}`,
    height: Math.round(((320 * height) / width) * 10) / 10,
  };
});
function handleData(data, count = 2) {
  if (!data || data.length <= count) {
    return Array.from({ length: count }, () => []);
  }
  const res = Array.from({ length: count }, () => []);
  const heightArr = Array.from({ length: count }).fill(0);
  function findMinIdx(arr) {
    if (arr.length < 0) {
      return;
    }
    let _idx = 0,
      _value = arr[0];
    arr.forEach((item, i) => {
      if (item < _value) {
        _idx = i;
        _value = item;
      }
    });

    return {
      index: _idx,
      value: _value,
    };
  }
  data.forEach(item => {
    const { index } = findMinIdx(heightArr);
    res[index].push(item);
    heightArr[index] += item.height;
  });
  return res;
}
const splitData = handleData(data, 3);
</script>

<style scoped lang="scss">
.model-1trwvlz {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}

.model-content {
  display: flex;

  flex-direction: column;

  align-items: stretch;

  justify-content: flex-start;
  gap: 10px;
}

.model-container {
  margin: 0 auto;
  max-width: 2336px;
  width: 100%;
}

.model-like {
  padding-left: 16px;
  padding-right: 16px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji;
  color: var(--el-text-color-regular);
}

.model-title {
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  font-size: inherit;
  line-height: 1.55;

  text-decoration: none;

  font-weight: 700;
  font-size: 34px;
  line-height: 1.3;
  margin: 0;
}

.model-title:focus {
  outline-offset: 2px;
  outline: 2px solid #1c7ed6;
}

.model-title:focus:not(:focus-visible) {
  outline: none;
}

.model-gc2cx1 {
  position: relative;
  display: inline-block;
}

.model-16xlp3a {
  display: flex;
  flex-direction: column;
  width: 320px;
  max-width: 450px;
  row-gap: 16px;

  .model-7aj0so {
    width: 100%;
    height: auto;
    max-width: 450px;
  }
}

.model-116ea4z {
  display: flex;
  flex-direction: column;

  align-items: stretch;

  justify-content: flex-start;
  gap: 16px;
  margin-top: 24px;
  color: #c1c2c5;
  .model-1wj58lv {
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    border-image: initial;
    margin: 0px;
    border-top: 0px !important;

    .model-6egeyz {
      -webkit-tap-highlight-color: transparent;
      color: inherit;
      font-size: 14px;
      line-height: 1.55;
      text-decoration: none;
      display: flex;

      align-items: center;
      margin-top: 2px;

      .footer-text {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 4px;
      }
    }

    .model-6egeyz::before {
      content: '';
      flex: 1 1 0%;
      height: 1px;
      border-top: 2px solid rgb(55, 58, 64);
      margin-right: 10px;
    }
    .model-6egeyz::after {
      content: '';
      flex: 1 1 0%;
      border-top: 2px solid rgb(55, 58, 64);
      margin-left: 10px;
    }
  }

  .model-8od8ev {
    display: flex;

    align-items: center;

    justify-content: center;

    .model-l8k4bd {
      display: flex;
      flex-direction: column;

      align-items: center;

      justify-content: flex-start;
      gap: 0px;

      .model-1jt6jod {
        -webkit-tap-highlight-color: transparent;
        color: rgb(144, 146, 150);
        font-size: 14px;
        line-height: 1.55;
        text-decoration: none;
      }
      .model-1xmuiwy {
        -webkit-tap-highlight-color: transparent;
        color: rgb(77, 171, 247);
        font-size: 14px;
        line-height: 1.55;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
.model-63e7k9 {
  display: flex;
  column-gap: 16px;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 0px auto;
}
</style>
