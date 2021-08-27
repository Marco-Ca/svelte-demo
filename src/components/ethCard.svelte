<script>
import { fly } from 'svelte/transition';
export let coin = {};
    
</script>
<a class="list-none p-6 bg-gray-900 text-white text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/cryptocoin/${coin.id}`} transition:fly>
    <img class="h-40 w-40 " src={coin.image} alt={coin.name}/>
    <h2 class="uppercase text-2xl">{coin.id}</h2>
</a>