<template>
  <div class="entry-container mb-3 pointer p-2" 
        @click="$router.push({name: 'entry', params: {id: 10}})">
      <!-- Título -->
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">Julio</span>
          <span class="mx-2 fw-light">2021, Jueves</span>
      </div>

        <div class="entry-description">
            <!-- Abrir la palette, lorem ipsum y seleccionar párrafo -->
            Aliquip in sunt officia id et dolore cupidatat ut laboris culpa nulla consequat amet. Quis deserunt duis dolore reprehenderit non laborum. Ullamco exercitation ex elit id aliquip sunt deserunt nulla officia commodo ad exercitation consectetur incididunt. Qui laborum ipsum aliquip dolor. Nulla aliquip et sunt occaecat. Consectetur sint excepteur ut nostrud exercitation elit minim cupidatat veniam adipisicing cillum.

        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-description{
            font-size: 12px;
        }
    }


</style>