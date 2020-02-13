/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { Box, Flex } from "@theme-ui/components"
import { Separator } from "../ui-components"
import Project from "./ProjectItem"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment projectsBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ProjectsBlock {
    subtitle
    title
    projects {
      ... on WPGraphQL_Project {
        id
        featuredImage {
          ...GatsbyImageQuery
        }
        slug
        title
        uri
        projectFields {
          projectUrl
        }
      }
    }
  }
`

export const ProjectsBlock = ({ content, title, subtitle, projects }) => {
  return (
    <Box sx={{ my: 10 }}>
      <Box sx={{ textAlign: `center` }}>
        <Styled.h3
          dangerouslySetInnerHTML={{ __html: title }}
          sx={{
            variant: `text.heading`,
          }}
        />

        <Styled.h4
          dangerouslySetInnerHTML={{ __html: subtitle }}
          sx={{ textAlign: `center`, mb: 40 }}
        />
      </Box>
      <Flex sx={{ flexWrap: `wrap`, justifyContent: `center`, my: 10 }}>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </Flex>
    </Box>
  )
}
