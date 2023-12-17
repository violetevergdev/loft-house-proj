interface IApartments {
  id: number;
  img: string;
  alt: string;
  title: string;
}

export const apartments: IApartments[] = [
  {
    id: 1,
    img: "/img/apartmens/01.jpg",
    alt: "Apartment image",
    title: "Пентхаус “Loft Олимп”",
  },
  {
    id: 2,
    img: "/img/apartmens/02.jpg",
    alt: "Apartment image",
    title: "Апартаменты “Nice Loft”",
  },
  {
    id: 3,
    img: "/img/apartmens/03.jpg",
    alt: "Apartment image",
    title: "Апартаменты “Loft Studio”",
  },
  {
    id: 4,
    img: "/img/apartmens/04.jpg",
    alt: "Apartment image",
    title: "Loft квартира “Престиж”",
  },
];
