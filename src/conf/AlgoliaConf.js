window.searchAlgoliaConfig = {
    algolia: {
      applicationId: 'UQ5V1RCRHZ',
      apiKey: '625dc522ad32d77e986d35fc93081394',
    },
    indices: {
              products1: {
                indiceKey: 'orange.be_obel_shop_fr',
                $templateWrapper: '.resultProducts1Wrapper',
                $component: '#PageSearch-block-products',
                $dropdown: '.NavSearch-ProduitsServices',
                $template: "#resultProductsTemplate",
                templateAttributes: { // For #resultProductsTemplate
                  url: 'objectID', // Set to false to remove element from template
                  price: 'price',
                  imageUrl: 'productPictureUrl',
                  title: 'title',
                  titleMaxWords: 10,
                  description: 'content',
                  descriptionMaxWords: 20
                },
                response: {},
                blockToShow: {
                  page: 10,
                  dropdown: 3
                }
              },
              assistance2: {
                indiceKey: "orange.be_obel_offres_fr",
                $templateWrapper: '.resultAssistance2Wrapper',
                $component: '.PageSearch-searchAssistance',
                $dropdown: '.NavSearch-Assistance',
                $template: "#resultAssistanceTemplate",
                templateAttributes: { // For #resultAssistanceTemplate
                  url: 'objectID',
                  title: 'title',
                  titleMaxWords: 12,
                  description: 'content',
                  descriptionMaxWords: 28
                },
                response: {},
                blockToShow: {
                  page: 10,
                  dropdown: 2
                }
              },
              suggest: {
                indiceKey: "orange.be_obel_shop_fr_query_suggestions",
                $templateWrapper: '.SearchSuggest-items',
                $component: '.SearchSuggest',
                $dropdown: '.NavSearch-Suggest',
                $template: "#resultSuggestTemplate",
                templateAttributes: { // For #resultSuggestTemplate
                  query: 'query'
                },
                response: {},
                blockToShow: {
                  page: 6,
                  dropdown: 2
                }
              },
    }
  };


  window.searchTabsConfig = {
    products1:{
        indexes: ['products1'],
            $tab: '#searchtab-products1-services',
            $target: ".PageSearch-searchProducts1"
    },
    assistance2:{
        indexes: ['assistance2'],
            $tab: '#searchtab-assistance2',
            $target: ".PageSearch-searchAssistance2"
    }
  };