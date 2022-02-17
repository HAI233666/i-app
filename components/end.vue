<!--
 * @Author: your name
 * @Date: 2022-02-16 17:16:30
 * @LastEditTime: 2022-02-16 17:17:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \i-app\pages\end.vue
-->
<template>
  <div>
    <div>
      <el-date-picker v-model="newDate" type="datetime" size="normal" placeholder="选择日期时间"></el-date-picker>
    </div>
    <div>
      {{newDate}}
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      newDate: new Date()
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style>

</style>