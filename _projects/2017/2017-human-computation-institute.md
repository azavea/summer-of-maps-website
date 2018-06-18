---
published: true # change to true once ready to post
year: "2017"
featured: true

title: "Human Computation Institute" # Displays on the project post page
client: "Human Computation Institute" # shows on the project card
brief_description: "Crowdsourced mapping to support sustainable development in rural Tanzania" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: jiantingZhao

# No articles related to this project

blogs: # bullet list of blogs
  - title: "How to Calculate Location Accessibility with AccessMod 5"
    link: "https://www.azavea.com/blog/2017/08/02/how-to-calculate-location-accessibility-with-accessmod-5/"

featured_image: "2017-human-computation-institute-featured.png"

images:
  - "2017-human-computation-institute-01.png"
  - "2017-human-computation-institute-02.png"
  - "2017-human-computation-institute-03.png"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
[Human Computation Institute](http://humancomputation.org/) (HCI) is a non-profit innovation center that advances the science of scalable crowd-power to tackle societal problems. HCI collaborated with [Tanzania Development Trust](http://www.tanzdevtrust.org/) (TDT), a charity that helps provide improved livelihoods in Tanzania, to work on a project called [Crowd2Map](http://humancomputation.org/?p=408). The Crowd2Map project aims to reduce female genital mutilation (FGM) through mapping with local and remote volunteers. This Summer of Maps project worked with the data collected through Crowd2Map to analyze FGM data, factors influencing FGM, and accessibility to healthcare and education in Tanzania’s Mara region.

Jianting conducted accessibility analyses using an open source tool developed by the World Health Organization called [AccessMod 5](https://github.com/fxi/AccessMod_shiny). She utilized open date from the Tanzania government, data on schools, and crowdsourced data from Crowd2Map to measure access to primary schools, secondary schools, and healthcare facilities. Jianting used a technique called dasymetric mapping to create a more accurate estimation of population density. Combining this population density with the accessibility analysis allowed Jianting to pinpoint areas of high population and low access. Her analysis revealed an area along the Tanzania-Kenya border that has low access to all facilities but a high population.

Influential factors that may correlate with prevalence of FGM were analyzed through a statistical model called linear regression. The model indicated that accessibility to healthcare and belonging to the Waisenye clan are the most influential factors explaining how many girls were cut versus refused in any given village for which data was collected. This model serves as a prototype for future models which can incorporate more FGM data as it becomes available.
