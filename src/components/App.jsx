import { Profile } from "./Profile/Profile";
import user from '../components/Date/user.json';

export const App = () => {
  return (
   
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user} />
     </div>
    
  );
};
