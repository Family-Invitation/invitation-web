import React from "react";

const CoupleGallery = () => {
  const weddings = [
    {
      id: 1,
      image: "/images/bg-header.jpg",
      bride: "Jane Doe",
      groom: "John Smith",
      location: "Bali, Indonesia",
      date: "January 1, 2023",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_1280.jpg",
      bride: "Alice Brown",
      groom: "Bob Johnson",
      location: "Paris, France",
      date: "February 14, 2023",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1190043570/id/foto/selamat-fotografi-pernikahan-calon-pengantin-di-upacara-pernikahan-tradisi-pernikahan-ditaburi.jpg?s=1024x1024&w=is&k=20&c=7ap4OxXVDIlff5tuUFJeY8apY_tJN1OkQFp_g24CNn4=",
      bride: "Emily Clark",
      groom: "David Miller",
      location: "Santorini, Greece",
      date: "July 7, 2023",
    },
    {
      id: 4,
      image: "/images/bg-header.jpg",
      bride: "Jane Doe",
      groom: "John Smith",
      location: "Bali, Indonesia",
      date: "January 1, 2023",
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_1280.jpg",
      bride: "Alice Brown",
      groom: "Bob Johnson",
      location: "Paris, France",
      date: "February 14, 2023",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1190043570/id/foto/selamat-fotografi-pernikahan-calon-pengantin-di-upacara-pernikahan-tradisi-pernikahan-ditaburi.jpg?s=1024x1024&w=is&k=20&c=7ap4OxXVDIlff5tuUFJeY8apY_tJN1OkQFp_g24CNn4=",
      bride: "Emily Clark",
      groom: "David Miller",
      location: "Santorini, Greece",
      date: "July 7, 2023",
    },
    // Tambahkan data card lain di sini
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 bg-white rounded-lg flex flex-col justify-center items-center w-full text-pink-500">
      <h2 className="w-full text-center text-5xl font-philosopher font-semibold">
        Couple Gallery
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full z-0">
        {weddings.map((wedding) => (
          <div key={wedding.id} className="relative group">
            <img
              src={wedding.image}
              alt="Wedding"
              className="object-cover w-full h-64 rounded-lg transition duration-300 transform group-hover:scale-105 z-0"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-transparent bg-opacity-75 text-white rounded-b-lg ">
              <h2 className="text-xl font-semibold">{`${wedding.bride} & ${wedding.groom}`}</h2>
              <p className="text-sm">{wedding.location}</p>
              <p className="text-sm">{wedding.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoupleGallery;
