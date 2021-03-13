<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
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
                  <a
                    class="pl-2 no-decoration"
                    href="javascript:;"
                    @click="openPointDetails(point)"
                    id="show-modal"
                    v-bind="attrs"
                    v-on="on"
                    ><strong>{{ point.nome }}</strong></a
                  >
                </td>
                <td class="text-right">{{ point.cep }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Ponto de coleta</span>
        </v-card-title>
        <v-card-text>
          <div class="modal-div">
            <v-avatar size="80" class="modal-div__center mt-3">
              <img :src="currentPoint.imagem" :alt="currentPoint.nome" />
            </v-avatar>
            <h2 class="modal-div__center mt-3 mb-5">{{ currentPoint.nome }}</h2>
            <p>
              <strong>Categorias: </strong>
              <v-chip-group active-class="primary--text" column>
                <v-chip v-for="tag in currentPoint.categorias" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </p>
            <p><strong>CEP: </strong>{{ currentPoint.cep }}</p>
            <p><strong>Endereço: </strong>{{ currentPoint.endereco }}</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
  data() {
    return { dialog: false, currentPoint: {} };
  },
  methods: {
    openPointDetails(point) {
      this.dialog = true;
      this.currentPoint = point;
    },
  },
};
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
}
.modal-div {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.modal-div__center {
  align-self: center;
}
</style>
