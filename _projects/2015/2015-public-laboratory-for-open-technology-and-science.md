---
published: true # change to true once ready to post
year: "2015"

title: "Public Laboratory for Open Technology and Science" # Displays on the project post page
client: "Public Laboratory for Open Technology and Science" # shows on the project card
brief_description: "Tools for Assessing and Managing Human Impacts on Maine’s Harbors" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "kevinFrech"

# If no articles or blogs, DELETE these lines
articles: # bullet list of articles and press
  - title: "Summer of Maps presentation by Kevin Frech August 17, 2015 for Friends of Penobscot Bay & Public Laboratory, Penobscot Bay Blog, August 18th, 2015"
    link: "https://penobscotbay.blogspot.com/2015/08/summer-of-maps-presentation-by-kevin.html"

blogs: # bullet list of blogs
  - title: "How to Create An Atlas-Style Map with Many Layers in ArcGIS"
    link: "https://www.azavea.com/blog/2015/09/04/how-to-create-an-atlas-style-map-with-many-layers-in-arcgis/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.ext of the images below
featured_image: "2015-public-laboratory-for-open-technology-and-science-featured.jpg"

images:
 - "2015-public-laboratory-for-open-technology-and-science-01.jpg"
 - "2015-public-laboratory-for-open-technology-and-science-02.png"
 - "2015-public-laboratory-for-open-technology-and-science-03.png"
 - "2015-public-laboratory-for-open-technology-and-science-04.jpg"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
The [Public Laboratory for Open Technology and Science](https://publiclab.org/), or Public Labs, provides support for local level environmental activists and scientists who wish to study their surroundings through low-cost DIY methods of data collection. For this project, Public Labs teamed up with an environmental group in Maine called  Friends of Penobscot Bay. This group was interested in measuring the growth of residential, commercial, and industrial activities over the past twenty years to identify what kinds of impacts it has had on the deforestation and bay wildlife. To find these measurements, this project made extensive use of the National Land Cover Database which tracks different kinds of land cover for the entire United States such as developed land, forests, wetlands etc.

Using the land cover datasets from 1992 and 2011, Kevin was able to extract forest values and find the difference in forest between the two time periods to find exactly where deforestation has occurred. This deforestation data was then overlaid on the current land cover to identify what type of land cover the forests have transitioned into. Kevin found that Penobscot Bay has lost nearly a quarter of its forest in the past twenty years and has seen an 85% increase in developed land while the population has only risen by 2%. Kevin also created a [large scale atlas](https://s3.amazonaws.com/s3.azavea.com/images/atlas/PBay_RefMapLandCover.jpg) of the area.
