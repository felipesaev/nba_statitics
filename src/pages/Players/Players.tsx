//TODO ajustar pathbase
import { CircularProgress, Backdrop, ListItem, ListItemText } from '@mui/material'

import { usePlayers } from '../../hooks/usePlayers/usePlayers';

export const Players = () => {

  const { data, isLoading } = usePlayers() 

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
        {data?.data?.map((players, id) => {
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