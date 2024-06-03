import AirKuning from "@/app/icons/AirKuning";
import Smelly from "@/app/icons/Smelly";
import ZatKapur from "@/app/icons/ZatKapur";

const OVERCOME_DATA = [
  {
    id: 0,
    title: "Air Bau & Keruh",
    description: "Air yang berbau tidak sedap dan kotor",
    icon: <Smelly />,
  },
  {
    id: 1,
    title: "Air Kuning",
    description: "Air Berwarna Kuning",
    icon: <AirKuning />,
  },
  {
    id: 2,
    title: "Zat Kapur",
    description:
      "Air yang menyebabkan kerak putih pada peralatan dapur dan kamar mandi, kurang segar, dan menghasilkan lebih sedikit busa saat mencuci.",
    icon: <ZatKapur />,
  },
  {
    id: 3,
    title: "Zat Besi",
    description:
      "Air yang berbau besi, memiliki endapan berwarna kuning, dan terasa licin",
    icon: <ZatKapur />,
  },
  {
    id: 4,
    title: "Zat Mangan",
    description:
      "Air yang memiliki noda hitam/coklat, yang bisa menyebabkan bercak-bercak berwarna kecoklatan pada pakaian",
    icon: <ZatKapur />,
  },
];

export default OVERCOME_DATA;
