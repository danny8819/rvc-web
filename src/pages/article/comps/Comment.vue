<template>
    <v-row>
        <v-col cols="1"><el-avatar :size="40" src="/image/head-img.jpeg"> </el-avatar></v-col>
        <v-col cols="10">
            <div class="ml-2">
                <span cols="2" class="comment-name">{{ props.item.name }}</span>
                <span cols="10" class="comment-time ml-10">{{ props.item.time }}</span>
            </div>
            <audio class="audio" v-if="item.type === 'voice' && props.item.voiceUrl" :src="props.item.voiceUrl" ref="audio"
                controls />
            <v-col v-else class="comment-content">{{ props.item.comment }}</v-col>

            <Statement :showReply="true" :item="props.item" @replyVoice="voice" @replyMsg="msg" />

        </v-col>

    </v-row>
</template>

<script setup>
import Statement from './Statement.vue';
const props = defineProps({ item: Object })
const emits = defineEmits(['replyVoice', 'replyMsg'])

const voice = (val) => {
    emits('replyVoice', val)
}

const msg = (val) => {
    emits('replyMsg', val)
}
</script>

<style lang="scss" scoped>
.comment-name {
    font-size: 14px;
    font-weight: 500;
}

.comment-time {
    color: rgb(144, 146, 150);
    font-size: 12px;
    line-height: 1.55;
}

.comment-content {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    line-height: 1.55;
    font-size: 14px;
}
</style>