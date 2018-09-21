---
published: true # change to true once ready to post
year: "2018"

title: "The Committee of Seventy" # Displays on the project post page
client: "The Committee of Seventy" # shows on the project card
brief_description: "Exploring Philadelphia campaign finance data to understand impact of fundraising on elections" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "gabrielleBeaudry"

# No articles related to this project

blogs: # bullet list of blogs
  - title: "Cleaning Philadelphia Campaign Finance Data with R"
    link: "https://www.azavea.com/blog/2018/09/20/cleaning-campaign-finance-data-r/"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.jpg of the images below
featured_image: "2018-committee-of-seventy-featured.jpg"

images:
    - "2018-committee-of-seventy-01.jpg"
    - "2018-committee-of-seventy-02.jpg"
    - "2018-committee-of-seventy-03.jpg"
    - "2018-committee-of-seventy-04.jpg"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
[Committee of Seventy](https://www.seventy.org/) is an independent and nonpartisan advocate for better government in Philadelphia. This summer, they sought to explore how campaign finance and ward endorsements are influencing election results and voter turnout in Philadelphia local elections.

The scope of the analysis was the 2017 District Attorney Democratic primary, due to the wealth of data on this election. While campaign finance data is publicly available, it’s difficult to use as-is, so Gabrielle wrote R scripts that clean and aggregate the data based on the ward and/or candidate involved in each campaign finance record. The scripts are available for recycling or replication on [Azavea’s Summer of Maps github](https://github.com/summer-of-maps/2018-CommitteeofSeventy-CampaignFinanceData).

Once cleaned, the campaign finance data lent itself to analysis in several directions. In terms of filing discrepancies, Gabrielle found that the majority of wards under-reported money they received from candidates. In terms of ward endorsements, we can now trace which wards received money from the candidates they ended up endorsing. Gabrielle combined the processed campaign finance data, with ward endorsements, election results, voter turnout, and demographic data from the census for use in analyses and maps.

Gabrielle ran regressions that included various demographic variables such as race, employment, age, gender, income and education, as well as campaign finance data as explanatory variables for predicting voter turnout. The results show that education and income are the most significant predictors of voter turnout. Additionally, Gabrielle ran regressions with variables that might influence election results, such as money candidates give to wards, ward endorsements, demographic variables, and voter turnout. The results of the analysis indicate that candidate spending on wards is positively correlated with election results (percent of the vote that candidate received in that ward), and more significant for some candidates than others.
