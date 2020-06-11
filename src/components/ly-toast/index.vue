<template>
    <!--Toast-->
    <div class="toast" v-if="showToast" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>

<style scoped lang="scss">
    .toast{
        position: fixed;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,.6);
        padding: 10px;
        border-radius: 5px;
        color:#fff;
        font-size: 14px;
    }
    .fadein {
        animation: animate_in 0.25s;
    }
    .fadeout {
        animation: animate_out 0.25s;
        opacity: 0;
    }
    @keyframes animate_in {
        0% {
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes animate_out {
        0% {
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
</style>
