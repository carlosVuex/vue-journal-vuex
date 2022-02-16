<template>
  <button class="btn btn-primary">
      <!-- <i :class="`fa fa-2x ${icon}`"></i> -->
      <i class="fa fa-2x" 
            :class="icon">
        </i>
  </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

// fa-plus icono por defecto

<style lang="scss" scoped>
    button{//paleta de comandos CONTROL + MAYÚSCULAS + P ==> sort lines ascending
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }
    
</style>