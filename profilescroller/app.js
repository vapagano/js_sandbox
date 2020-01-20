const data = [
  {
    name: 'John Doe',
    age: 43,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Jen Smith',
    age: 23,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/25.jpg'
  },
  {
    name: 'William Johston',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Los Angeles CA',
    image: 'https://randomuser.me/api/portraits/men/54.jpg'
  }
]

const profile = profileIterator(data);

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profile.next().value;

  document.getElementById('profileDisplay').innerHTML(`
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
  `);
}

// Profile Iterator
function profileIterator(profiles) {
  nextIndex = 0;

  return {
    next : function() {
      return nextIndex < profiles.lenght ?
      { value: profiles[nextIndex, done: false] } :
      { done: true }
    }
  };
}