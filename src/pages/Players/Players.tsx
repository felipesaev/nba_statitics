//TODO ajustar pathbase
import { useEffect, useState } from 'react';
import { CircularProgress, Backdrop, Card, CardHeader, Avatar, Grid, Badge } from '@mui/material'

import { usePlayers } from '../../hooks/usePlayers/usePlayers';
import { InputSearch } from '../../components/Input';

export const Players = () => {
  const [players, setPlayers] = useState([]);
  const [keyword, setKeyword] = useState('');
  const { data, isLoading } = usePlayers();

  useEffect(() => {
    setPlayers(data.data)
  }, [data])
  
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

  const updateKeyword = (keyword: string) => {
    const filtered = data?.data.filter(player => {
      return `${player.first_name} ${player.last_name}`.toLowerCase().includes(keyword.toLowerCase())      
    })
    setKeyword(keyword);
    setPlayers(filtered)
 }

  return (
    <>
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} >
          <InputSearch keyword={keyword} onChange={updateKeyword} label='Busque o jogador' />
        </Grid>
        {players.map((player, id) => {
          return (
            <>
              <Grid item xs={8} sm={6} md={4} key={id}>
                <Card >
                  <CardHeader avatar={
                    <Badge badgeContent={player.position} color="primary">
                      <Avatar sx={{ bgolor: '#666' }} aria-label="recipe">
                        {player.first_name.split('')[0]}
                      </Avatar>
                    </Badge>
                  } title={`${player.first_name} ${player.last_name}`} subheader={player.team.full_name} />
                </Card>
              </Grid>
            </>
          )

        })}
      </Grid>
    </>
  )
}