<template>
    <div ref="momo" class="w-24 h-24 flex ">
        <img src="@/assets/images/momocycle.png" alt="" />
    </div>
    <div class="btn-group rounded-full overflow-clip mx-auto">
        <button @click="pauseIt" class="btn btn-primary" id="play">pause</button>
        <button @click="sayHello" class="btn btn-primary" id="pause">say hello</button>
        <button @click="raceOff" class="btn btn-primary" id="resume">race Off</button>
        <button @click="driftOff" class="btn btn-primary" id="resume">drift Off</button>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
// <script setup> version coming soon...
// export default version
export default {
    name: "momo",
    setup() {
        const momo = ref()
        const animation = gsap.timeline({ delay: 3, repeat: 3, repeatDelay: 1 })

        const sayHello = () => {
            animation.resume()
            animation.from(momo.value, { x: -1000, duration: 1 })
            animation.to(momo.value, { x: 2000, duration: 2 })
            animation.from(momo.value, { x: -1000, duration: 2 })
            animation.to(momo.value, { x: 2000, duration: 2 })
        }
        const raceOff = () => {
            animation.to(momo.value, { opacity: 1, x: 2000 })
        }
        const driftOff = () => {
            animation.to(momo.value, { opacity: 1, x: 2000, duration: 30 })
        }
        const pauseIt = () => {
            animation.pause()
        }

        onMounted(() => {
            sayHello()
        })

        return {
            momo, sayHello, raceOff, driftOff, pauseIt
        };
    },
};
</script>