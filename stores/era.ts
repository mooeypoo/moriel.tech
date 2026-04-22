import { defineStore } from 'pinia'

const ERAS = [1989, 1992, 1997, 2000, 2012, 2021, 2100]

const whatidoLinks = {
  build: [
    {
      title: 'Web tools',
      links: [
        { img: 'dddnd.png', title: 'DDDnD.app', description: 'A satirical web game about software delivery.', url: 'https://dddnd.app' },
        { img: 'rtlwtf.png', title: 'RTL.WTF', description: 'Experience and learn of Right-to-Left language support online', url: 'https://rtl.wtf' },
        { img: 'neutralitywtf.png', title: 'Neutrality:WTF', description: 'Challenge the perception of gendered language online', url: 'https://neutrality.wtf' },
        { img: 'rtlworks.png', title: 'RTL.WORKS', description: "Test your website's Right-to-Left language support", url: 'http://rtl.works' },
      ],
    },
    {
      title: 'Minecraft plugins',
      links: [
        { img: '', title: 'ChatMonitor', description: 'A minecraft server plugin that monitors the chat and responds when text matches a list of specified words or regular expressions.', url: 'https://github.com/mooeypoo/ChatMonitor' },
        { img: '', title: 'PlayingWithTime', description: 'A minecraft plugin allowing admins to set permissions or group to players based on time played', url: 'https://github.com/mooeypoo/PlayingWithTime' },
        { img: '', title: 'TimelyActions', description: 'Minecraft plugin allowing admins to run commands for players every given time period.', url: 'https://github.com/mooeypoo/TimelyActions' },
      ],
    },
  ],
  write: [
    { title: 'Tech', links: [
      { title: 'How caching microservice outputs led to a 7x performance improvement', description: 'How migrating my dynamic site to serverless architecture I ended up making it 7x faster! Published on Netlify blogs.', url: 'https://www.netlify.com/blog/2021/08/17/how-caching-microservice-outputs-led-to-a-7x-performance-improvement/' },
      { title: 'Can Dynamic Sites Go Serverless?', description: 'Why I migrated my dynamic sites to a serverless architecture. Published on Netlify blogs.', url: 'https://www.netlify.com/blog/2021/05/27/can-dynamic-sites-go-serverless/' },
      { title: "Wikipedia as a castle in the wilderness: modernization in the dynamic world of the internet", description: "An overview of the need and plan to modernize Wikipedia's architecture. Published on Wikimedia Technical blog.", url: 'https://techblog.wikimedia.org/2020/10/29/wikipedia-as-a-castle-in-the-wilderness-modernization-in-the-dynamic-world-of-the-internet/' },
      { title: 'The twisted road through right-to-left language support', description: 'An overview of the harships of supporting Right to Left languages. Published on OpenSource.com', url: 'https://opensource.com/life/16/3/twisted-road-right-left-language-support' },
    ]},
    { title: 'Science', links: [
      { title: '10 easy ways you can tell for yourself that the Earth is not flat', description: 'An overview of how humanity has found out our planet is spheroid, and how you can observe and prove that to yourself (published in Popular Science)', url: 'https://www.popsci.com/10-ways-you-can-prove-earth-is-round/' },
      { title: 'Sciencing Minecraft', description: 'Explaining science within the Minecraft universe', url: 'http://www.smarterthanthat.com/physics/sciencing-minecraft-a-new-project/' },
      { title: 'Buffyverse Physics: Vampire Thermodynamics', description: 'Exploring thermodynamics using a Buffy the Vampire Slayer episode.', url: 'http://www.smarterthanthat.com/science-of-scifi/buffyscience/buffyverse-physics-vampire-thermodynamics/' },
      { title: "Buffyverse Physics: It's about Time (Pt 1: Relativity)", description: "Exploring Relativity concepts within a Buffy the Vampire episode.", url: 'http://www.smarterthanthat.com/science-of-scifi/buffyscience/buffyverse-physics-its-about-time-pt-1-relativity/' },
      { title: "Buffyverse Physics: It's about Time (Pt 2: Energy)", description: 'Exploring concepts of Energy conservation within a Buffy the Vampire Slayer episode.', url: 'http://www.smarterthanthat.com/science-of-scifi/buffyscience/its-about-time-pt-2/' },
      { title: 'SmarterThanThat.com', description: 'See more of my science advocacy writing and videos', url: 'http://www.smarterthanthat.com/' },
    ]},
    { title: 'Fiction', links: [
      { title: 'Injured stories', description: 'A poem', url: 'http://lit.smarterthanthat.com/poem/injured-stories/' },
      { title: 'A message from space', description: 'Short story', url: 'http://lit.smarterthanthat.com/prose/a-message-from-space/' },
      { title: 'The physics of the tooth fairy', description: 'True short story', url: 'http://lit.smarterthanthat.com/prose/physics-of-the-tooth-fairy/' },
    ]},
  ],
  speak: [
    { title: 'Tech and Localization', links: [
      { img: 'youtube-dddeu2024.png', title: 'Evolving Wikipedia: A Case Study in Applying DDD', description: "This talk will present a case study of utilizing Domain-Driven Design (DDD) methodologies to address the challenges of evolving Wikipedia's underlying system architecture.", url: 'https://www.youtube.com/watch?v=IvTmHMAd7nY' },
      { img: 'youtube-remoteconnect2022.png', title: "Internationalization when you're not localized", description: 'Remote international work involves working with people from all over the world...', url: 'https://remote.com/events/on-demand/internationalization-when-youre-not-localized' },
      { img: 'youtube-jamstack2021.png', title: 'How migrating my tool to Jamstack made me a better open source denizen', description: 'Migrating neutrality.wtf from hackathon-php to Jamstack architecture empowered me...', url: 'https://www.youtube.com/watch?v=SBZDm52ymzM' },
      { img: 'youtube-learnwithjason2021.png', title: 'Learn with Jason: Right-to Left (RTL) Support for Websites', description: 'RTL support has a lot of quirks...', url: 'https://ltr.wtf/talks/2016-11-02-linux-conf-au.html' },
      { img: 'youtube-LCA-Wait-tahW-LTR-WTF.png', title: 'Wait Wait, ?tahW: The Twisted Road to Right-to-Left Language Support', description: 'This lecture was given in linux.conf.au Conference 2016 in Australia...', url: 'https://ltr.wtf/talks/2016-11-02-linux-conf-au.html' },
      { img: 'youtube-Lightning-talk-BiDi-WAT-LTR-WTF.png', title: 'BiDi WAT??', description: 'A quick glance into some of the bigger challenges in supporting Right to Left content (and UI) online.', url: 'https://ltr.wtf/talks/2018-08-23-bidi-wat.html' },
      { img: 'youtube-Wait-it-does-tahW-How-supporting-Right-to-Left-can-expose-your-bad-UX-decisions-Strange-Loop.png', title: 'Wait, it does ??THAW', description: 'StrangeLoop 2017: A lecture aimed at UX/UI developers and designers.', url: 'https://www.thestrangeloop.com/2017/wait-it-does-tahw-how-supporting-right-to-left-can-expose-your-bad-ux-decisions.html' },
      { title: "It's All Backwards: How the Human Element Makes Supporting BiDi Difficult (and What to do About It)", description: 'Unicode Conference 43: Examples of real life misuse and mistakes...', url: 'https://www.unicodeconference.org/iuc43/Conference_Program.pdf' },
      { title: "How We Let Our Users Translate Wikipedia's Interfaces for more than 400 Languages and Locales", description: 'Unicode Conference 42: the infrastructure that allows this process to happen...', url: 'https://www.unicodeconference.org/iuc42/Conference_Program.pdf' },
    ]},
    { title: 'Wikipedia', links: [
      { img: 'youtube-internetarchive.png', title: 'Weaving Books into the Web—Starting with Wikipedia', description: 'Presentation at the Internet Archive event on October 29th, 2019', url: 'https://blog.archive.org/2019/10/29/weaving-books-into-the-web-starting-with-wikipedia/' },
    ]},
  ],
}

