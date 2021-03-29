window.searchAlgoliaConfig = {
    algolia: {
      applicationId: 'UQ5V1RCRHZ',
      apiKey: '625dc522ad32d77e986d35fc93081394',
    },
    label: {
      searchButton: "Rechercher",
      topTrends: "Top Tendances",
      resultsFor: "résultats pour",
      noResults: {
        mainText: "Oups !!! Aucun résultat ne correspond à votre recherche.",
        list1: "Vérifiez l’orthographe des termes de recherche.",
        list2: "Essayez d'autres mots.",
        list3: "Utilisez des mots clés plus généraux.",
        banner:{
          mainText: "Certains liens, ci-dessous, peuvent vous aider dans votre recherche :",
          text1: "Les offres Orange",
          url1: "google.fr",
          icon1: "",
          text2: "Les mobiles",
          url2: "google.fr",
          icon2: "",
          text3: "L'assistance",
          url3: "google.fr",
          icon3: "",
          text4: "Le magazine",
          url4: "google.fr",
          icon4: "",
        }
      }
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
              },
    ]
  };