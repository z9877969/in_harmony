import axios from 'axios';

const MiddleComponent = async () => {
  const response = await axios.get('http://localhost:3000/api/collections');
  const collections = response.data;
  const { activeCollections, closedCollections } = collections;
  console.log(collections);
  return (
    <ul>
      {activeCollections &&
        activeCollections.map((collection) => (
          <li key={collection.id}>
            <p>{collection.title}</p>
            <p>{collection.isOpen ? 'Відкрита' : 'Закрита'}</p>
          </li>
        ))}
    </ul>
  );
};

export default MiddleComponent;
