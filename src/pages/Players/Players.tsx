import { useEffect, useState } from 'react';
import { CircularProgress, Backdrop } from '@mui/material'

//TODO ajustar pathbase
import { usePlayers } from '../../hooks/usePlayers/usePlayers';
import { InputSearch } from '../../components/Input';

export const Players = () => {
  const { data, isLoading } = usePlayers();
  const [keyword, setKeyword] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (data) {
      setPlayers(data.data)
    }

  }, [data])

  if (isLoading || !data) {
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
    setPlayers(filtered);
  }

  return (
    <>

      <InputSearch keyword={keyword} onChange={updateKeyword} placeholder='Busque o jogador' />

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-4 md:gap-3 lg:gap-1 grid-rows-3 mt-12">

        {players.length > 0 ? (

          players.map((player, id) => {
            return (
              <>
                <div key={id} className="card card-side bg-base-100 shadow-xl">

                  <div className="card-body">
                    <h2 className="card-title">{player.first_name} {player.last_name}</h2>
                   
                    <div className="badge badge-info gap-2">{player.position || 'OUT'}</div>

										<div className="badge badge-error gap-2">{player.team.conference || 'OUT'}</div>
                  </div>
                </div>
              </>
            )

          })
        ) : <p>Nenhum jogador encontrado</p>}
      </div>
    </>
  )
}