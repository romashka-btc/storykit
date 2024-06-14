import { PREVIEW_IP_ASSETS } from "@/stories/data"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, waitFor } from "@storybook/test"

import Example from "./Example"

const meta = {
  title: "IP Assets/IpGraph",
  component: Example,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
  args: {},
  // tags: ["isHidden"],
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  argTypes: {
    ipId: {
      options: PREVIEW_IP_ASSETS,
    },
  },
  args: {
    ipId: PREVIEW_IP_ASSETS[0] as `0x${string}`,
  },
}
export const Input: Story = {
  argTypes: {
    ipId: { control: "text" },
  },
  args: {
    ipId: PREVIEW_IP_ASSETS[0] as `0x${string}`,
  },
  play: async ({ args, canvasElement }) => {
    await waitFor(
      () => {
        const canvas = canvasElement.querySelector("canvas")
        expect(canvas).toHaveAttribute("style", `width: ${args.width || 400}px; height: ${args.height || 300}px;`)
      },
      { timeout: 10000 }
    )
    await waitFor(
      () => {
        const collections = canvasElement.querySelector("#collections")
        expect(collections).toHaveTextContent("3eb0dfade3c5f4bed80d4ef85e69e8e5")
      },
      { timeout: 10000 }
    )
    await waitFor(
      () => {
        const nfts = canvasElement.querySelector("#nfts")
        expect(nfts).toHaveTextContent("0xC7Fffc7bA56026b471AE5f792A012E5a29c37a82")
      },
      { timeout: 10000 }
    )
  },
}
