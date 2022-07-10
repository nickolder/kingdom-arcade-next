import Layout from '../components/Layout'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <>
      <Layout
        title="Kingdom Arcade" 
        keywords="kingdom arcade, videojogos" 
        description="Página inicial da Kingdom Arcade. Kingdom Arcade é um site dedicado ao mundo dos videojogos. Comprometemo-nos a disponibilizar jogos da mais alta qualidade de graça." 
      />

      <Welcome/>
    </>
  )
}

export default Home
