import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || [
          "gatsby-blog",
          "web-devlopement-&-machine-&-deep-learning-blog",
          "static-website",
          "mdx-gatsby-blog",
        ]

        return (
          <Helmet
            title={metaTitle}
            htmlAttributes={{
              lang: "en",
            }}
            meta={[
              {
                name: `google-site-verification`,
                content: "71cWx1ID2lznPcYeaPWglNrACVAeqXAlXleUcm4_5HE",
              },
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `og:title`,
                content: metaTitle,
              },
              {
                name: `og:description`,
                content: metaDescription,
              },
              {
                name: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? { name: `keywords`, content: metaKeywords.join(", ") }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query defaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`

export default Seo
