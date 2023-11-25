import './App.css';
import { useState } from 'react';
import contactsData from './contacts.json';

const initialContacts = [
  {
    name: 'Arnold Schwarzenegger',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg',
    popularity: 18.216362,
    id: '4fe4d8ef-0fac-4bd9-8c02-ed89b668b2a9',
    wonOscar: false,
    wonEmmy: true,
  },
  {
    name: 'Ben Affleck',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg',
    popularity: 9.157077,
    id: '1599707e-5f49-4529-b920-db3831419b04',
    wonOscar: true,
    wonEmmy: false,
  },
  {
    name: 'Idris Elba',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg',
    popularity: 11.622713,
    id: '11731993-0604-4bee-80d5-67ad845d0a38',
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: 'Johnny Depp',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg',
    popularity: 15.656534,
    id: '7dad00f7-3949-477d-a7e2-1467fd2cfc06',
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: 'Monica Bellucci',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg',
    popularity: 16.096436,
    id: '0ad5e441-3084-47a1-9e9b-b917539bba71',
    wonOscar: false,
    wonEmmy: false,
  },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.filter(
      contact => !initialContacts.some(c => c.id === contact.id)
    )
  );

  const getRandomIndex = () =>
    Math.floor(Math.random() * remainingContacts.length);

  const handleAddRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert('No more contacts to add!');
      return;
    }

    const randomIndex = getRandomIndex();
    const randomContact = remainingContacts[randomIndex];

    setContacts(prevContacts => [...prevContacts, randomContact]);

    setRemainingContacts(prevRemainingContacts =>
      prevRemainingContacts.filter(contact => contact.id !== randomContact.id)
    );
    console.log('Updated contacts:', contacts);
    console.log('Updated remaining contacts:', remainingContacts);
  };

  return (
    <div className='App'>
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar</td>
            <td>Won an Emmy</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name}></img>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
