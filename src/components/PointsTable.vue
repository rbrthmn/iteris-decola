<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Ponto</th>
          <th class="text-left">CEP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="point of orderedList" :key="point.id">
          <td>
            <v-avatar size="24">
              <img :src="point.imagem" :alt="point.nome" />
            </v-avatar>
          </td>
          <td>
            <a class="pl-2 no-decoration" href="javascript:;" @click="openPointDetails(point)"
              ><strong>{{ point.nome }}</strong></a
            >
          </td>
          <td class="text-right">{{ point.cep }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "PointsTable",
  props: {
    orderedList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openPointDetails() {
      console.log("alo");
    },
  },
};
</script>

<style scoped>
    .no-decoration {
        text-decoration: none;
    }
</style>
