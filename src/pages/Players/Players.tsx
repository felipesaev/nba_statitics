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

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-4 md:gap-3 lg:gap-1 grid-rows-3">

        {players.length > 0 ? (

          players.map((player, id) => {


            return (
              <>

                <div key={id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{player.first_name} {player.last_name}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{player.team.full_name}</p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{player.position || 'OUT'}</span>
                </div>
              </>
            )

          })
        ) : <p>Nenhum jogador encontrado</p>}
      </div>
    </>
  )
}