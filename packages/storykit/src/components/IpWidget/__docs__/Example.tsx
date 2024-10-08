import { STORYKIT_SUPPORTED_CHAIN } from "@/lib/constants"
import { ILIAD_PREVIEW_IP_ASSETS } from "@/stories/data"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { FC } from "react"
import { Address } from "viem"

import IpWidget from "../IpWidget"

const Example: FC<{ chain: STORYKIT_SUPPORTED_CHAIN; ipId: Address; isBottomNav?: boolean }> = ({
  chain = STORYKIT_SUPPORTED_CHAIN.STORY_TESTNET,
  ipId = ILIAD_PREVIEW_IP_ASSETS[1] as "0x${string}",
  isBottomNav = false,
}) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <IpWidget chain={chain} ipId={ipId} isBottomNav={isBottomNav} />
      </div>
    </QueryClientProvider>
  )
}

export default Example
