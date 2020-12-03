<script>
    import Message from '../components/Message.svelte'
    import MessageLink from '../components/MessageLink.svelte'
    import MessageImage from '../components/MessageImage.svelte'
    import {writing} from './../Store/isWritingStore';

    import {afterUpdate} from 'svelte'

    import {messages} from './../Store/messageStore';

    let displayMessage = [];

    const unsubscribe = messages.subscribe(value => {

        value.forEach((i, t) => {

            setTimeout(_ => {

                displayMessage = [...displayMessage, i]

                if (t === (value.length - 1)) {
                    writing.update(t => t = false)
                }

            }, i.delay);


        })


    });


    let view
    afterUpdate(() => {
        view.scrollTo(0, view.scrollHeight);
    });
</script>
<section bind:this={view}>

    <p class="hour"><b>Aujourd'hui</b> { new Date().toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    })}
    </p>
    <div class="messages">
        {#each displayMessage as message}
            {#if message.type == "link"}
                <MessageLink message={message.value} right={message.position === "right"}/>
            {:else if message.type == "image"}
                <MessageImage message={message.value} right={message.position === "right"}/>
            {:else}
                <Message message={message.value} right={message.position === "right"}/>
            {/if}
        {/each}
    </div>
</section>

<style>
    section {
        font-family: 'Inter';
        background: #2C2C2C;
        border-bottom: 1px solid #4F4F4F;
        color: #BDBDBD;
        overflow-y: auto;
    }

    .hour {
        text-align: center;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        font-weight: 400;
    }

    .hour b {
        font-weight: 600;
    }

    .messages {
        margin: 16px;
    }

</style>