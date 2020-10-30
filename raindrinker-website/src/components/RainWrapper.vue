<template>
    <div class="back-row-toggle splat-toggle container">
        <div class="rain front-row"></div>
        <div class="rain back-row"></div>
        <slot/>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "RainWrapper",
        mounted() {
            this.makeItRain();
        },
        methods: {
            makeItRain() {
                //clear out everything
                $('.rain').empty();

                var increment = 0;
                var drops = "";
                var backDrops = "";

                while (increment < 100) {
                    //couple random numbers to use for various randomizations
                    //random number between 98 and 1
                    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
                    //random number between 5 and 2
                    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
                    //increment
                    increment += randoFiver;
                    //add in a new raindrop with various randomizations to certain CSS properties
                    drops += '<div class="drop" style="left: ' + increment + '%; top: ' + (- randoFiver) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.95' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.95' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.95' + randoHundo + 's;"></div></div>';
                    backDrops += '<div class="drop" style="right: ' + increment + '%; top: ' + (- randoFiver) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.95' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.95' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.95' + randoHundo + 's;"></div></div>';
                }

                $('.rain.front-row').append(drops);
                $('.rain.back-row').append(backDrops);
            }
        }
    }
</script>

<style>

    .rain {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        opacity: 0.5;
    }

    .rain.back-row {
        position: absolute;
        z-index: 1;
        opacity: 0.3;
        top: -32px;
    }

    body.back-row-toggle .rain.back-row {
        display: block;
    }

    .drop {
        position: absolute;
        width: 15px;
        height: 120px;
        pointer-events: none;
        animation: drop 2s linear infinite;
    }

    @keyframes drop {
        0% {
            transform: translateY(0vh);
        }
        75% {
            transform: translateY(90vh);
        }
        100% {
            transform: translateY(90vh);
        }
    }

    .stem {
        opacity: 0;
        width: 3px;
        height: 60%;
        margin-left: 7px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
        animation: stem 0.1s linear infinite;
    }

    @keyframes stem {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        65% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .splat {
        width: 30px;
        height: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.4);
        border-left: 1px solid rgba(255, 255, 255, 0.7);
        border-right: 1px solid rgba(255, 255, 255, 0.7);
        border-bottom: 1px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
        opacity: 1;
        transform: scale(0);
        animation: splat 0.5s linear infinite;
    }

    body.splat-toggle .splat {
        display: block;
    }

    @keyframes splat {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        80% {
            opacity: 1;
            transform: scale(0);
        }
        90% {
            opacity: 0.5;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1.5);
        }
    }

    .toggles {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }

    .toggle {
        position: absolute;
        left: 20px;
        width: 50px;
        height: 50px;
        line-height: 51px;
        box-sizing: border-box;
        text-align: center;
        font-family: sans-serif;
        font-size: 10px;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.2);
        color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .toggle:hover {
        background-color: rgba(255, 255, 255, 0.25);
    }

    .toggle:active {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .toggle.active {
        background-color: rgba(255, 255, 255, 0.4);
    }

    .splat-toggle {
        top: 20px;
    }

    .back-row-toggle {
        top: 90px;
        line-height: 12px;
    }

    .single-toggle {
        top: 160px;
    }

    body.single-toggle .drop:nth-child(10) {
        display: block;
    }

    .container {
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(20,20,30,1) 100%);
        position: relative;
        top: 0;
        height: 100%;
    }

</style>