<script>

    import { onMount } from 'svelte'
    import anime from "animejs";

    export let message
    export let right

    let messageContainer
    let loading
    let messageEl

    let isLoading = true



    onMount(()=> {
        var loadingLoop = anime({
            targets: loading,
            scale: [1.05, .95],
            duration: 1100,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });

        var dotsStart = anime({
            targets: loading,
            translateX: ['-2rem', '0rem'],
            scale: [.5, 1],
            duration: 400,
            delay: 25,
            easing: 'easeInOutQuad',
        });

        var dotsPulse = anime({
            targets: loading.querySelectorAll('span'),
            scale: [1, 1.4],
             opacity: [.5, 1],
            duration: 500,
            loop: true,
            direction: 'alternate',
            delay: function(el, i, l) {
                return (i * 100)
            },
            endDelay: function(el, i, l) {
                return (l - i) * 100;
            }
        });

        setTimeout(function() {
            isLoading = false
            var bubbleSize = anime({
                targets: messageContainer,
                height: [loading.height , messageEl.offsetHeight],
                duration:1000,
                easing: 'easeOutExpo'
            });

            var bubbleSize = anime({
                targets: messageEl,
                 width: [loading.width , messageEl.offsetWidth-47],
                duration:1000,
                easing: 'easeOutExpo'
            });
        }, 800)
    })


</script>

<div class="message-container" class:right bind:this={messageContainer} class:isLoading>
    <span class="loading" style=" " bind:this={loading}>
        <span ></span>
        <span ></span>
        <span ></span>
    </span>


    <a class="message" bind:this={messageEl} href={message}>
        {message}
    </a>

</div>

<style>

    .message-container {
        overflow: hidden;
        display: flex;
        padding: 4px 0;
    }

    .message, .loading {
        overflow: hidden;
        visibility: visible;
        max-width: 49%;
        background: #404040;
        border-radius: 22px;
        padding: 10px 25px;
        margin: 0;
    }
    .isLoading .message{
        opacity: 0;
        order: 2;
        visibility: hidden;
    }
    .isLoading .loading{
        opacity: 1;
        order: 1;
        visibility: visible;
        display: flex;
    }

    .loading{
        padding: 10px 24px;
        opacity: 0;
        visibility: hidden;
        display: none;
        align-items: center;
        height: 20px;
    }
    .loading span{
        display: block;
        border-radius: 20px;
        height: 6px;
        width: 6px;
        background: white ;
    }
a{
    color: white;
}
    .loading span:not(:last-child){
        margin-right: 5px;
    }

    .right {

        justify-content: flex-end;
    }

    .right .loading{
        order: 1;
    }
    .right .message , .right  .loading{
        background: #2F80ED;
        color: white;
    }

</style>