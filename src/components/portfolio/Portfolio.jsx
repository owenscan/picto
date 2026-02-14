import Projects from "./Projects";

// FIXED: point directly to the file, with .png
import adomi from "../../assets/images/portfolio-images/adomi.png";
import chrome_bDg5xIdhKM from "../../assets/images/portfolio-images/chrome_bDg5xIdhKM.png";

// FIXED: added missing "/" after ".."
import railway from "../../assets/images/portfolio-images/railway.png";

import coinsure from "../../assets/images/portfolio-images/coinsure.png";
import stakd from "../../assets/images/portfolio-images/stakd.png";
import miciella from "../../assets/images/portfolio-images/miciella.png";

const projectData = [
  {
    id: 1,
    image: adomi,
    category: "BRAND IDENTITY",
    title: "Adomini Food Brand",
    description:
      "Created a cohesive brand identity system from concept to launch, including logo design, color palette, and promotional teasers to build anticipation.",
    link: "https://www.behance.net/gallery/240760001/Social-Media-Design-For-Stakd",
  },
  {
    id: 2,
    image: chrome_bDg5xIdhKM,
    category: "PROMOTIONAL DESIGN",
    title: "Taste Wiz Baking Class",
    description:
      "Designed a high-conversion promotional flyer optimized for digital and print, using warm tones and clear hierarchy to communicate value at a glance.",
    link: "https://www.behance.net/gallery/240761827/Social-Media-Designs",
  },
  {
    id: 3,
    image: railway,
    category: "SOCIAL MEDIA DESIGN",
    title: "Railway Mobile",
    description:
      "Designed high-quality social media creatives promoting mobile devices and tech accessories, translating product specifications into visually compelling, easy-to-understand graphics.",
    link: "https://www.behance.net/gallery/240757769/Social-Media-Designs-For-RailWay-Mobile",
  },
  {
    id: 4,
    image: coinsure,
    category: "SOCIAL MEDIA DESIGNS",
    title: "Coinsure Crypto Platform",
    description:
      "Designed a consistent visual system to simplify complex crypto concepts, using strategic color and typography to communicate security and innovation.",
    link: "https://www.behance.net/gallery/240755359/Social-Media-Design-For-CoinSure",
  },
  {
    id: 5,
    image: stakd,
    category: "SOCIAL MEDIA DESIGNS",
    title: "Stak'd",
    description:
      "Created visually compelling social media graphics showcasing burgers in an appetizing, bold, and premium manner using strategic color choices and typography.",
    link: "https://www.behance.net/gallery/240760001/Social-Media-Design-For-Stakd",
  },
  {
    id: 6,
    image: miciella,
    category: "SOCIAL MEDIA DESIGNS",
    title: "Mi Ciella Cakes and Pastries",
    description:
      "Created promotional graphics for product launches, special offers, and seasonal campaigns optimized for social media platforms to increase visibility.",
    link: "https://www.behance.net/gallery/240757303/Social-Media-Designs-For-MiCiella-Cakes-And-Pastries",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing designs.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
