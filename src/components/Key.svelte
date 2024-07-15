<script>
  export let num = 0;
  export let txt = 0;
  export let offset = 0;
</script>

<div class="keypoints" style="top: {25 * offset}%;">
  <span class="n">{num}</span>
  <span class="t">{txt}</span>
</div>

<style>
  .keypoints {
    position: absolute;
    transform: translate(-50%);
    height: calc(7rem * 0.67);
    width: calc(7rem * 0.67);
    background-color: #b2dfdb;
    border-radius: calc(4rem * 0.67);
    font-size: calc(3rem * 0.67);
    font-weight: 500;
    color: #00796b;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .keypoints > .n {
    min-height: calc(7rem * 0.67);
    min-width: calc(7rem * 0.67);
    background-color: #b2dfdb;
    border-radius: calc(4rem * 0.67);
    font-size: calc(3rem * 0.67);
    font-weight: 500;
    color: #00796b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .keypoints > .t {
    height: calc(7rem * 0.67);
    /* background-color: #b2dfdb; */
    border-radius: calc(4rem * 0.67);
    font-size: calc(3rem * 0.67);
    font-weight: 500;
    color: #00796b;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 calc(2rem * 0.67);
  }
</style>
