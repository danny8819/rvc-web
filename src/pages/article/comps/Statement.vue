<template>
    <div class="flex">
        <span v-for="item in emojis" :key="item.emoji" class="mr-4 flex w-2">
            <SvgIcon :name="item.emoji" class="emoji" /> <span class="number ml-2">{{ item.number }}</span>
        </span>
        <span v-if="props.showReply" class="mr-4 flex w-2">

            <SvgIcon name="icon_message" size="16px" class="icon-reply mr-2" @click="showReplyHandle" />
        </span>

    </div>
    <ReplyInputCard v-if="props.showReply && isReply" class="mb-5" @sendVoice="sendVoice" @reply="reply"
        :defaultVal="'@' + item.name" />
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
    if (isReply.value) {
        isReply.value = !isReply.value
        return
    }
    bus.emit("reply-closeAll")
    isReply.value = !isReply.value

}
const hideReply = () => {

    isReply.value = false
}
bus.on("reply-closeAll", hideReply);

const emits = defineEmits(['replyVoice', 'replyMsg'])
const sendVoice = (val) => {
    emits('replyVoice', val)
    isReply.value = false

}

const reply = (val) => {
    emits('replyMsg', val)
    isReply.value = false

}
onBeforeUnmount(() => {
    bus.off("reply-closeAll", hideReply);
})

</script>

<style  lang="scss" scoped>
.number {
    font-size: 12px;
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

.icon-reply {
    color: $primary_color;
}
</style>