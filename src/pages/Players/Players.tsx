//TODO ajustar pathbase
import { CircularProgress, Backdrop, ListItem, ListItemText, Pagination } from '@mui/material'

import { useQuery } from 'react-query'
import { fetchPLayers } from '../../api';


type PlayersProps = {
  first_name: string;
  id: number;
  last_name: string;
  total_page: string;
}

export const Players = () => {

  const { data, isLoading } = useQuery<PlayersProps[] | any>(['players'], () => fetchPLayers())

  const result = data?.data
  const meta = data?.meta
  console.log(meta);

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }
  return (

    <div style={{ display: 'flex' }}>

      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {result?.map((players, id) => {
          return (
            <>
              <ListItem style={{}} key={id} component="div" disablePadding>

                <ListItemText primary={`${players.first_name} ${players.last_name}`} />
              </ListItem>
            </>
          )

        })}
        <Pagination count={meta?.total_pages} showFirstButton showLastButton onChange={() => meta?.current_page + 1
        } />

      </ul>
    </div>
  )
}