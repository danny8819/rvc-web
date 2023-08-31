<template>
    <div class="flex">
        <span v-for="item in emojis" :key="item.emoji" class="mr-4 flex w-2">
            <SvgIcon :name="item.emoji" class="emoji" /> <span class="number ml-2">{{ item.number }}</span>
        </span>
        <span v-if="props.showReply" class="mr-4 flex w-2">
            <el-button class="number ml-2" @click="showReplyHandle">回复</el-button>
        </span>

    </div>
    <ReplyInputCard v-if="props.showReply && isReply" class="mb-5" @sendVoice="sendVoice" />
</template>

<script setup>
import bus from '@/utils/bus'
let props = defineProps({ showReply: false, item: Object })
let emojis = ref([
    { emoji: 'like', number: 100, },
    { emoji: 'unlike', number: 0, },
    { emoji: 'love', number: 10, },
    { emoji: 'laugh', number: 10, },
    { emoji: 'embarra', number: 10, }
])

const isReply = ref(false)

const showReplyHandle = () => {
    bus.emit("reply-closeAll")
    isReply.value = true
}
const hideReply = () => {

    isReply.value = false
}
bus.on("reply-closeAll", hideReply);

const emit = defineEmits(['sendVoice'])
const sendVoice = (val) => {
    emit('sendVoice', props.item, val)
    isReply.value = false

}
onBeforeUnmount(() => {
    bus.off("reply-closeAll", hideReply);
})

</script>

<style  lang="scss" scoped>
.number {
    font-size: 12px;
    color: gray;
    line-height: 20px;
}

.flex {
    display: flex;
    align-items: center;
}

.emoji:hover {
    width: 25px !important;
    height: 25px !important;
}
</style>