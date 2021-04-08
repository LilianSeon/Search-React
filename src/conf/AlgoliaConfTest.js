window.searchAlgoliaConfig = {
    algolia: {
      applicationId: 'UQ5V1RCRHZ',
      apiKey: '625dc522ad32d77e986d35fc93081394',
    },
    menu:{
      linkMenu: "https://www.orange.jo/_layouts/15/orange2013master/en/assets/js/newfinaljs.js",
      mosseConf: 'language: "en",country: "ojo",typeEnv: "prod"',
      menuDivId: "mosse-header",
      footerDivId: "mosse-footer",
    },
    direction: "ltr",
    advertising:{
      image: "../../public/img/pub.jpg",
      url: "https://www.orange.be/fr/produits-et-services/abonnements-gsm"
    },
    label: {
      searchButton: "Rechercher",
      topTrends: "Suggestions",
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
          icon1: "../img/pannier.png",
          text2: "Les mobiles",
          url2: "google.fr",
          icon2: "../img/chat.png",
          text3: "L'assistance",
          url3: "google.fr",
          icon3: "../img/home.png",
          text4: "Le magazine",
          url4: "google.fr",
          icon4: "../img/pannier.png",
        }
      }
    },
    indices: [
               {
                indiceKey: 'orange.be_obel_shop_fr',
                template: "Product",
                sortByRelevance: "Trier par pertinence",
                sortByAscendingPrice: "Trier par prix croissant",
                sortByDescendingPrice: "Trier par prix décroissant",
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
                contentMaxWords: 25,
                hitsToShow: 5,
              },
              {
                indiceKey: 'orange.bf_fr_assistance',
                template: "AssistanceTest",
                tabTitle: "Assistance OBF",
                title: "Assistance OBF",
                contentMaxWords: 25,
                hitsToShow: 7,
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
                indiceKey: 'orange_numendo_brand',
                template: "Brand",
                tabTitle: "Marques",
                title: "Marques",
                hitsToShow: 6,
              },
               {
                indiceKey: "orange.be_obel_shop_fr_query_suggestions",
                template: "Suggestion",
              },
    ]
  };