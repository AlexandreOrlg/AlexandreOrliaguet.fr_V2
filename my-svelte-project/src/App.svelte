<script>
import Headerbar from './parts/Headerbar.svelte'
import Chat from './parts/Chat.svelte'
import SendMessage from './parts/SendMessage.svelte'

</script>

<main>

    <Headerbar/>
    <Chat/>
    <SendMessage/>

</main>

<style>

    main{
        height: 90vh;
        width: 90vw;
        display: grid;
        grid-template-rows: 50px 1fr 60px;
        border-radius: 16px;
        box-shadow: 0 0 10px #4a4a4a;
        overflow: hidden;
    }
</style>