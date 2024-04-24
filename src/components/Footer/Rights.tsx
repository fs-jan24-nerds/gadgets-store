export const Rights = () => {
  const people = [
    { id: 1, name: 'Mykyta Ganzha', position: 'Full-stack developer', location: 'Odesa'},
    { id: 2, name: 'Tetiana Lisna', position: 'Full-stack developer', location: 'Poltava' },
    { id: 2, name: 'Bohdan Mykhailevskyi', position: 'Full-stack developer', location: 'Lviv' },
    { id: 2, name: 'Oleksandr Yepik', position: 'Full-stack developer', location: 'Kyiv' },
    { id: 2, name: 'Ruslan Chyrkov', position: 'Full-stack developer', location: ' Kharkiv' },
    { id: 3, name: 'Mykyta Donskoy', position: 'Full-stack developer', location: 'Kyiv' }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Developed by</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map(person => (
          <li key={person.id} className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{person.name}</h2>
            <p className="text-gray-600">Position: {person.position}</p>
            <p className="text-gray-600">Location: {person.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};