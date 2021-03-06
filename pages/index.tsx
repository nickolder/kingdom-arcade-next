import Layout from '../components/Layout'
import Welcome from '../components/Welcome'
import GamesBar from '../components/GamesBar'

const Home = () => {

  return (
    <>
      <Layout
        title="Kingdom Arcade" 
        keywords="kingdom arcade, videojogos" 
        description="Página inicial da Kingdom Arcade. Kingdom Arcade é um site dedicado ao mundo dos videojogos. Comprometemo-nos a disponibilizar jogos da mais alta qualidade de graça." 
      />

      <Welcome/>

      <GamesBar title="Recomendados" icon="recommended"/>
      <GamesBar title="Tendências" icon="trending"/>
    </>
  )
}

export default Home
