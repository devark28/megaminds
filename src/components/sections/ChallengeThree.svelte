<script>
  import PhoneView from "../PhoneView.svelte";

  const clips = [
    { src: "/images/WhatsApp Image (Natete).jpg", caption: "Natete" },
  ];
</script>

<div class="container">
  <div class="video">
    <video src="/videos/help_lab_video.mp4" loop muted autoplay />
  </div>
  <div class="content">
    <span>Calling attention to the helpless and giving to the needful ...</span>
  </div>
  <!-- <KeyPoint num="3" txt="Challenge" /> -->
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
    letter-spacing: 0.03rem;
    line-height: calc(64px * 0.67);
    width: calc(440px * 0.67);
    /* height: calc(296px * 0.67); */
    padding: calc(37px * 0.67) calc(64px * 0.67);
    border-left: solid calc(8px * 0.67) #b2dfdb;
    color: #009688;
  }

  .video {
    display: flex;
    justify-content: center;
    width: calc(24rem * 0.67);
    height: 88%;
    align-items: start;
    flex: 1;
  }

  .video > video {
    display: flex;
    flex: 1;
    /* background-color: red; */
    justify-content: center;
    border-radius: calc(1.1rem * 0.67);
    min-width: 100%;
    height: calc(52rem * 0.67);
    background-position-x: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.7s;
    /* transform: scale(0.85); */
    /* filter: "blur(0.3rem)"; */
    /* z-index: -1; */
    /* opacity: 0.5; */
  }

  @media (max-width: 400px) {
    .container {
      flex-direction: column;
    }
    .content > span {
      display: none;
    }
    .video > video {
      border-radius: calc(1.1rem * 0.67);
      min-width: 100%;
      min-height: calc(48rem * 0.67);
    }
  }
</style>
