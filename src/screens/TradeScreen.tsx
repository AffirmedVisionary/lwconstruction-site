import PageTitle from '../components/PageTitle'

type TradeScreenProps = {
  text: string
}

const TradeScreen = (props: TradeScreenProps) => {
  return (
    <>
      <PageTitle text='This is the Trade page' />
    </>
  )
}

TradeScreen.displayName = 'TradeScreen'

export default TradeScreen
