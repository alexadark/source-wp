/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "@theme-ui/components"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment headingBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_HeadingBlock {
    heading
    type
    centered
  }
`

export const HeadingBlock = ({ heading, type, centered }) => {
  const style = centered && { textAlign: `center`, variant: `text.heading` }
  return (
    <Heading as={type} sx={{ textTransform: `uppercase`, ...style }}>
      {heading}
    </Heading>
  )
}
