// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/sunlab/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "research directions in wireless communications, sensing, security, and edge learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sunlab/research/";
          },
        },{id: "nav-lab",
          title: "Lab",
          description: "Current SunLab people and research interests.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sunlab/lab/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching and student advising.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sunlab/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/sunlab/books/the_godfather/";
            },},{id: "news-team-sunlab-placed-second-and-third-in-nsf-aerpaw-s-find-a-rover-challenge-congratulations-to-paul-lihao-and-hanwen",
          title: 'Team SunLab placed second and third in NSF AERPAW’s Find a Rover Challenge....',
          description: "",
          section: "News",},{id: "news-the-paper-hawkrover-an-autonomous-mmwave-vehicular-communication-testbed-with-multi-sensor-fusion-and-deep-learning-won-the-best-paper-award-at-ieee-isicn-2024",
          title: 'The paper “HawkRover: An Autonomous mmWave Vehicular Communication Testbed with Multi-sensor Fusion and...',
          description: "",
          section: "News",},{id: "news-sunlab-shared-recent-work-on-wireless-channel-representation-using-3dgs-to-reconstruct-radio-radiance-fields-see-rf-3dgs-and-the-interactive-viewers-on-the-open-rrf-page",
          title: 'SunLab shared recent work on wireless channel representation using 3DGS to reconstruct radio...',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-globecom-2025-terahertz-spatial-wireless-channel-modeling-with-radio-radiance-field",
          title: 'One paper was accepted by GLOBECOM 2025: Terahertz Spatial Wireless Channel Modeling with...',
          description: "",
          section: "News",},{id: "news-sunlab-received-several-nsf-grants-on-data-infrastructure-channel-modeling-and-wireless-security",
          title: 'SunLab received several NSF grants on data infrastructure, channel modeling, and wireless security....',
          description: "",
          section: "News",},{id: "news-our-latest-work-rf-pgs-a-planar-gaussian-splatting-framework-for-fully-structured-spatial-wireless-channel-representation-enables-accurate-and-efficient-modeling-of-full-radio-propagation-paths",
          title: 'Our latest work RF-PGS, a planar Gaussian splatting framework for fully structured spatial...',
          description: "",
          section: "News",},{id: "projects-edge-computing-and-learning",
          title: 'Edge Computing and Learning',
          description: "Wireless resource allocation for mobile edge computing and distributed learning.",
          section: "Projects",handler: () => {
              window.location.href = "/sunlab/projects/edge-computing-learning/";
            },},{id: "projects-ultra-low-power-iot",
          title: 'Ultra-Low-Power IoT',
          description: "Cross-layer design for energy- and spectrum-efficient large-scale IoT connectivity.",
          section: "Projects",handler: () => {
              window.location.href = "/sunlab/projects/low-power-iot/";
            },},{id: "projects-mmwave-communication-for-cavs",
          title: 'mmWave Communication for CAVs',
          description: "Side-information assisted beam management for connected and automated vehicles.",
          section: "Projects",handler: () => {
              window.location.href = "/sunlab/projects/mmwave-cavs/";
            },},{id: "projects-5g-and-beyond-radio-access",
          title: '5G and Beyond Radio Access',
          description: "PHY-layer methods for spectral, energy, and computation efficiency.",
          section: "Projects",handler: () => {
              window.location.href = "/sunlab/projects/new-radio-access/";
            },},{id: "projects-radio-radiance-field",
          title: 'Radio Radiance Field',
          description: "3D wireless channel representation with visual cues and sparse wireless samples.",
          section: "Projects",handler: () => {
              window.location.href = "/sunlab/projects/radio-radiance-field/";
            },},{id: "projects-wireless-and-cps-security",
          title: 'Wireless and CPS Security',
          description: "Physical-layer security and embedded system security for cyber-physical systems.",
          section: "Projects",handler: () => {
              window.location.href = "/sunlab/projects/wireless-security/";
            },},{id: "projects-wireless-sensing",
          title: 'Wireless Sensing',
          description: "RF-based localization, monitoring, and environmental sensing.",
          section: "Projects",handler: () => {
              window.location.href = "/sunlab/projects/wireless-sensing/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/sunlab/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/sunlab/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%73%75%6E@%75%67%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/sunlab/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nHVq0B8AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/SunLab-UGA", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Haijian-Sun-3/", "_blank");
        },
      },];
