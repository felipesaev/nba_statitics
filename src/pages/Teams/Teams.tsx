//TODO ajustar pathbase
import { CircularProgress, Backdrop, ListItem, ListItemText } from '@mui/material'

import { useTeams } from '../../hooks/useTeams/useTeams';

export const Teams = () => {

  const { data, isLoading } = useTeams() 

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
        {data?.data?.map((team, id) => {
          return (
            <>
              <ListItem style={{}} key={id} component="div" disablePadding>

                <ListItemText primary={`${team.full_name}`} />
              </ListItem>
            </>
          )

        })}
      </ul>
    </div>
  )
}