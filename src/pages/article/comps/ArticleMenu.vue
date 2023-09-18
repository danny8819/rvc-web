<template>
    <div class="rvc-card other rvc-card-menu">
        <div class="background">
            <div class="imgs"></div>
        </div>
        <div class="main">
            <div class=" card-item flex mb-2">
                <SvgIcon name="icon_menu" class="emoji ml-2 mr-2" size="20"></SvgIcon>
                <div>目录</div>
            </div>
            <div @click="go(item.key + '')" class="card-item-2" :class="item.key === activeKey ? 'active' : ''"
                v-for="item in menus" :key="item.key">
                {{ item.name }}
            </div>
        </div>

    </div>
</template>

<script setup>


const activeKey = ref()
const go = (key) => {
    console.log(key)
    activeKey.value = key
    let container = document.getElementById(key);
    console.log(" document.getElementById(key)", container.offsetTop, document.getElementById(key).clientHeight)
    document.getElementById(key).scrollIntoView();

}
const scrollTop = ref(0);
const scrollToTop = (val) => {
    console.log(val)
    scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    menus.value.forEach(element => {
        let container = document.getElementById(element.key)
        if (scrollTop.value > container.offsetTop) {
            activeKey.value = element.key
        }
    });
};
window.addEventListener('scroll', scrollToTop);

const menus = ref([
    { name: '前言', key: 'head' },
    { name: '介绍', key: 'Intro' },
    { name: '文章终点', key: 'end' },
])

onBeforeUnmount(() => {
    console.log('销毁事件')
    window.removeEventListener('scroll', scrollToTop);
})
</script>


<style lang="scss" scoped>
.rvc-card-menu {
    margin-top: 20px;
    padding: 10px;
    position: relative;
    height: 250px;
    color: white;
    min-width:250px;
}

.background {

    border: 1px solid;
    background-image: url('/img/feature-img1.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 6px;
}

.imgs {

    border-radius: 6px;
    height: 100%;
    background-color: black;
    filter: Alpha(Opacity=80);
    opacity: .4;
    z-index: 2;
}

.main {
    z-index: 22;
    position: absolute;
}

.card-item-2 {
    margin-left: 20px;
    margin-bottom: 6px;
    cursor: pointer;

}

.flex {
    display: flex;
    align-items: center;
}

.active {
    color: $primary_color;
}
</style>