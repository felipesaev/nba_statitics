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

    <div style={{ display: 'flex' }}>
      <InputSearch keyword={keyword} onChange={updateKeyword} placeholder='Busque o time' />
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {teams.map((team, id) => {
          return (
            <>
              <ListItem style={{}} key={id} component="div" disablePadding>

                <ListItemText primary={team.team.displayName} />
              </ListItem>
            </>
          )

        })}
      </ul>
    </div>
  )
}