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
                General features of soldier and dorsal view of total body and measurement of <i>Bifiditermes beesoni</i> (Gardner)
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
                a. <i>Macrotermes khajuriai</i> (Roonwal & Chhotani);
                <br>
                b. <i>Odontotermes lokanandi</i> (Chatterjee & Thakur);
                <br>
                c. <i>Odontotermes distans</i> (Holmgren & Holmgren);
                <br>
                d. <i>Hypotermes xenotermitis</i> (Wasmann);
                <br>
                e. <i>Microtermes pakistanicus*</i> (Ahmad);
                <br>
                f. <i>Microtermes obesi</i> (Holmgren)
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
                1. <i>Pericapritermes nitobei</i>
                <br>
                2. <i>Microtermes pakistanicus</i>
                <br>
                3. <i>Odontotermes oblongatus</i>
                <br>
                4. <i>Macrotermes gilvus</i> - major soldier
                <br>
                5. <i>Macrotermes chaiglomi</i> - major soldier
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
                1. <i>Pericapritermes mohri</i> - the entire antenna's length; 1A. Close-up drawing of the first six articles
                <br>
                2. <i>Odontotermes bogoriensis</i> - The entire antenna's length; 2A. Close-up drawing of the first six articles
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
                (Roonwal and Chhotani, 1989 - in Sornuwat, 2004)
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

    <br>
    <b>Reference</b>
    <br>
    <p>
      Ahmad, M. (1965). <i> Termites (Isoptera) of Thailand. Bulletin of the American Museum of Natural History </i> (Vol. 131). New York: American Museum of Natural History.
    </p>
    <p>
      Kemner, N. V. A. (1934). Systematische und biologische Studien über die Termiten Javas und Celebes.<i> Kungliga Svenska Vetenskapsakademiens Handlingar (3), 13</i>(4), 1-241 + 22 pls.
    </p>
    <p>
      Roonwal, M. L., & Chhotani, O. B. (1989). Fauna of India, Isoptera (Termites) Vol I. <i>In The Fauna of India and The Adjacent Countries </i>(pp. 1–695). Zoological Survey of India.
    </p>
    <p>
      Roonwall, M.L. (1969). Measurement of termites (Isoptera) for taxonomic purposes. <i>J. Zool. Soc. India 21</i>(1): 9-66.
    </p>
    <p>
      Sornnuwat, Y., Vongkaluang, C., & Takematsu, Y. (2004). A Systematic Key to Termites of Thailand. <i>Kasetsart Journal, 38, </i>349–368.
    </p>
    <p>
      Thakur, M. L. (1983). A review of the family Macrotermitidae (Isoptera) from the Oriental Region. <i>Oriental Insects, 17</i>(1), 35–77. https://doi.org/10.1080/00305316.1983.10433691
    </p>
    <p>
      Tho, Y. P. (1992). <i>Termites of Peninsular Malaysia</i>. (L. G. Kirton, Ed.). Kepong: Forest Research Institute Malaysia.
    </p>



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
