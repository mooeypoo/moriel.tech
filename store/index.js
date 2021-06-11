export const state = () => ({
  siteEra: 3,
  siteEraLabels: [
    1992,
    1997,
    2000,
    2021
  ],
  whatido: 'build',
  whatidoLinks: {
    build: [
      {
        title: 'Selection of tools',
        links: [
          {
            img: 'rtlwtf.png',
            title: 'RTL.WTF',
            description: 'Experience and learn of Right-to-Left language support online',
            url: 'https://rtl.wtf'
          },
          {
            img: 'neutralitywtf.png',
            title: 'Neutrality:WTF',
            description: 'Challenge the perception of gendered language online',
            url: 'https://neutrality.wtf'
          },
          {
            img: 'rtlworks.png',
            title: 'RTL.WORKS',
            description: 'Test your website\'s Right-to-Left language support',
            url: 'http://rtl.works'
          }
        ]
      }
    ],
    write: [
      {
        title: 'Tech',
        links: [
          {
            title: 'Can Dynamic Sites Go Serverless?',
            description: 'Why I migrated my dynamic sites to a serverless architecture. Published on Netlify blogs.',
            url: 'https://www.netlify.com/blog/2021/05/27/can-dynamic-sites-go-serverless/'
          },
          {
            title: 'Wikipedia as a castle in the wilderness: modernization in the dynamic world of the internet',
            description: 'An overview of the need and plan to modernize Wikipedia\'s architecture. Published on Wikimedia Technical blog.',
            url: 'https://techblog.wikimedia.org/2020/10/29/wikipedia-as-a-castle-in-the-wilderness-modernization-in-the-dynamic-world-of-the-internet/'
          },
          {
            title: 'The twisted road through right-to-left language support',
            description: 'An overview of the harships of supporting Right to Left languages. Published on OpenSource.com',
            url: 'https://opensource.com/life/16/3/twisted-road-right-left-language-support'
          }
        ]
      },
      {
        title: 'Science',
        links: [
          {
            title: '10 easy ways you can tell for yourself that the Earth is not flat',
            description: 'An overview of how humanity has found out our planet is spheroid, and how you can observe and prove that to yourself (published in Popular Science)',
            url: 'https://www.popsci.com/10-ways-you-can-prove-earth-is-round/'
          },
          {
            title: 'Sciencing Minecraft',
            description: 'Explaining science within the Minecraft universe',
            url: 'http://www.smarterthanthat.com/physics/sciencing-minecraft-a-new-project/'
          },
          {
            title: 'Buffyverse Physics: Vampire Thermodynamics',
            description: 'Exploring thermodynamics using a Buffy the Vampire Slayer episode.',
            url: 'http://www.smarterthanthat.com/science-of-scifi/buffyscience/buffyverse-physics-vampire-thermodynamics/'
          },
          {
            title: 'Buffyverse Physics: It’s about Time (Pt 1: Relativity)',
            description: 'Exploring Relativity concepts within a Buffy the Vampire episode.',
            url: 'http://www.smarterthanthat.com/science-of-scifi/buffyscience/buffyverse-physics-its-about-time-pt-1-relativity/'
          },
          {
            title: 'Buffyverse Physics: It’s about Time (Pt 2: Energy)',
            description: 'Exploring concepts of Energy conservation within a Buffy the Vampire Slayer episode.',
            url: 'http://www.smarterthanthat.com/science-of-scifi/buffyscience/its-about-time-pt-2/'
          },
          {
            title: 'SmarterThanThat.com',
            description: 'See more of my science advocacy writing and videos',
            url: 'http://www.smarterthanthat.com/'
          }
        ]
      },
      {
        title: 'Fiction',
        links: [
          {
            title: 'Injured stories',
            description: 'A poem',
            url: 'http://lit.smarterthanthat.com/poem/injured-stories/'
          },
          {
            title: 'A message from space',
            description: 'Short story',
            url: 'http://lit.smarterthanthat.com/prose/a-message-from-space/'
          },
          {
            title: 'The physics of the tooth fairy',
            description: 'True short story',
            url: 'http://lit.smarterthanthat.com/prose/physics-of-the-tooth-fairy/'
          }
        ]
      }
    ]
  }
})

export const mutations = {
  changeSiteStyle (state, style) {
    state.siteEra = style
  },
  changeWhatIDo (state, topic) {
    state.whatido = topic
  },
  decreaseSiteEra (state) {
    const currIndex = state.siteEra
    if (currIndex > 0) {
      state.siteEra = currIndex - 1
    }
  },
  increaseSiteEra (state) {
    const currIndex = state.siteEra
    if (currIndex < state.siteEraLabels.length - 1) {
      state.siteEra = currIndex + 1
    }
  }
}

export const getters = {
  getSiteEraFromIndex: state => (index) => {
    return state.siteEraLabels[index] ||
      state.siteEraLabels[state.siteEraLabels.length - 1]
  },
  getCurrentSiteEra: (state) => {
    return state.siteEraLabels[state.siteEra]
  },
  isCurrentEra: state => (era) => {
    return state.siteEraLabels[state.siteEra] === era
  },
  isCurrentEraLowerThan: state => (era) => {
    return state.siteEraLabels[state.siteEra] < era
  },
  isCurrentEraBiggerThan: state => (era) => {
    return state.siteEraLabels[state.siteEra] > era
  },
  getWhatIDo: (state) => {
    return state.whatido
  },
  getRelevantWhatIDoLinks: (state) => {
    return state.whatidoLinks[state.whatido] || []
  }
}
