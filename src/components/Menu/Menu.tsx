import { Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export const MenuOptions = () => {

  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <Link href="/" color="inherit" underline="none" style={{ fontWeight: '700' }}>
        NBAplay
      </Link>
      <span style={{ fontSize: '14px' }}>Seu guia de resultados</span>
      <Divider style={{ margin: '12px' }} />
      <ul style={{ display: 'flex', flexDirection: 'column', padding: '0'  }}>
        <Link href="#" onClick={() => navigate('/players')}>Jogadores</Link>
        <Link href="#" onClick={() => navigate('/games')}>Jogos</Link>
      </ul>
    </div>
  )
}