<template>
    <div class="brick" v-for="data in communitys" :key="data.id">
        <el-card class=" brick__inner" @click="$router.push('/article/' + data.id)">
            <div class="brick__info-userInfo flex items-center ml-2">
                <el-avatar :size="30" :src="data.avatar"> </el-avatar>
                <span>
                    <div class="ml-2">{{ data.author }}</div>
                    <div class="ml-2">{{ data.sendTime }}</div>
                </span>

            </div>
            <div class="brick__image">
                <img :src="data.picture" class="img">
            </div>

            <div class="brick__info">
                <div class="brick__info-title">
                    {{ data.title }}
                    <!-- <div class="brick__info-subtitle">666</div> -->
                </div>
                <el-divider class="my-2" />

                <!-- <div class="brick__info-tags">
                    <el-tag v-for="(tag, j) in data.types" :key="j" class="mr-2 mb-2">{{
                        tag.type
                    }}</el-tag>
                </div> -->
                <div class="brick__info-footer">

                    <div class="brick__info-watch flex justify-around items-center">
                        <template v-for="item in emojTypes" :key="item.img">
                            <SvgIcon :name="item.img" size="12" class=" mr-1"></SvgIcon>
                            <span class="mr-1">{{ getNum(data[item.prop]) }}</span>

                        </template>


                    </div>
                    <span class="float-right brick__info-watch ">
                        <SvgIcon name="liulan" size="12" class=" mr-1"></SvgIcon>
                        <span class="mr-1">{{ data.lookNum }}</span>
                    </span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
let communitys = ref([
    { avatar: '/img/user-placeholder.webp', picture: '/img/feature-img1.png', id: 666, title: '第一篇文章', author: 'author', sendTime: '今天', likeNum: 11, collectNum: 11, commentNum: 7, lookNum: 88 },
    { avatar: '/img/user-placeholder.webp', picture: '/img/feature-img1.png', id: 777, title: '第二篇文章', author: 'author', sendTime: '08-11', likeNum: 11, collectNum: 11, commentNum: 7, lookNumseeNum: 88 },
    { avatar: '/img/user-placeholder.webp', picture: '/img/feature-img1.png', id: 324, title: '第三篇文章', author: 'author', sendTime: '07-11', likeNum: 111, collectNum: 22, commentNum: 123, lookNum: 8228 },
    { avatar: '/img/user-placeholder.webp', picture: '/img/feature-img1.png', id: 632466, title: '第一篇文章', author: 'author', sendTime: '06-11', likeNum: 11, collectNum: 211, commentNum: 213, lookNum: 881 },
    { avatar: '/img/user-placeholder.webp', picture: '/img/feature-img1.png', id: 324, title: '第三篇文章', author: 'author', sendTime: '07-11', likeNum: 111, collectNum: 22, commentNum: 123, lookNum: 8228 },
    { avatar: '/img/user-placeholder.webp', picture: '/img/feature-img1.png', id: 632466, title: '第一篇文章', author: 'author', sendTime: '06-11', likeNum: 11, collectNum: 211, commentNum: 213, lookNum: 881 },

])
const getNum = (val) => {
    if (val >= 1000 && val < 10000) {
        return Number.parseInt(val / 1000) + 'k+'
    } else if (val >= 10000) {
        return Number.parseInt(val / 10000) + 'w+'
    } else {
        return val
    }
}
let emojTypes = ref([
    { img: 'love', prop: 'likeNum' },
    { img: 'laugh', prop: 'collectNum' },
    { img: 'icon_message', prop: 'commentNum' },
])
</script>

<style lang="scss" scoped>
.brick {
    max-width: 300px;
    min-width: 200px;
    margin: 10px;
    flex: 1;

    :deep(.el-card__body) {
        padding: 0px;
    }

    .brick__inner {
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        border-radius: 6px;
        // border: 1px solid var(--el-card-border-color);
        background-color: var(--el-card-bg-color);
        // background-color: $card-bg-color;
        display: flex;
        flex-direction: column;

        transition: all 0.2s ease-out;
        box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);

        &:hover {
            transform: translateY(2px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);

            .brick__image-inner {
                transform: scale(1.1);
            }
        }

        .brick__info-userInfo {
            font-size: 12px;
            margin-top: 6px;
        }

        .brick__image {
            width: 100%;

            height: 50%;
            margin-top: 4px;

            .img {
                width: 100%;
                height: 100%;
            }

        }

        .brick_title {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            font-size: 16px;
        }

        .brick__info {
            padding: 4px 6px;

            .brick__info-title {
                font-size: 24px;
                font-weight: 600;
                padding: 19px 20px px 13px;
                // min-height: 110px;
                margin-bottom: 7px;

                .brick__info-subtitle {
                    font-size: 16px;
                    line-height: 22px;
                    color: #435b71;
                    font-weight: 400;
                }
            }

            .brick__info-tags {
                // white-space: nowrap;
                min-height: 64px;
            }

            .brick__info-footer {
                display: flex;
                justify-content: space-between;

                .brick__info-watch {
                    // float: right;
                    font-size: 10px;
                }
            }
        }
    }
}
</style>
