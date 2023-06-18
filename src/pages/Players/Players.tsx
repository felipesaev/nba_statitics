//TODO ajustar pathbase
import { CircularProgress, Backdrop, ListItem, ListItemText, Card, CardMedia, CardHeader, Avatar, Grid, Badge } from '@mui/material'

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


    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
      {data?.data?.map((players, id) => {
        return (
          <>
            <Grid item xs={8} sm={6} md={4} key={id}>
              <Card >
                <CardHeader avatar={
                  <Badge badgeContent={players.position} color="primary">
                    <Avatar sx={{ bgolor: '#666' }} aria-label="recipe">
                      {players.first_name.split('')[0]}
                    </Avatar>
                  </Badge>
                } title={`${players.first_name} ${players.last_name}`} subheader={players.team.full_name} />

              </Card>

            </Grid>
          </>
        )

      })}
    </Grid>
  )
}