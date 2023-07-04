//TODO ajustar pathbase
import { useEffect, useState } from 'react';
import { CircularProgress, Backdrop, ListItem, ListItemText } from '@mui/material'

import { useTeams } from '../../hooks/useTeams/useTeams';
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
        open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }
  return (
    <>
      <InputSearch keyword={keyword} onChange={updateKeyword} placeholder='Busque o time' />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-4 md:gap-3 lg:gap-1 grid-rows-3 mt-12">

        {
          teams.length > 0 ? (
            teams.map((team, id) => {
              const logo = team.team.logos[0].href
              return (

                <div key={id} className="card card-side bg-base-100 shadow-xl">
                  <figure><img style={{ width: '86px' }} src={logo} alt="Teams" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.team.displayName}</h2>
                    <p>{team.team.location}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-xs btn-secundary"><a href={team.team.links[0].href} target='_blank'>Noticias</a></button>
                    </div>
                  </div>
                </div>
              )
            })

          ) : 'Nao encontramos o time'
        }
      </div>
    </>
  )
}