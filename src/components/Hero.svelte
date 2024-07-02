<script>
  import Avatar from "./Avatar.svelte";
</script>

<div class="container">
  <div class="members">
    <div>
      <Avatar image="/images/WhatsApp Image (Natete).jpg" />
      <Avatar image="/images/WhatsApp Image (Raissa).jpg" />
    </div>
    <div>
      <Avatar image="/images/WhatsApp Image (Akech1).jpg" />
      <Avatar />
      <Avatar image="" />
    </div>
    <div>
      <Avatar image="" />
      <Avatar image="" />
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
    padding: 2rem 0;
  }

  .members {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 1.7rem;
  }

  .members > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.7rem;
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
    font-size: 3rem;
    font-weight: 500;
    width: 68%;
    height: 29.6rem;
    border-radius: 1.1rem;
    background-color: #b2dfdb;
    color: #00796b;
    padding: 3rem;
  }
</style>
