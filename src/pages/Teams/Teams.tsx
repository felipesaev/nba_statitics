//TODO ajustar pathbase
import { CircularProgress, Backdrop, ListItem, ListItemText } from '@mui/material'

import { useTeams } from '../../hooks/useTeams/useTeams';
import { useEffect, useState } from 'react';
import { InputSearch } from '../../components/Input';

export const Teams = () => {

  const { data, isLoading } = useTeams();


  const [keyword, setKeyword] = useState('');
  const [teams, setTeams] = useState([]);

  useEffect(() => {

    if (data) {
      setTeams(data.sports[0].leagues[0].teams)
    }

  }, [data])


  const updateKeyword = (keyword: string) => {

    const filtered = data.sports[0].leagues[0].teams.filter(team => {
      return team.team.location.toUpperCase().includes(keyword.toUpperCase())
    })
    setKeyword(keyword);
    setTeams(filtered);

  }

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
    <>
      <InputSearch keyword={keyword} onChange={updateKeyword} placeholder='Busque o time' />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-4 md:gap-3 lg:gap-1 grid-rows-3">

        {teams.map((team, id) => {
          const logo = team.team.logos[0].href
          return (
            <div key={id} className="rounded overflow-hidden shadow-lg">

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{team.team.displayName}</div>
                <span className="text-gray-700 text-sm">Cidade: {team.team.location}</span>

                <img src={logo} width={40} height={40} alt="Sunset in the mountains" />
              </div>

            </div>
          )
        })}
      </div>
    </>
  )
}