window.searchAlgoliaConfig = {
    algolia: {
      applicationId: 'UQ5V1RCRHZ',
      apiKey: '625dc522ad32d77e986d35fc93081394',
    },
    indices: [
               {
                indiceKey: 'orange.be_obel_shop_fr',
                template: "Product",
                tabTitle: "Produits",
                title: "Produits",
                contentMaxWords: 15,
                hitsToShow: 10,
              },
              {
                indiceKey: 'orange.be_obel_fr_support',
                template: "Assistance",
                tabTitle: "Assistance Belgique",
                title: "Assistance OBL",
                contentMaxWords: 30,
                hitsToShow: 5,
              },
              {
                indiceKey: 'orange.be_obel_fr_support',
                template: "AssistanceTest",
                tabTitle: "Assistance Belgique 2",
                title: "Assistance OBL 2",
                contentMaxWords: 30,
                hitsToShow: 10,
              },
              {
                indiceKey: 'orange.be_video',
                template: "Video",
                tabTitle: "Vidéos",
                title: "Vidéos",
                contentMaxWords: 20,
                hitsToShow: 10,
              },
               {
                indiceKey: "orange.be_obel_shop_fr_query_suggestions",
                template: "suggestion",
                templateAttributes: { // For #resultSuggestTemplate
                  query: 'query'
                },
                response: {},
                blockToShow: {
                  page: 6,
                }
              },
    ]
  };