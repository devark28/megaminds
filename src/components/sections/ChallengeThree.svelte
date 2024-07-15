<script>
  import PhoneView from "../PhoneView.svelte";
  import KeyPoint from "../KeyPoint.svelte";

  const clips = [
    { src: "/images/WhatsApp Image (Natete).jpg", caption: "Natete" },
  ];
</script>

<div class="container">
  <div class="video">
    <PhoneView {clips} animate={false} nocaption />
  </div>
  <div class="content">
    <span>Calling attention to helpless and giving to the needful ...</span>
  </div>
  <KeyPoint num="3" txt="Challenge" />
</div>

<style>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: calc(2rem * 0.67);
  }

  .video {
    display: flex;
    justify-content: center;
    width: calc(24rem * 0.67);
    height: 88%;
    align-items: start;
    flex: 1;
  }

  .content {
    display: flex;
    justify-content: start;
    align-items: start;
    flex: 2;
    height: 64%;
  }

  .content > span {
    display: flex;
    align-items: center;
    font-size: calc(54px * 0.67);
    line-height: calc(64px * 0.67);
    width: calc(440px * 0.67);
    /* height: calc(296px * 0.67); */
    padding: calc(37px * 0.67) calc(64px * 0.67);
    border-left: solid calc(8px * 0.67) #b2dfdb;
    color: #009688;
  }
</style>
