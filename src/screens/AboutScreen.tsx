import PageTitle from '../components/PageTitle'

type AboutScreenProps = {
  text: string
}

const AboutScreen = (props: AboutScreenProps) => {
  return (
    <>
      <PageTitle text='This is the about page' />
    </>
  )
}

AboutScreen.displayName = 'AboutScreen'

export default AboutScreen
