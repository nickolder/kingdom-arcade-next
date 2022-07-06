import Meta from '../components/Meta';
import Nav from '../components/nav/Nav';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <>
      <Meta 
        title="Kingdom Arcade" 
        keywords="kingdom arcade, videojogos" 
        description="Página inicial do Kingdom Arcade. Kingdom Arcade é um site dedicado ao mundo dos videojogos. Comprometemo-nos a disponibilizar jogos da mais alta qualidade de graça." 
      />

      <Nav/>

      <Welcome/>
    </>
  )
}

export default Home
