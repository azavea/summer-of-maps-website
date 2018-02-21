---
published: true # change to true once ready to post
year: "2016"

title: "Bicycle Coalition of Greater Philadelphia" # project title inside quotes
client: "Bicycle Coalition of Greater Philadelphia" # shows on project list page
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "carlosBonilla"

# If no articles or blogs, DELETE these lines
articles: # bullet list of articles and press
  - title: "Results of Azavea's Summer of Maps Work with Bicycle Coalition"
    link: "http://bicyclecoalition.org/azavea-summer-maps/#sthash.OoCPWYBi.dpbs"
  - title: "Map reveals which Philly neighborhoods are most prone to severe crashes"
    link: "http://philly.curbed.com/2016/8/26/12646262/severe-crashes-philadelphia-map-by-neighborhood"
  - title: "Explore these data visualizations from Azavea’s ‘Summer of Maps’ program"
    link: "http://technical.ly/philly/2016/08/30/data-visualization-azavea-summer-of-maps-fellowship/"
  - title: "What is the Impact of Summer of Maps?"
    link: "https://www.azavea.com/blog/2016/09/01/what-is-the-impact-of-summer-of-maps/"
  - title: "This Is What Happens When GIS Students And Non-Profits Team Up"
    link: "https://www.visualnews.com/2016/09/15/summer-maps-data-visualization/"

blogs: # bullet list of blogs
  - title: "Geography of Crashes in Philadelphia"
    link: "https://www.azavea.com/blog/2016/09/19/geography-crashes-philadelphia/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.ext of the images below
featured_image: "2016-fairhill-featured.png"

images:
 - "BCGP_Webmap-1024x820.png"
 - "IPD_tract-1024x873.png"
 - "Fairhill-1024x866.png"
 - "nohighways_crashdensity-791x1024.png"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
The Bicycle Coalition is a non-profit advocacy group dedicated to improving road safety in the Greater Philadelphia region. It has been actively involved with Vision Zero, a movement that seeks to reduce traffic related fatalities to zero. One core component of the Vision Zero movement is ensuring that the street system is safe for all communities and all modes of transportation.

The aim of this project was to see if severe crashes (i.e., involving at least one major injury or fatality) disproportionately affect certain populations. To do so, Carlos initially conducted an Ordinary Least Squares regression on crash data from 2010 and 2015 and low-income and minority groups.

Carlos then used kernel smoothing to analyze crash density and severe crashes. The analysis revealed a cluster of tracts in North Philadelphia that had the highest overall crash density and higher than average values for poverty and carless households. The majority of crashes occurred along Roosevelt Boulevard, a major traffic artery that runs through North and Northeast Philadelphia. Additionally, one neighborhood known as Fairhill had over half of its crashes involving pedestrians, despite being situated some distance away from the Boulevard.

Carlos developed an interactive web map that illustrates all severe crashes, overlaid with census data. It will be used to inform Bicycle Coalition programming and its Vision Zero efforts that promote safer streets for all.