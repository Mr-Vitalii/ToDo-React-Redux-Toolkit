

import { ThemeProvider } from '../../providers/ThemeProvider';
import { Layout } from '../layout/Layout';
import { Todo } from '../Todo';


const App = () => (

  <ThemeProvider>
    <Layout>
      <Todo />
    </Layout>
  </ThemeProvider>

);


export default App;
