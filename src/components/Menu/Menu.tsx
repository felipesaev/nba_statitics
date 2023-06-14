import { Divider, Link } from '@mui/material';


export const MenuOptions = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <Link href="/" color="inherit" underline="none" style={{ fontWeight: '700' }}>
        NBAplay
      </Link>
      <span style={{ fontSize: '14px' }}>Seu guia de resultados</span>
      <Divider style={{ margin: '12px' }} />
      <ul style={{ display: 'flex', flexDirection: 'column', padding: '0'  }}>
        <Link href="#">Jogadores</Link>
        <Link href="#">Jogos</Link>
      </ul>
    </div>
  )
}