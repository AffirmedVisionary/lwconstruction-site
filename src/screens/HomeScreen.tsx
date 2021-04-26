import PageTitle from '../components/PageTitle'

type HomeScreenProps = {
  text: string
}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <>
      <PageTitle text='This is the Home page' />
    </>
  )
}

HomeScreen.displayName = 'HomeScreen'

export default HomeScreen
