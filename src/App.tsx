import { For } from 'solid-js'
import * as icons from './lib/icons'
import {
  SyncOutlined,
  SmileOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from './lib/icons'

import { Dynamic } from 'solid-js/web'

import './index.css'

import * as a from 'solid-js/web'

console.log(a)

export default function App() {
  return (
    <>
      <SyncOutlined spin />
      <SmileOutlined />
      <SmileOutlined rotate={180} />

      <SmileTwoTone />
      <HeartTwoTone twoToneColor="#eb2f96" />
      <CheckCircleTwoTone twoToneColor="#52c41a" />

      <div class="icon-wrapper">
        <For each={Object.entries(icons)}>
          {([name, component]) => (
            <div class="icon-item">
              <Dynamic component={component} class="icon"></Dynamic>
              <div class="icon-name">{name}</div>
            </div>
          )}
        </For>
      </div>
    </>
  )
}