<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Pontos de coleta</h2>
    <PointsTable :orderedList="orderPoints" />
  </v-container>
</template>

<script>
import PointsTable from "../components/PointsTable";

export default {
  name: "PointsList",
  components: {
    PointsTable,
  },
  data() {
    return {
      pointsList: [],
    };
  },
  created() {
    this.getPointsLists();
  },
  methods: {
    getPointsLists() {
      fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json")
        .then((response) => response.json())
        .then((json) => {
          this.pointsList = json;
        });
    },
  },
  computed: {
    orderPoints() {
      const orderedList = this.pointsList
        .slice(0)
        .sort((a, b) => (a.id > b.id ? -1 : 1));
      return orderedList;
    },
  },
};
</script>
