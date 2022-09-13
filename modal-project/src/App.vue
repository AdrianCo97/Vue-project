<template>
  <h1>{{title}}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="a">Sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Giveaway</h1>
      <p>Enter the Giveaway!</p>
    </Modal>
  </div>

  <div v-if="showModalTwo"> 
    <Modal @close="toggleModalTwo">
      <h1>Giveaway two</h1>
      <p>Enter the second giveaway</p>
    </Modal>
  </div>

  <button @click="toggleModal">Open the Modal</button>
  <button @click="toggleModalTwo">Open the secon Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {Modal},
  data(){
    return {
      title: "My first Vue App",
      header: "Sign up for the Giveaway!",
      text: "This Giveaway is something special!",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
