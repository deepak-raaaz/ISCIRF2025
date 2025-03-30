export interface AdvisoryMember {
    name: string;
    title: string;
    institution?: string;
    image?: string;
    country?: string;
    profileLink?: string;
  }
  
  export const nationalAdvisors: AdvisoryMember[] = [
    {
      name: "Prof. (Dr.) Tarun Kanti Jana",
      title: "Principal, HIT, Haldia",
      image: "/patrons/Tarun-Kanti-Jana.jpg",
    },
    {
      name: "Prof. (Dr.) Asit Baran Maity",
      title: "Dean, HIT, Haldia",
    },
    {
      name: "Prof. (Dr.) Radharani Das",
      title: "Dean, HIT, Haldia"
    },
    {
      name: "Prof. (Dr.) Dilip Kumar Dey",
      title: "Coordinator-IQAC, HIT, Haldia"
    },
    {
      name: "Prof. (Dr.) Rajib Kumar Dubey",
      title: "HIT, Haldia"
    },
    {
      name: "Dr. Debasis Das",
      title: "Manager Administration, HIT, Haldia"
    },
    {
      name: "Prof. (Dr.) Santi Prasad Maity",
      title: "BEST, Shibpur"
    },
    {
      name: "Prof. (Dr.) Sankar Kumar Roy",
      title: "Vidyasagar University"
    }
  ];
  
  export const internationalAdvisors: AdvisoryMember[] = [
    {
      name: "Prof. (Dr.) José Luis Verdegay",
      title: "Universidad de Granada",
      country: "Granada, Spain",
      image: "/speakers/2.png",
      profileLink: "#"
    },
    {
      name: "Prof. (Dr.) Gerhard-Wilhelm Weber",
      title: "Poznan University of Technology",
      country: "Poznan, Poland",
      image: "/Gerhard.jpeg",
      profileLink: "#"
    },
    {
      name: "Prof. (Dr.) Josef Jablonsky",
      title: "Prague University",
      country: "Prague, Czech Republic",
      image: "/speakers/1.jpg",
      profileLink: "#"
    },
    {
      name: "Prof. (Dr.) Dragan Pamucar",
      title: "University of Belgrade",
      country: "Belgrade, Serbia",
      image: "",
      profileLink: "#"
    },
    {
      name: "Prof. (Dr.) Erfan Babaee Tirkolaee",
      title: "Istinye University",
      country: "Turkey",
      image: "",
      profileLink: "#"
    }
  ];