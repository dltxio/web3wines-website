const people = [
  {
    name: "ABC",
    role: "Co-Founder / CEO",
    imageUrl: "https://www.dltx.io/images/icons/coding.png",
    desc: "ABC has 10 years experience in blockchain"
  },

  {
    name: "DEF",
    role: "Co-Founder/ CTO",
    imageUrl: "https://www.dltx.io/images/icons/coding.png",
    desc: "DEF has 10 years experience in blockchain"
  },
  {
    name: "OPQ",
    role: "CFO",
    imageUrl: "https://www.dltx.io/images/icons/coding.png",
    desc: "OPQ has 10 years experience in blockchain"
  },
  {
    name: "XYZ",
    role: "COO",
    imageUrl: "https://www.dltx.io/images/icons/coding.png",
    desc: "XYZ has 10 years experience in blockchain"
  }
];

export default function Team() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-navbar sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Our team of management has years of experience in the field. They
            are passionate about using blockchain technology to create
            innovative solutions and has been instrumental in developing our
            wine verification system.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map(person => (
            <li key={person.name}>
              <div className="group flex p-4 rounded-xl items-center gap-x-6 hover:bg-orange-50">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-navbar">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-white group-hover:text-navbar">
                    {person.role}
                  </p>
                  <p className="text-sm leading-6 text-black group-hover:text-navbar">
                    {person.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
