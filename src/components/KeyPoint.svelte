<script>
  export let num = "";
  export let txt = "";
  export let subtxt = "";
  export let offset = 0;
</script>

<div class="keypoints" style="top: {25 * offset}%;">
  <span class="n">{num}</span>
  <span class="t">
    {txt}
    <span>{subtxt}</span>
  </span>
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
    align-items: start;
    padding: 0 calc(2rem * 0.67);
    flex-direction: column;
  }

  .keypoints > .t > span {
    text-wrap: nowrap;
    font-size: 1rem;
    font-weight: 400;
    /* color: #00796b; */
    color: #409B51;
    padding: 0 calc(0rem * 0.67);
  }
</style>
