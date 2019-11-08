<template>
  <div class="section">
    <h1>Trumps owned: {{$store.state.counter}}</h1>
    <h2>Trumps per Second: {{$store.state.perSecond}}</h2>
    <img @click="addTrump" src="https://static01.nyt.com/newsgraphics/2019/10/28/battlegrounds-poll/bfebaac7fb1238b23ff0d8bffc67c337fba47c2d/headshots/trump.png">
    <br>
    <button :disabled="$store.state.counter<10"class="button is-primary" @click="addTrumpPerSecondNEWS">Buy 1 Fake News (1 Trump per second) <b style="color: black;">Costs 10</b></button>
    <br>
  <button :disabled="$store.state.counter<50"class="button is-primary"@click="addTrumpPerSecondCLINTON">Buy 1 Hillary Clinton (5 Trumps per second) <b style="color: black;">Costs 50</b></button>
    <br>
  <button :disabled="$store.state.counter<100"class="button is-primary"@click="addTrumpPerSecondWALL">Buy 1 Wall (10 Trumps per second) <b style="color: black;">Costs 100</b></button>

    <div class="achievements">
      <h2>Achievements: (work in progress)</h2>
      <button style="background-color: red" class="button is-primary">Collect 100 Trumps</button>
      <button style="background-color: red" class="button is-primary">Collect 1000 Trumps</button>
      <button style="background-color: red" class="button is-primary">Collect 10000 Trumps</button>
      <br><br>
      <button style="background-color: red" class="button is-primary">Collect 100 Fake news</button>
      <button style="background-color: red" class="button is-primary">Collect 100 Hillary Clintons</button>
      <button style="background-color: red" class="button is-primary">Collect 100 Walls</button>
    </div>
  </div>


</template>

<script>

export default {
  mounted() {
      setInterval(() => {
          this.$store.dispatch('increment', this.$store.state.perSecond);
      }, 1000);
      },
    methods:{
      addTrump(){
          this.$store.dispatch('increment', 1);
      },
        addTrumpPerSecondNEWS(){
          this.$store.dispatch('incrementPerSecond', 1);
            this.$store.dispatch('increment', -10);
      },
        addTrumpPerSecondCLINTON(){
          this.$store.dispatch('incrementPerSecond', 5);
            this.$store.dispatch('increment', -50);
      },
        addTrumpPerSecondWALL(){
          this.$store.dispatch('incrementPerSecond', 10);
            this.$store.dispatch('increment', -100);
      },
    },

}
</script>

<style>

</style>
