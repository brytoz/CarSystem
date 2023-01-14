import {   AuthContextProvider } from './dir/contexts/AuthContext';
import Stack from './dir/stack/Stack';


function App() {
  return (
    <div >
      <AuthContextProvider>
      <Stack />
      </AuthContextProvider>
    </div>
  );
}

export default App;
