---
published: true # change to true once ready to post
year: "2016"

title: "Bicycle Coalition of Greater Philadelphia" # Displays on the project post page
client: "Bicycle Coalition of Greater Philadelphia" # shows on the project card
brief_description: "An Analysis of Fatal Road Crashes and Equity" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "carlosBonilla"

# If no articles or blogs, DELETE these lines
articles: # bullet list of articles and press
  - title: "Results of Azavea's Summer of Maps Work with Bicycle Coalition, Bicycle Coalition Blog, August 23, 2016"
    link: "http://bicyclecoalition.org/azavea-summer-maps/#sthash.OoCPWYBi.dpbs"
  - title: "Map reveals which Philly neighborhoods are most prone to severe crashes, Curbed Philly, August 26, 2016"
    link: "http://philly.curbed.com/2016/8/26/12646262/severe-crashes-philadelphia-map-by-neighborhood"
  - title: "Explore these data visualizations from Azavea’s ‘Summer of Maps’ program, Technical.ly Philly, August 30, 2016"
    link: "http://technical.ly/philly/2016/08/30/data-visualization-azavea-summer-of-maps-fellowship/"
  - title: "What is the Impact of Summer of Maps?, Azavea Blog, September 1, 2016"
    link: "https://www.azavea.com/blog/2016/09/01/what-is-the-impact-of-summer-of-maps/"
  - title: "This Is What Happens When GIS Students And Non-Profits Team Up, Visual News, September 15, 2016"
    link: "https://www.visualnews.com/2016/09/15/summer-maps-data-visualization/"

blogs: # bullet list of blogs
  - title: "Geography of Crashes in Philadelphia"
    link: "https://www.azavea.com/blog/2016/09/19/geography-crashes-philadelphia/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.ext of the images below
featured_image: "2016-bicycle-coalition-of-greater-philadelphia-featured.png"

images:
 - "2016-bicycle-coalition-of-greater-philadelphia-01.png"
 - "2016-bicycle-coalition-of-greater-philadelphia-02.png"
 - "2016-bicycle-coalition-of-greater-philadelphia-03.png"
 - "2016-bicycle-coalition-of-greater-philadelphia-04.png"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
The Bicycle Coalition is a non-profit advocacy group dedicated to improving road safety in the Greater Philadelphia region. It has been actively involved with Vision Zero, a movement that seeks to reduce traffic related fatalities to zero. One core component of the Vision Zero movement is ensuring that the street system is safe for all communities and all modes of transportation.

The aim of this project was to see if severe crashes (i.e., involving at least one major injury or fatality) disproportionately affect certain populations. To do so, Carlos initially conducted an Ordinary Least Squares regression on crash data from 2010 and 2015 and low-income and minority groups.

Carlos then used kernel smoothing to analyze crash density and severe crashes. The analysis revealed a cluster of tracts in North Philadelphia that had the highest overall crash density and higher than average values for poverty and carless households. The majority of crashes occurred along Roosevelt Boulevard, a major traffic artery that runs through North and Northeast Philadelphia. Additionally, one neighborhood known as Fairhill had over half of its crashes involving pedestrians, despite being situated some distance away from the Boulevard.

Carlos developed an interactive web map that illustrates all severe crashes, overlaid with census data. It will be used to inform Bicycle Coalition programming and its Vision Zero efforts that promote safer streets for all.
