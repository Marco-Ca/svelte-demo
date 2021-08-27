<script context="module">
    import { getCoinById } from "../../coinstore";
    export async function load(ctx) {
        let id = ctx.page.params.id;
        const coin = await getCoinById(id);
        return { props: { coin } };
    }
</script>

<script>
    export let coin = {};
    const symbol = coin.symbol;
</script>

<svelte:head>
    <title>Coin App - {coin.id}</title>
</svelte:head>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{coin.name}</h1>
    <p>Symbol: <strong>{symbol}</strong></p>
    <br />
    <p>Amount in Euro: <strong>{coin.market_data.current_price.eur}</strong></p>
    <br />
    <p>About: {@html coin.description.en}</p>
    <br />
    <img class="card-image" src={coin.image.large} alt={coin.name} />
</div>
