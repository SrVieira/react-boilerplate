import { NextPage } from 'next'

const withLayout: React.ReactNode = (Page: NextPage) => {
  return (
    <>
      <Page />
    </>
  )
}

export default withLayout
