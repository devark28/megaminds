<script>
  import KeyPoint from "../KeyPoint.svelte";
</script>

<div class="container">
  <!-- <div class="video">
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
  </div> -->
  <div class="text">
    This is the story of the women of Mahama. Despite their hardships, women in
    Mahama refugee camp are defying their odds. Though various empowerment
    program, they are able to create small businesses that can satisfy
    themselves and for their families. Amazing fact about Mahama Refugee Camp is
    their initiative including vocational training in tailoring, hairdressing
    and small-scale farming. This program provides practical skills and foster a
    sense of independence and confidence among the women. Many people think they
    are waiting for the aids, but the reality is that people from Mahama camp,
    are busy working hard to support themselves. Many of them have joined
    cooperatives where they create and sell handcraft products, while others are
    making their own things with the purpose of getting their basic needs for
    their families. This has given them an income. This women's community
    challenge remains, limited access to healthcare and the threat of gender
    based violence. Umukobwa initiative provides psychological support, medical
    care and workshops on women's rights and safety, where they can learn to
    navigate and overcome their obstacles. Women in Mahama camp are not just
    survivors, but leaders and innovators. They build a stronger community
    through cooperative businesses and skill development workshops. In face of
    affliction, women of Mahama refugee camp stand as a testament of power of
    empowerment. Their journey through different empowerment activities is a
    beam of hope and inspiration to other women in other communities.
  </div>
  <KeyPoint num="2" txt="Challenge" />
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

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1.5rem * 0.67);
    font-weight: 500;
    font-family: Inter;
    padding: calc(2rem * 0.67);
    width: calc(calc(53rem * 0.67) * 1.2);
    height: calc(calc(30rem * 0.67) * 1.2);
    border-radius: calc(1rem * 0.67);
    line-height: calc(2.2rem * 0.67);
    letter-spacing: calc(0.03rem * 0.67);
  }
</style>
