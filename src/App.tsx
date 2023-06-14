
import Sidebar from './components/Sidebar/Sidebar';
import { Backdrop, CircularProgress, Divider, ListItem, ListItemText } from '@mui/material'

import { useQuery } from 'react-query'
import fetchPLayers from './api';

type Players = {
  first_name: string;
  id: number;
  last_name: string;
}

function App() {
  const { data, isLoading } = useQuery<Players[]>({ queryKey: ['players'], queryFn: fetchPLayers })
  console.log(data);


  if (isLoading) {
    return (
      <>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    )
  }


  return (

    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Divider orientation={'vertical'} style={{ height: '100vh', marginRight: '68px' }} />
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {data?.map((players, id) => {
          return (
            <>
              <ListItem style={{}} key={id} component="div" disablePadding>

                <ListItemText primary={`${players.first_name} ${players.last_name}`} />
              </ListItem>
            </>
          )

        })}
      </ul>
    </div>

  )
}

export default App
