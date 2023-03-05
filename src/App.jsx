import config from '../gitprofile.config';
import GitProfile from './components/GitProfile';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'Zasalast',
        },
      }}
    />
  );
}

export default App;
