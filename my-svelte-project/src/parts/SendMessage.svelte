<script>
    import {messages} from './../Store/messageStore';
    import {writing} from './../Store/isWritingStore';
    function plus() {
        writing.update( t => true)
        messages.update(m => [ {
            value: "Dis m’en plus sur toi !",
            position: "right",
            delay: 0
        }, {
            value: "Passionné par la programmation web et le design digital, j‘ai 21 ans et j'habite \n" +
                "à Marseille.",
            position: "left",
            delay: 1500
        }, {
            value: "À l'âge de 13 ans, j'ai découvert la suite Adobe que j'ai apprise en autodidacte.",
            position: "left",
            delay: 3000
        }, {
            value: "Quelques années plus tard, je me suis intéressé à un domaine intimement lié \n" +
                "au design digital, la programmation web.",
            position: "left",
            delay: 5500
        }
            , {
                value: " La connaissance de ces deux domaines m'a aidé à mieux appréhender \n" +
                    "les projets web, ce qui m'a permis en 2017 d'intégrer l'agence Esprit Libre \n" +
                    "en alternance et de me voir confier les projets web.",
                position: "left",
                delay: 7000
            }]);
    }


    function cv() {
        writing.update( t => true)
        messages.update(m => [ {
            value: "Montre moi ton cv 📄",
            position: "right",
            delay: 0
        }, {
            value: "https://www.linkedin.com/in/alexandre-orliaguet-1828a3192",
            position: "left",
            delay: 1000,
            type : 'link'
        }]);
    }

    function portfolio() {
        writing.update( t => true)
        messages.update(m => [ {
            value: "Je veux voir ton portfolio ! 🌇",
            position: "right",
            delay: 0
        },{
            value: "Voilà mon premier projet, un site internet :D",
            position: "left",
            delay: 1000,
        }, {
            value: "https://alexandreorliaguet.fr/wp-content/uploads/2020/03/3-3-e1585578735809.png",
            position: "left",
            delay: 1500,
            type : 'image'
        }]);
    }
</script>

<section class:writing={$writing}>
    {$writing}
    <input type="submit" value="Dis m’en plus sur toi 👨‍" on:click={plus} >
    <input type="submit" value="Montre moi ton cv 📄" on:click={cv}>
    <input type="submit" value="Je veux voir ton portfolio ! 🌇‍" on:click={portfolio}>
</section>

<style>
    section {
        background: #333333;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .writing input{

        background: #404040;
        user-select: none;
        pointer-events: none;
    }
    input {
        transition: all ease 0.5s;
        background: #2F80ED;
        border: none;
        box-sizing: border-box;
        border-radius: 25px;
        padding: 10px 25px;
        color: white;
        font-size: 12px;
        margin-right: 12px;
    }

    input:hover {
        cursor: pointer;
        background: #0062ec;
        box-shadow: 0px 0px 10px #005cd86e;
    }

    input:focus {
        outline: none;
    }
</style>