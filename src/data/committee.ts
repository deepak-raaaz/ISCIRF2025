export interface CommitteeMember {
  name: string;
  title: string;
  department?: string;
  institution?: string;
  image: string;
  email?: string;
  phone?: string;
}

export interface Patron extends CommitteeMember {
  role: string;
}


export const committeeMembers: CommitteeMember[] = [
  {
    name: "Dr. Kunal Pradhan",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Mr. Soumen Ghosh",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Ms. Minakshi Sarkar",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Mr. Kalyan Maji",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Mr. Sudip Mishra",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Ms. Dipannita Basu",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Ms. Aratrika Banerjee",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Mrs. Jayashri Deb Sinha",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Mr. Asis Kumar Bhunia",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  },
  {
    name: "Mrs. Papri Ghosh",
    title: "Assistant Professor",
    department: "CSE(DS)",
    institution: "Haldia Institute of Technology",
    image: ""
  }
];






export const chiefPatron: Patron = {
  name: "Dr. Lakshman Chandra Seth",
  title: "D.Litt",
  role: "Chairman, HIT & ICARE",
  image: "/patrons/chairman.jpeg"
};

export const patrons: Patron[] = [
  {
    name: "Mr. Ashis Lahiri",
    title: "Secretary, ICARE",
    image: "/patrons/secretary.png",
    role: "Patron"
  },
  {
    name: "Mr. Sayantan Seth",
    title: "Vice Chairman, HIT",
    image: "/patrons/sayantan-seth.jpg",
    role: "Patron"
  },
  {
    name: "Prof. Tarun Kanti Jana",
    title: "Principal, HIT",
    image: "/patrons/Tarun-Kanti-Jana.jpg",
    role: "Patron"
  },
  {
    name: "Dr. Anjan Mishra",
    title: "Registrar General, HIT",
    image: "/patrons/registrar.jpg",
    role: "Patron"
  }
];

export const organizingSecretary: CommitteeMember = {
  name: "Dr. Sumit Kumar Maiti",
  title: "HOD & Associate Professor, CSE (DS)",
  department: "Haldia Institute of Technology",
  image: "/sumit-kumar-maiti.jpg",
  email: "sumit.maiti@hithaldia.ac.in",
  phone: "+91 96144 69031"
};

