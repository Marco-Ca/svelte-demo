<script>
  import EthCard from "../components/ethCard.svelte";
  import { cryptocoin, fetchcryptocoin } from "../coinstore";
  
  let coinSearch = "";
  let filteredcryptocoin = [];
  $: {
    if (coinSearch) {
      filteredcryptocoin = $cryptocoin.filter((coin) =>
        coin.name.toLowerCase().includes(coinSearch.toLowerCase())
      );
    } else {
      filteredcryptocoin = [...$cryptocoin];
    }
  }
  fetchcryptocoin();
</script>

<svelte:head>
  <title>Coin App</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Crypto App</h1>
<input
  class="w-3/6 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900"
  bind:value={coinSearch}
  placeholder="Enter Cryptocoin Name"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each filteredcryptocoin as coin}
    <EthCard {coin} />
  {/each}
</div>
