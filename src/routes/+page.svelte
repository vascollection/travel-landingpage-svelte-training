<script>
  // ICONS
  import logo from "../lib/image/Logo.svg"
  import search from "../lib/image/Search.svg"
  import cardImage1 from "../lib/image/vacations.svg"
  import cardImage2 from "../lib/image/destination.svg"
  import cardImage3 from "../lib/image/map.svg"
  import play from "../lib/image/play.svg"

  // IMAGE
  import   videoThumb1 from "../lib/image/thumb1.png"
  import   videoThumb2 from "../lib/image/thumb2.png"


  // OBJECT 
  let navContent = ["main", "about us", "tours", "gallery", "reviews", "contact"]
  let locationCards = [{title:"",}]

  // COMPONENTS
  import ServiceCards from "../components/Services-cards.svelte"
  import LocationCard from "../components/Services-cards.svelte"

  // FUNCTIONS
  const watchVideo = () => {
    console.log("tanginamo ka");
  }
</script>


<div class=" cover bg-cover h-screen">
  <div class="xl:container mx-auto flex flex-col justify-between h-full relative"><!-- CONTENT -->
    <div class="  pt-10">
      <div class="flex justify-between pb-8 border-b-2 border-white max-w-full"><!-- NAVIGATION -->
        <div class="col1">
          <img  src={logo} alt="logoipsum">
          
        </div>
        <nav>
          <ul class="flex gap">
            {#each navContent as item}
              <li><a class="py-2 px-6 uppercase hover:border-b-2 hover:border-primary-500" href="#link">{item}</a></li>
            {/each}
          </ul>
        </nav>
        <div class="col3">
          <img src= {search} alt="search icon">
        </div>
      </div>
    </div>
    <div class="header-content w-8/12 absolute top-1/3">
      <h1>Explore the<br/> Philippines, the Pearl of the Orient Seas</h1>
      <p class=" w-7/12 mt-6">The Philippines is a Southeast Asian archipelago with over 7,000 islands. It's a tropical paradise with stunning beaches, lush rainforests, and vibrant cities.</p>
    </div>
    <div class="flex align-top gap-8 absolute bottom-0 h-52">
      <ServiceCards 
        src={cardImage1}
        alt= "icon for card 1"
        title= "Beach Vacations"
        content= "Relax on some of the most beautiful beaches in the world, from Boracay to El Nido."
        retirectButton = "#link"
      />
      <ServiceCards 
        src={cardImage2}
        alt= "icon for card 2"
        title= "Cultural Tours"
        content= "Explore the rich history and culture of the Philippines, from the ancient ruins of Ayutthaya to the bustling streets of Manila."
        retirectButton = "#link"
      />
      <ServiceCards 
        src={cardImage3}
        alt= "icon for card 3"
        title= "Adventure Travel"
        content= "Go hiking in the mountains, scuba diving in the coral reefs, or whitewater rafting in the rivers."
        retirectButton = "#link"
      />
    </div>
  </div>
</div>
<div class="section xl:container mx-auto my-24 grid gap-20 justify-center">
  <div class=" grid gap-6">
    <h2>Must-See Destinations</h2>
    <p>These are just a few of the many amazing places to visit in the Philippines</p>
  </div>
  <div class="slider flex">
    {#each locationCards as item}
      <LocationCard/>
    {/each}
  </div>
</div>
<div class="footer-cover h-screen flex justify-center">
  <div class="xl:container flex gap-8 self-center">
    <div class="flex flex-col gap-6 max-w-xl">
      <h1>DISCOVER THE WORLD IN A NEW WAY</h1>
      <button on:click={() => watchVideo} class="inline-flex gap-2 align-middle group hover:text-red-700">
        <span class=" group-hover:scale-110 transition-all">
          <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="play">
            <circle class="group-hover:stroke-red-700" id="Ellipse 1" cx="26.5" cy="26.5" r="25.5" stroke="white" stroke-width="2"/>
            <path class="group-hover:fill-red-700" id="Polygon 1" d="M35.5347 25.6381C36.192 26.0247 36.192 26.9753 35.5347 27.3619L21.507 35.6135C20.8404 36.0057 20 35.525 20 34.7516L20 18.2484C20 17.475 20.8404 16.9943 21.507 17.3865L35.5347 25.6381Z" fill="white"/>
            </g>
            </svg>
        </span>
        <span class="self-center group-hover:ml-3 transition-all">WATCH THE VIDEO</span>
      </button>
      <p>This is just a basic example, of course. You can customize the content and design of your landing page to fit your specific needs and target audience.</p>
    </div>
    <div class="flex gap-8">
      <span class="customThumb">
        <img src={videoThumb1} alt="video 1">
        <span class="absolute w-full h-full top-0 grid justify-center content-center">
          <img class="playIcon" src={play} alt="play button">
        </span>
      </span>
      <span class="customThumb">
        <img src={videoThumb2} alt="video 1">
        <span class="absolute w-full h-full top-0 grid justify-center content-center">
          <img class="playIcon" src={play} alt="play button">
        </span>
      </span>
      
    </div>
  </div>
</div>



<style lang="scss">
  *{
    color: white;
    font-family: Inter;
  }
  h1{
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -1.44px;
    text-transform: capitalize;
  }
  h2{
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
  p{
    opacity: 80%;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .cover{
    background: linear-gradient(180deg, rgba(3, 3, 3, 0.80) 0%, rgba(3, 3, 3, 0.00) 19.41%, rgba(3, 3, 3, 0.00) 69.24%, rgba(3, 3, 3, 0.85) 82.75%, #030303 98.84%), url("../lib/image/hero-image.png"), lightgray 50% / cover no-repeat;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .footer-cover{
    background: linear-gradient(180deg, #030303 0%, rgba(3, 3, 3, 0.95) 12.67%, rgba(3, 3, 3, 0.38) 25.30%, rgba(3, 3, 3, 0.00) 69.24%, rgba(3, 3, 3, 0.85) 82.75%), url("../lib/image/footer.png"), lightgray 50% / cover no-repeat;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .customThumb{
    border-radius: 8px;
    position: relative;
    border-radius: 7.98px;
    align-self: flex-end;
    overflow: hidden;
    &:hover{
      transition: 150ms;
      box-shadow: 0px -1.1345751285552979px 2.2138051986694336px 0px rgba(255, 253, 253, 0.02), 0px -2.726541757583618px 5.32008171081543px 0px rgba(255, 253, 253, 0.03), 0px -5.133836269378662px 10.017241477966309px 0px rgba(255, 253, 253, 0.04), 0px -9.157886505126953px 17.869047164916992px 0px rgba(255, 253, 253, 0.04), 0px -17.128820419311523px 33.422088623046875px 0px rgba(255, 253, 253, 0.05), 0px -41px 80px 0px rgba(255, 253, 253, 0.07);
      .playIcon{
        transform: scale(1.2);
        transition: 150ms;
      }
    }
  }

</style>