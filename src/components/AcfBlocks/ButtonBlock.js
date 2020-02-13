/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button, Flex, Box } from "@theme-ui/components"
import { graphql, Link } from "gatsby"
import config from "../../../config"

export const fragment = graphql`
  fragment buttonBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ButtonBlock {
    variant
    position
    button {
      target
      title
      url
    }
  }
`

export const ButtonBlock = ({ variant, button, position }) => {
  const { title, target, url } = button
  const buttonUrl = url.replace(config.wordPressUrl, "")
  const style =
    position === "center"
      ? { justifyContent: `center` }
      : position === "left"
      ? { justifyContent: `start` }
      : { justifyContent: `end` }
  return (
    <Flex sx={style}>
      <Box>
        <Button variant={variant || "primary"} button={button}>
          {target === "_blank" ? (
            <a href={url} target="_blank">
              {title}
            </a>
          ) : (
            <Link to={buttonUrl}>{title}</Link>
          )}
        </Button>
      </Box>
    </Flex>
  )
}
