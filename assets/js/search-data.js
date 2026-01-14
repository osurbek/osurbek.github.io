// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "You can download my CV by clicking on the red pdf button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-new-working-paper-out-using-machine-learning-to-compute-constrained-optimal-carbon-tax-rules-podcast-on-the-paper-by-notebooklm-arxiv-link",
          title: 'New working paper out: “Using Machine Learning to Compute Constrained Optimal Carbon Tax...',
          description: "",
          section: "News",},{id: "news-in-november-2025-i-visited-the-bank-al-maghrib-in-rabat-morocco-to-work-on-lending-to-smes-in-emerging-markets",
          title: 'In November 2025, I visited the Bank al Maghrib in Rabat, Morocco to...',
          description: "",
          section: "News",},{id: "news-in-spring-2026-i-will-be-visiting-the-grantham-institute-at-lse-on-invitation-by-prof-frank-venmans",
          title: 'In spring 2026, I will be visiting the Grantham Institute at LSE on...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%6C%69%76%65%72.%73%75%72%62%65%6B@%75%6E%69%6C.%63%68", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/oliver-surbek-389819202", "_blank");
        },
      },];
