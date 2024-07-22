<script>
</script>

<div class="container">
  <div class="takeaways">
    <div class="card">
      Engage community leaders fo advocacy to break cultural taboos surrounding
      sexual reproductive health.
    </div>
    <div class="card">
      Partner with NGOs and seek grants to strengthen financial support for
      awareness programs
    </div>
    <div class="card">
      Set up safe environments where young women can openly discuss sexual
      health matters and receive support.
    </div>
    <div class="card">
      Create educational resources that resonate with the cultural beliefs and
      practices of young women.
    </div>
  </div>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    padding: calc(2rem * 0.67) 0;
  }

  .takeaways {
    display: grid;
    grid-template-columns: repeat(2, calc(34rem * 0.67));
    grid-template-rows: repeat(2, calc(14rem * 0.67));
    grid-column-gap: calc(2rem * 0.67);
    grid-row-gap: calc(1.5rem * 0.67);
  }

  .card {
    background-color: #b2dfdb;
    color: #009688;
    border-radius: calc(1rem * 0.67);
    padding: calc(2rem * 0.67);
    font-size: calc(2rem * 0.67);
    font-weight: 500;
    font-family: Inter;
  }

  @media (max-width: 400px) {
    .takeaways {
      display: flex;
      flex-direction: column;
    }
    .card {
      border-radius: calc(1rem * 0.67);
      padding: calc(2rem * 0.67);
      font-size: calc(2rem * 0.67);
    }
  }
</style>
