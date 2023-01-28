import {Suspense, useEffect, lazy, useState} from 'react'

const Loading:React.FC = () => <div>Loading...</div>

type ClientOnlyProps = {
  load: () => Promise<{ default: any; }>
}

export const ClientOnly: React.FC<ClientOnlyProps> = ({ load }) => {
  const [Component, setComponent] = useState<any>(() => Loading)

  useEffect(() => {
      setComponent(() => lazy<any>(load))
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}