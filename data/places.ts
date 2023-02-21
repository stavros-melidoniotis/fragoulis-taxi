import heraklion from "@/assets/images/places/heraklion.jpg";
import chania from "@/assets/images/places/chania.jpg";
import knossos from "@/assets/images/places/knossos.jpg";
import matala from "@/assets/images/places/matala.jpg";
import agiaGalini from "@/assets/images/places/agia-galini.jpg";
import rethymno from "@/assets/images/places/rethymno.jpg";

const places = [
  {
    name: "Heraklion",
    lat: 35.337,
    lng: 25.1347,
    type: "city",
    showInSection: true,
    mainImage: heraklion,
    url: "https://www.visitgreece.gr/islands/crete/irakleio/",
  },
  {
    name: "Chania",
    lat: 35.5115,
    lng: 24.0175,
    type: "city",
    showInSection: true,
    mainImage: chania,
    url: "https://www.visitgreece.gr/islands/crete/chania/",
  },
  {
    name: "Rethymno",
    lat: 35.3672,
    lng: 24.4748,
    type: "city",
    showInSection: true,
    mainImage: rethymno,
    url: "https://www.visitgreece.gr/islands/crete/rethymno/",
  },
  {
    name: "Matala",
    lat: 34.994,
    lng: 24.7497,
    type: "beach",
    showInSection: true,
    mainImage: matala,
    url: "https://www.visitgreece.gr/blog/travel-tips/509/matala-and-why-you-should-visit-it/",
  },
  {
    name: "Agia Galini",
    lat: 35.097,
    lng: 24.6881,
    type: "beach",
    showInSection: true,
    mainImage: agiaGalini,
    url: "https://www.cretanbeaches.com/en/cities-and-towns-in-crete/agia-galini-town",
  },
  {
    name: "Knossos",
    lat: 35.29845,
    lng: 25.16114,
    type: "history",
    showInSection: true,
    mainImage: knossos,
    url: "https://www.visitgreece.gr/blog/travel-tips/658/knossos-the-mythical-ancient-city/",
  },
  {
    name: "Festos",
    lat: 35.05128,
    lng: 24.81437,
    type: "history",
  },
  {
    name: "Kalamaki",
    lat: 35.0269,
    lng: 24.7616,
    type: "beach",
  },
  {
    name: "Malia",
    lat: 35.2831,
    lng: 25.4626,
    type: "city",
  },
  {
    name: "Chania Airport",
    lat: 35.5308,
    lng: 24.1498,
    type: "airport",
  },
  {
    name: "Heraklion Airport",
    lat: 35.3372,
    lng: 25.1794,
    type: "airport",
  },
];

export default places;
