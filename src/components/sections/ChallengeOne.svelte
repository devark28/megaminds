<script>
  import PhoneView from "../PhoneView.svelte";

  const clips = [
    { src: "/images/WhatsApp Image (Natete).jpg", caption: "Natete" },
    { src: "/images/WhatsApp Image (Raissa).jpg", caption: "Raissa" },
    { src: "/images/WhatsApp Image (Akech1).jpg", caption: "Akech" },
    { src: "/images/WhatsApp Image (Nise1).jpg", caption: "Nise" },
    { src: "/images/GoogleChat Image (Elvine1).jpg", caption: "Elvine" },
    { src: "/images/WhatsApp Image (Bruce1).jpg", caption: "Bruce" },
  ];
</script>

<div class="container">
  <div class="challengers">
    <PhoneView {clips} />
  </div>
  <div class="keypoints">
    <span class="n">1</span>
    <span class="t">Challenge</span>
  </div>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 2rem 0;
  }

  .challengers {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .keypoints {
    position: absolute;
    right: 22.5%;
    top: 18%;
    height: 7rem;
    width: 7rem;
    background-color: #b2dfdb;
    border-radius: 4rem;
    font-size: 3rem;
    font-weight: 500;
    color: #00796b;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .keypoints > .n {
    min-height: 7rem;
    min-width: 7rem;
    background-color: #b2dfdb;
    border-radius: 4rem;
    font-size: 3rem;
    font-weight: 500;
    color: #00796b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .keypoints > .t {
    height: 7rem;
    /* background-color: #b2dfdb; */
    border-radius: 4rem;
    font-size: 3rem;
    font-weight: 500;
    color: #00796b;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }
</style>
