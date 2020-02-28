<template>
  <div class="table-result">
    <table>
      <tr>
        <td>Question</td>
        <td>Answer</td>
      </tr>
      <tr
        v-for="(item, index) in datainputs"
        :key="index"
      >
        <td>{{questions[index].title}}</td>
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['datainputs', 'questions'],

  data() {
    return {
      
    }
  }
}
</script>
