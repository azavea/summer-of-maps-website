---
published: true # change to true once ready to post
year: "2016"

title: "Transportation Alternatives" # Displays on the project post page
client: "Transportation Alternatives" # shows on the project card
brief_description: "The Road to Vision Zero: Traffic Crashes and Poverty Level in New York City" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "parkerZiegler"

# If no articles or blogs, DELETE these lines
articles: # bullet list of articles and press
  - title: "Explore these data visualizations from Azavea’s ‘Summer of Maps’ program, Technical.ly Philly, August 30, 2016"
    link: "http://technical.ly/philly/2016/08/30/data-visualization-azavea-summer-of-maps-fellowship/"
  - title: "What is the Impact of Summer of Maps?, Azavea Blog, September 1, 2016"
    link: "https://www.azavea.com/blog/2016/09/01/what-is-the-impact-of-summer-of-maps/"
  - title: "This Is What Happens When GIS Students And Non-Profits Team Up, Visual News, September 15, 2016"
    link: "https://www.visualnews.com/2016/09/15/summer-maps-data-visualization/"

blogs: # bullet list of blogs
  - title: "Building Interactive D3 Dashboards with CARTO Web Maps"
    link: "https://www.azavea.com/blog/2016/09/26/building-interactive-d3-dashboards-with-carto-web-maps/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.ext of the images below
featured_image: "2016-transportation-alternatives-featured.png"

images:
 - "2016-transportation-alternatives-01.png"
 - "2016-transportation-alternatives-02.png"
 - "2016-transportation-alternatives-03.png"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
Transportation Alternatives is a non-profit organization focused on making New York City streets safer for pedestrians, cyclists, and public transit users. The organization is one of the key advocates for the City’s Vision Zero Action Plan, which aims to reduce traffic-based violence through intelligent urban design.

This project sought to explore suspected relationships between traffic crashes and poverty across New York City, and to examine whether poorer communities are more susceptible to traffic violence. Using geocoded crash data from Transportation Alternatives and socioeconomic data from the U.S. Census Bureau’s American Community Survey, Parker developed a regression model, written in the R statistical programming language, to test this hypothesis. The analysis showed that areas of New York with lower median incomes, higher individual and family poverty rates, higher population densities, and denser built environments were associated with a higher concentration of injurious traffic crashes.

To engage the public in exploring connections between traffic crashes and poverty, Parker developed an interactive web application built on CARTO and D3 that integrates geospatial and statistical views of the data. In addition, he authored a 23-page report integrating graphics, maps, and text to present the major findings across each of New York City’s boroughs.

[Use the interactive map](https://summer-of-maps.github.io/2016-TransAlt-TrafficCrashVisualization/) to visualize an analysis of traffic crashes and poverty in New York City.
