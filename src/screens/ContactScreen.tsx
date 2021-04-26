import PageTitle from '../components/PageTitle'

type ContactScreenProps = {
  text: string
}

const ContactScreen = (props: ContactScreenProps) => {
  return (
    <>
      <PageTitle text='This is the contact page' />
    </>
  )
}

ContactScreen.displayName = 'ContactScreen'

export default ContactScreen
