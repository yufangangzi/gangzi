<template>
  <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"

                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player>
</template>
<script>
  import Vue from 'vue'
  import VueVideoPlayer from 'vue-video-player'
  import { videoPlayer } from 'vue-video-player'
  Vue.use(VueVideoPlayer);
  require('video.js/dist/video-js.css')
  require('vue-video-player/src/custom-theme.css')
  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src:'http://59.108.140.36/sports.tc.qq.com/AxGFj6hHKhY4b23Xo8-9FNW0EFQak9YwV2zcFZZ3lMZY/g0024m9x5tq.mp4?sdtfrom=v1103&guid=022e79a36006abaaa3c13fa3ccf3f596&vkey=6A631FDEFC016783076CC820260F8033CA51BFE0211E9CA38FABFCB08C911335F499B2D4BB0551951326312A7B78259B0DDBB50ADF8F96D8C7612BC4611F1199318B75408DBF28C005CE6ACBA6A404ECD5E0D7A1B88CAFB813FFDC26DB50B0ECA824C37B8FE977C234D78B0E9936DFF097BBEF3F30166EC7&platform=2'
            //src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "../../assets/logo.png",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    },
    components: {
      videoPlayer
    }
  }
</script>
<style>
#vjs_video_3{width:400px;height:300px}
  .vjs-big-play-button{top:50%!important;left:50%!important;transform: translate(-50%,-50%)}
</style>
