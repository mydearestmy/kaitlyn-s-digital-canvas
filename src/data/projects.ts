// Replace these image URLs with your own project images
export interface Project {
  number: string;
  category: string;
  name: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  description?: string;
  year?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    category: "University Project - Web Design",
    name: "Memory Box",
    description:
      "Memory Box is an interactive art exhibition based on the 
modern media perceptions of memories and nostalgia, with 
concepts such as anemoia; nostalgia for a past you never 
experienced, a term coined in 2014; and more recently the 
re-imagnined perceptions of liminal space into something al
most horror-centric. Furthermore, with the concept of an good 
old time a constant throughout history, but now more prele
vant than ever in a pessimistic modern world, it becomes an 
interesting theme to based our project on. 
We went in a psychological horror direction, and much like 
many absurd, abstract contemporary exhibitions, we wanted 
to present our concepts in a truly unexpected way.
",
    year: "2024",
    role: "3D Designer",
    col1Image1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Image2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Image:
      "https://raw.githubusercontent.com/mydearestmy/kaitlyn-s-digital-canvas/main/src/assets/memory-box.png",
  },
  {
    number: "02",
    category: "Personal",
    name: "photograph",
    description:
      "A personal photography series capturing candid moments, quiet emotions, and the beauty found in everyday life. Each frame is an attempt to slow down and find meaning in the fleeting — light, shadow, and the spaces in between.",
    year: "2025",
    role: "Photographer",
    col1Image1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Image2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Image:
      "https://raw.githubusercontent.com/mydearestmy/kaitlyn-s-digital-canvas/main/src/assets/photograph.jpg",
  },
  {
    number: "03",
    category: "Personal",
    name: "A Glimpse of Sydney",
    description:
      "A visual diary of Sydney through a personal lens — its harbour light, hidden laneways, and the quiet hum of urban life. This project documents the city not as a postcard, but as a living, breathing place full of texture and feeling.",
    year: "2025",
    role: "Photographer & Editor",
    col1Image1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Image2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Image:
      "https://raw.githubusercontent.com/mydearestmy/kaitlyn-s-digital-canvas/main/src/assets/glimpse-of-sydney.png",
  },
];
