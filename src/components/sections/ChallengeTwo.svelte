<script>
</script>

<div class="container">
  <div class="video">
    <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/K86C8U78UZY"
      title="E Lab Challenge 02 Mega Minds Discover Africa : The story Of Women in Mahama Refugee Camp"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    padding: 2rem 0;
  }

  .video {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    overflow: hidden;
    width: calc(53rem * 1.2);
    height: calc(30rem * 1.2);
  }

  .video::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #009688;
    opacity: 30%;
    pointer-events: none;
  }

  .video > iframe {
    width: 100%;
    height: 100%;
  }
</style>
