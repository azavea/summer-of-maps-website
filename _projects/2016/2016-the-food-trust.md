---
published: true # change to true once ready to post
year: "2016"

title: "The Food Trust" # Displays on the project post page
client: "The Food Trust" # shows on the project card
brief_description: "Defining Context and Presence: Food Access in Philadelphia" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "carlosBonilla"

# If no articles or blogs, DELETE these lines
articles: # bullet list of articles and press
  - title: "Carlos Bonilla, 2016 Summer of Maps Fellow, Temple Department of Geography and Urban Studies, August 24, 2016"
    link: "http://www.cla.temple.edu/gus/carlos-bonilla-2016-summer-of-maps-fellow/"
  - title: "Explore these data visualizations from Azavea’s ‘Summer of Maps’ program, Technical.ly Philly, August 30, 2016"
    link: "http://technical.ly/philly/2016/08/30/data-visualization-azavea-summer-of-maps-fellowship/"
  - title: "What is the Impact of Summer of Maps?, Azavea Blog, September 1, 2016"
    link: "https://www.azavea.com/blog/2016/09/01/what-is-the-impact-of-summer-of-maps/"
  - title: "This Is What Happens When GIS Students And Non-Profits Team Up, Visual News, September 15, 2016"
    link: "https://www.visualnews.com/2016/09/15/summer-maps-data-visualization/"

blogs: # bullet list of blogs
  - title: "Defining Communities with ESRI’s Grouping Analysis Tool"
    link: "https://www.azavea.com/blog/2016/10/12/defining-communities-grouping-analysis-tool/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.ext of the images below
featured_image: "2016-the-food-trust-featured.png"

images:
 - "2016-the-food-trust-01.png"
 - "2016-the-food-trust-02.png"
 - "2016-the-food-trust-03.png"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
The Food Trust is dedicated to improving access to affordable, healthy food. The non-profit offers programming within a network of different sites in various communities. The aim of this project was to identify and create community categories in Philadelphia and develop a Food Trust programming index to help measure program impact and target programming.

Because certain populations are disproportionately affected by lack of food access, it is important to find the right kinds of communities to offer programming. To help address this problem, Carlos used the Grouping Analysis tool, which uses K-means clustering to find natural patterns within data. In this case, Census Block Group data of populations potentially vulnerable to food access was used to cluster geographies into specific groups. This technique was able to reliably identify up to 4 different communities in the city that share certain characteristics.

To score for program intensity, data was consolidated from many different sources and standardized. Each location was scored by program on binary and continuous scales. All layers created for this project were uploaded into an interactive web map. This map illustrates different communities throughout the city and program outreach throughout The Food Trust network. It will help the non-profit analyze and target programming in Philadelphia.
