<script>
</script>

<div class="container">
  <div class="heading">For a deep dive!</div>
  <div class="implementations">
    <div class="card">
      <iframe
        src="https://www.youtube.com/embed/JPZhEWrvpeM"
        title="E - Lab Challenge 01 Introduction : Mega Minds Think Tank"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="card">
      <iframe
        src="https://www.youtube.com/embed/K86C8U78UZY"
        title="E Lab Challenge 02 Mega Minds Discover Africa : The story Of Women in Mahama Refugee Camp"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="card">
      <iframe
        src="https://www.youtube.com/embed/mmT8-AOBxVU"
        title="Challenge 03 Mega Minds: Help Lab"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="card">
      <iframe
        src="https://www.youtube.com/embed/-UeEj8Rq5vo"
        title="Mega Minds Challenge 04:Treasure Hunt"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="card special">
      How would we launch it? You can view the project proposal <a
        href="https://docs.google.com/presentation/d/1l3cz6_EDF8ozV4a2vDddkn3m9RLZK7yS8MiFeFmohmo/edit?usp=sharing"
        >here!</a
      >
    </div>
    <div class="card special">
      You've been surfing <span style="white-space: nowrap;">Challenge 6</span> all
      along!
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: calc(2rem * 0.67) 0;
    gap: 3rem;
  }

  .implementations {
    display: grid;
    grid-template-columns: repeat(3, calc(34rem * 0.67));
    grid-template-rows: repeat(2, calc(18rem * 0.67));
    grid-column-gap: calc(2rem * 0.67);
    grid-row-gap: calc(1.5rem * 0.67);
    /* max-width: 50%; */
  }

  .implementations > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: calc(1.7rem * 0.67);
  }

  .card {
    background-color: #b2dfdb;
    color: #009688;
    border-radius: calc(1rem * 0.67);
    /* padding: calc(2rem * 0.67); */
    font-size: calc(2rem * 0.67);
    font-weight: 500;
    font-family: Inter;
    display: inline;
    overflow: hidden;
  }

  .card.special {
    padding: calc(2rem * 0.67);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  .heading {
    color: #009688;
    font-size: calc(3rem * 0.67);
    font-weight: 500;
  }

  @media (max-width: 400px) {
    .container {
      padding: calc(0rem * 0.67) 0;
      flex-direction: column;
    }
    .implementations {
      display: flex;
      flex-direction: column;
    }
  }
</style>
