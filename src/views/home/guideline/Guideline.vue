<template>
  <b-container>
    <div>
      <br>
      <div class="m__t--80">
        <h3> Measurement Guideline </h3>
        <div>
          <v-client-table
            ref="serverTable"
            :data="list_1"
            :columns="columns"
            :options="options_1">
            <div slot="name" slot-scope="props">
              <div v-if="props.row.name === 1">
                General features of soldier and dorsal view of total body and measurement of Bifiditermes beesoni (Gardner)
                <br>
                a) Total body-length (line AA’)
                <br>
                b) Body-length without head (line CC’)
                <br>
                <br>
                (Roonwall, 1969 in Sornuwat, 2004)
              </div>
              <div v-else>
                Soldier caste of some genera of Oriental Macrotermitidae (drawn from various sources).
                <br>
                <br>
                Head and pronotum of:
                <br>
                a. Macrotermes khajuriai (Roonwal & Chhotani);
                <br>
                b. Odontotermes lokanandi (Chatterjee & Thakur);
                <br>
                c. Odontotermes distans (Holmgren & Holmgren);
                <br>
                d. Hypotermes xenotermitis (Wasmann);
                <br>
                e. Microtermes pakistanicus* (Ahmad);
                <br>
                f. Microtermes obesi (Holmgren)
                <br>

                <br>
                Legend: md.- mandible; pcl.- postclypeus; acl.- antecIypeus; ant.- antenna; lr.- labrum; oc.- ocellus.
                <br>
                <br>
                (Thakur, 1983 - with some alteration)
              </div>
            </div>

            <div slot="image" slot-scope="props">
              <b-img
                :height="250"
                :src="props.row.image"
                alt="Fluid image"/>
            </div>

          </v-client-table>

          <br>

          <v-client-table
            ref="serverTable"
            :data="list_2"
            :columns="columns"
            :options="options_2"
          >
            <div slot="name" slot-scope="props">
              <div v-if="props.row.name === 1">
                Head's dimension
                <br>
                A. Head widest width
                <br>
                B. Head length to the sidebase
                <br>
                C. Head width at the mandible base

                <br>
                D. Head with at the point of constriction
                <br>
                E. Head length up to the nasus
                <br>
                F. Mandible length

                <br>
                <br>
                (Tho, 1992 - with some alteration)
              </div>
              <div v-else-if="props.row.name === 2">
                Pronotum, Mesonotum, and Metanotum dimension
                <br>
                1. Pericapritermes nitobei
                <br>
                2. Microtermes pakistanicus
                <br>
                3. Odontotermes oblongatus
                <br>
                4. Macrotermes gilvus - major soldier
                <br>
                5. Macrotermes chaiglomi - major soldier
                <br>
                <br>
                Legend:
                <br>
                A. Pronotum widest width
                <br>
                B. Pronotum longest length
                <br>
                C. Pronotum median length
                <br>
                D. Mesonotum longest length
                <br>
                E. Metanotum longest length
                <br>
                <br>
                (Ahmad, 1965; Roonwal and Chhotani, 1989 - with some alteration)
              </div>
              <div v-else-if="props.row.name === 3">
                Antenna's articles and dimension
                <br>
                1. Pericapritermes mohri - the entire antenna's length; 1A. Close-up drawing of the first six articles
                <br>
                2. Odontotermes bogoriensis - The entire antenna's length; 2A. Close-up drawing of the first six articles
                <br>
                <br>
                (Kemner, 1934;  Roonwal and Chhotani, 1989 - with some alteration)
              </div>
              <div v-else-if="props.row.name === 4">
                Postmentum dimension (Tho, 1992)
              </div>
              <div v-else-if="props.row.name === 5">
                Mandible dimension
                <br>
                TS - The distance between apical tip with left mandible tooh
                <br>
                TU - The total length of the mandible
                <br>
                <br>
                Roonwal and Chhotani, 1989 - in Sornuwat, 2004)
              </div>
            </div>

            <div slot="image" slot-scope="props">
              <b-img
                :height="250"
                :src="props.row.image"
                alt="Fluid image"/>
            </div>

          </v-client-table>

        </div>
      </div>
    </div>


  </b-container>
</template>

<script>



export default {

  data() {
    return {
      list_1: [
        {
          name: 1,
          image: require('@/assets/Guideline/TAP_001.png')
        },
        {
          name: 2,
          image: require('@/assets/Guideline/TAP_002.png')
        }
      ],
      list_2: [
        {
          name: 1,
          image: require('@/assets/Guideline/MG_001.png')
        },
        {
          name: 2,
          image: require('@/assets/Guideline/MG_002.png')
        },
        {
          name: 3,
          image: require('@/assets/Guideline/MG_003.png')
        },
        {
          name: 4,
          image: require('@/assets/Guideline/MG_004.png')
        },
        {
          name: 5,
          image: require('@/assets/Guideline/MG_005.png')
        }
      ],
      columns: ["name", "image"],
      options_1: {
        headings: {
          name: 'Termite Anatomy Pointer',
        },
        filterByColumn: false,

        perPageValues: [5, 10, 25, 50, 100],
        filterable: false,
        perPage: 5,
        sortable: [],
        resizableColumns: true,
        pagination: { chunk: 5 }
      },
      options_2: {
        headings: {
          name: 'Termite Measurement Guideline 	',
        },
        filterByColumn: false,

        perPageValues: [5, 10, 25, 50, 100],
        filterable: false,
        perPage: 5,
        sortable: [],
        resizableColumns: true,
        pagination: { chunk: 5 }
      }
    };
  },

  computed: {

  },

  watch: {
    // eslint-disable-next-line

  },


  methods: {
  }

};
</script>

<style lang="scss">
  p.VuePagination__count.text-center {
    display: none;
  }
</style>
