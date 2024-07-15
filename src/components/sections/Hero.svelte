<script>
  import Avatar from "../Avatar.svelte";
</script>

<div class="container">
  <div class="members">
    <div>
      <Avatar image="/images/WhatsApp Image (Natete).jpg" index={5} />
      <Avatar image="/images/WhatsApp Image (Raissa).jpg" index={4} />
    </div>
    <div>
      <Avatar image="/images/WhatsApp Image (Akech1).jpg" index={0} />
      <Avatar index={6} />
      <Avatar image="/images/WhatsApp Image (Nise1).jpg" index={3} />
    </div>
    <div>
      <Avatar image="/images/GoogleChat Image (Elvine1).jpg" index={1} />
      <Avatar image="/images/WhatsApp Image (Bruce1).jpg" index={2} />
    </div>
  </div>
  <div class="mission">
    <div>
      Our mission is to enhance sexual reproductive health awareness among young
      generation in Mahama Refugee Camp.
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: calc(2rem * 0.67) 0;
  }

  .members {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: calc(1.7rem * 0.67);
  }

  .members > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: calc(1.7rem * 0.67);
  }

  .mission {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .mission > * {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(3rem * 0.67);
    font-weight: 500;
    width: 68%;
    height: calc(24rem * 0.67);
    border-radius: calc(1.1rem * 0.67);
    background-color: #b2dfdb;
    color: #00796b;
    padding: calc(3rem * 0.67);
  }

  @media (max-width: 400px) {
    .container {
      padding: calc(0rem * 0.67) 0;
      flex-direction: column;
    }
    .members {
      display: none;
    }
    .mission > * {
      font-size: calc(2.6rem * 0.67);
      width: 80%;
      /* height: calc(24rem * 0.67); */
      height: fit-content;
      border-radius: calc(0.6rem * 0.67);
      padding: calc(2rem * 0.67);
      background-color: transparent;
    }
  }
</style>
