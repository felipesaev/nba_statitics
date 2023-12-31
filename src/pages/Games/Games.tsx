//TODO ajustar pathbase
import { CircularProgress, Backdrop, ListItem, ListItemText } from '@mui/material'

import { useGames } from '../../hooks/useGames/useGames';

export const Games = () => {
  const { data, isLoading } = useGames()
    
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
        {data?.data?.map((game, id) => {
          return (
            <>
              <ListItem style={{}} key={id} component="div" disablePadding>

                <ListItemText primary={`${game.status}`} />
              </ListItem>
            </>
          )

        })}
      </ul>
    </div>
  )
}