const awesomePeople = [
  { name: 'Tamás Deme', forwhat: 'For brainstorming, bugflushing, and nerdsniping', url: 'https://tomzorz.me/', img: 'https://github.com/tomzorz.png', twitter: 'tomzorz_' },
  { name: 'Cassidy Williams', forwhat: 'For brainstorming, inspiration, poking and prodding', url: 'https://cassidoo.co/', img: 'https://github.com/cassidoo.png', twitter: 'cassidoo' },
  { name: 'Ximena Vila Ferral', forwhat: 'For design expertise', url: 'https://ximenavf.com/', img: 'https://github.com/ximenavf92.png', twitter: 'ximenavf92' },
  { name: 'Diana Montalion', forwhat: 'For applying healthy doses of reason', url: 'https://www.montalion.com/', img: 'https://pbs.twimg.com/profile_images/1265638202628587520/hFvwERx__400x400.jpg', twitter: 'dianamontalion' },
]

export const useEraStore = defineStore('era', {
  state: () => ({
    siteEra: ERAS.length - 2,
    siteEraLabels: ERAS,
    whatido: 'speak' as 'build' | 'speak' | 'write',
    whatidoLinks,
    awesomePeople,
  }),

  getters: {
    getSiteEraFromIndex: (state) => (index: number) =>
      state.siteEraLabels[index] ?? state.siteEraLabels[state.siteEraLabels.length - 2],
    getCurrentSiteEraForPath: (state) => {
      const current = state.siteEraLabels[state.siteEra]
      if (current === 2021) return 'today'
      if (current === 2100) return 'future'
      return String(current)
    },
    getCurrentSiteEra: (state) => state.siteEraLabels[state.siteEra],
    isCurrentEra: (state) => (era: number) => state.siteEraLabels[state.siteEra] === era,
    isCurrentEraLowerThan: (state) => (era: number) => state.siteEraLabels[state.siteEra] < era,
    isCurrentEraBiggerThan: (state) => (era: number) => state.siteEraLabels[state.siteEra] > era,
    getWhatIDo: (state) => state.whatido,
    getRelevantWhatIDoLinks: (state) => state.whatidoLinks[state.whatido] || [],
    getAwesomePeople: (state) => state.awesomePeople,
  },

  actions: {
    changeSiteStyle(style: number) {
      this.siteEra = style
    },
    changeSiteEraFromLabel(label: string | number) {
      if (label === 'future') label = 2100
      else if (label === 'today') label = 2021
      let index = this.siteEraLabels.indexOf(Number(label))
      if (index < 0) index = ERAS.length - 2
      this.siteEra = index
    },
    setToTodayEra() {
      this.siteEra = ERAS.length - 2
    },
    changeWhatIDo(topic: 'build' | 'speak' | 'write') {
      this.whatido = topic
    },
    decreaseSiteEra() {
      if (this.siteEra > 0) this.siteEra -= 1
    },
    increaseSiteEra() {
      if (this.siteEra < this.siteEraLabels.length - 1) this.siteEra += 1
    },
  },
})
