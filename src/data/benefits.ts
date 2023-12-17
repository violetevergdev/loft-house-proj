interface IBenefits {
  id: number;
  img: string;
  alt: string;
  description: string;
}

export const benefits: IBenefits[] = [
  {
    id: 1,
    img: "./img/benefits/bench.svg",
    alt: "bench svg icon",
    description: "Рядом исторические парки и скверы",
  },
  {
    id: 2,
    img: "./img/benefits/building.svg",
    alt: "building svg icon",
    description: "Полностью обустроенный",
  },
  {
    id: 3,
    img: "./img/benefits/fountain.svg",
    alt: "fountain svg icon",
    description: "10 фонтанов на территории",
  },
  {
    id: 4,
    img: "./img/benefits/bicycle.svg",
    alt: "bicycle svg icon",
    description: "6 км велодорожек",
  },
];
