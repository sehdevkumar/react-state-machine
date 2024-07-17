import './App.css'
// App.js or index.js
import { QueryClient, QueryClientProvider } from 'react-query';
import Light from './machineExample';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <Light/>
    </QueryClientProvider>
  );
}



export default App
