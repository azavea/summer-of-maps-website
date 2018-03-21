---
published: true # change to true once ready to post
year: "2015"

title: "The Greening of Detroit" # Displays on the project post page
client: "The Greening of Detroit" # shows on the project card
brief_description: "Analysis of Total Tree Canopy in the City of Detroit" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "nathanielHenry"

# If no articles or blogs, DELETE these lines
articles: # bullet list of articles and press
  - title: "OSU Represented in the Summer of Maps, The Ohio State University Research Commons, July 7, 2015"
    link: "https://library.osu.edu/researchcommons/2015/07/07/3894/"

blogs: # bullet list of blogs
  - title: "Creating a Tree Planting Prioritization Model in QGIS"
    link: "http://www.azavea.com/blogs/atlas/2015/09/creating-a-tree-planting-prioritization-model-in-qgis/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.ext of the images below
featured_image: "2015-the-greening-of-detroit-featured.jpg"

images:
 - "2015-the-greening-of-detroit-01.jpg"
 - "2015-the-greening-of-detroit-02.png"
 - "2015-the-greening-of-detroit-03.png"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
The [Greening of Detroit](http://www.greeningofdetroit.com/) is an organization that works to provide tree-planting services, green spaces and environmental education to the citizens of Detroit and Southeast Michigan. Presently, Greening works with neighborhood and community groups to organize plantings — however, they were looking for a more data-driven approach to decision-making regarding where to plant trees.

To do so, Nat used a variety of environmental, demographic, economic and health datasets to describe need for tree planting across the city. By combining these factors into one composite map, Greening can identify specific neighborhoods of the city they should target for tree-planting.

In addition, Nat created a tree-planting prioritization model. This model, built in QGIS, determines which parts of the city would benefit the most from street-tree planting. It does so by considering both an area’s need, based on the composite map created previously, and the density of trees on its streets. Going forward, the Greening of Detroit can now use a data-driven approach to prioritize tree-planting and update the model Nat created when new datasets of trees are available, or when different need factors should be analyzed.
