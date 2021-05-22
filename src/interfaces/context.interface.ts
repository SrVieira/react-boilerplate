import { NextPage } from 'next'

export interface IContext {
  children: NextPage
  title: string
  description: string
}
