---
published: true # change to true once ready to post
year: "2015"

title: "Pennsylvania Horticultural Society" # Displays on the project post page
client: "Pennsylvania Horticultural Society" # shows on the project card
brief_description: "Analyzing Philadelphia Landcare’s Inactive Parcels and the Impact of the Program in the Neighborhoods throughout Philadelphia" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "kevinFrech"

# No articles related to this project

blogs: # bullet list of blogs
  - title: "Tool Tips for CartoDB Torque"
    link: "https://www.azavea.com/blog/2015/09/17/tool-tips-for-cartodb-torque/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.ext of the images below
featured_image: "2015-pennsylvania-horticultural-society-featured.jpg"

images:
 - "2015-pennsylvania-horticultural-society-01.png"
 - "2015-pennsylvania-horticultural-society-02.png"
 - "2015-pennsylvania-horticultural-society-03.png"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
As one of many programs at the [Pennsylvania Horticultural Society](https://phsonline.org/), the Philadelphia LandCare program seeks to clean, green, and maintain vacant lots in disadvantaged neighborhoods as a way to combat blight and encourage developers to build on this land. The goal of this project was to analyze the factors that play into this vacant land becoming developed or finding a new use through a series of regression models and cluster maps. The first step was a regression model built to explain what kind of socioeconomic variables are related to the number of LandCare New Uses in each census tract.

Kevin found that the numbers of RCOs, the amount of LandCare parcels maintained by community groups, and the number of new developments on non-PHS maintained vacant lots all had a positive relationship to the number of LandCare New Uses. Kevin then ran cluster mapping operation using GeoDa software and found these relationship were strongest in Far West, West, and North Philadelphia. These clusters indicate neighborhoods where the LandCare program is effective at encouraging new use of vacant land, but they also indicate that these neighborhoods also have the highest need for more of their vacant land to enter the LandCare inventory.
