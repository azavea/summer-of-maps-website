---
published: true # change to true once ready to post
year: "2018"
featured: true

title: "National Aquarium" # Displays on the project post page
client: "National Aquarium" # shows on the project card
brief_description: "Using geostatistical regression and machine learning models to predict marine debris" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "xiaoWu"

# No articles related to this project

#blogs: # bullet list of blogs
#  - title: ""
#    link: ""

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.jpg of the images below
featured_image: "2018-national-aquarium-featured.jpg"

images:
    - "2018-national-aquarium-01.jpg"
    - "2018-national-aquarium-02.jpg"
    - "2018-national-aquarium-03.jpg"
    - "2018-national-aquarium-04.jpg"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
The [National Aquarium](https://www.aqua.org/) is the state coordinator for the [Ocean Conservancy](https://oceanconservancy.org/)’s [International Coastal Cleanup (ICC)](https://oceanconservancy.org/trash-free-seas/international-coastal-cleanup/) events in Maryland. The ICC program engages volunteers to do marine debris cleanup events around the world and record the items they collect along with the location of the cleanup. These data are published in the annual Ocean Trash Index, an item-by-item, location-by-location accounting of marine debris picked up by volunteers. The major task of this project is to use this dataset to predict the possible high-risk marine debris locations in the mid-Atlantic region to better inform and target future reduction efforts.

The cleanup records do not represent an unbiased dataset because they only record information where people have done cleanups. No information about where there isn’t debris is available. This means the dataset is biased towards urban development and population, therefore finding the best predictive modeling approach is the major difficulty of this project. Xiao performed [data cleaning](https://en.wikipedia.org/wiki/Data_cleansing), [feature engineering](https://en.wikipedia.org/wiki/Feature_engineering), [exploratory analysis](https://en.wikipedia.org/wiki/Exploratory_data_analysis) and multiple modeling approaches in predicting the high-risk marine debris locations. In the modeling approaches, she tried multiple machine learning approaches including [decision tree](https://en.wikipedia.org/wiki/Decision_tree), [random forest](https://en.wikipedia.org/wiki/Random_forest), [gradient boosting](https://en.wikipedia.org/wiki/Gradient_boosting), [extreme gradient boosting](https://cran.r-project.org/web/packages/xgboost/vignettes/xgboost.pdf) and [geostatistical analysis](http://desktop.arcgis.com/en/arcmap/latest/extensions/geostatistical-analyst/understanding-geostatistical-analysis.htm), including [Kriging interpolation](https://en.wikipedia.org/wiki/Kriging). As the final result of this project, she aggregated the geostatistical regression result, Kriging, to the county level for the whole Mid-Atlantic region and created a map of the high-risk areas for marine debris to better inform future cleaning efforts.
