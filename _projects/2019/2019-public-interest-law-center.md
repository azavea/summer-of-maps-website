---
published: true # change to true once ready to post
year: "2019"
featured: false # set to true to display on /projects page

title: "Public Interest Law Center" # Displays on the project post page
client: "The Public Interest Law Center" # shows on the project card
brief_description: "Mapping and Analyzing Substandard Housing in Philadelphia" # shows on the project card
seo_description: "" # goes in project meta description

# Author/Fellow
# see `/_data/fellows.yml` for a list of fellows
# use the camel case version of the fellow's name
fellow: "fayWalker"

# upload images to `/assets/images/projects/{{year}}/...`
# type only the name.jpg of the images below
featured_image: "2019-public-interest-law-center-featured.jpg"

# If no images, DELETE these lines
images:
  - 2019-public-interest-law-center-01.jpg
  - 2019-public-interest-law-center-02.jpg
---
The Public Interest Law Center uses high-impact legal strategies to advance the civil, social, and economic rights of communities in the Philadelphia region facing discrimination, inequality, and poverty. The Public Interest Law Center set out to identify substandard housing in Philadelphia, in order to target outreach to neighborhoods where low-income Philadelphians are especially suffering from substandard housing, as well as to direct their litigation against large-scale actors—property managers or building owners—that are responsible for substandard housing.

Fay relied on publicly available data from OpenDataPhilly, as well as scraped eviction data. The first challenge in this project was cleaning and wrangling the data into one dataset in order to determine which households experience substandard housing indicators. Fay used hazardous violations, potential illegal rentals, and evictions as key indicators of substandard housing. Together they constitute housing stock that poses health hazards and lack landlord accountability measures for tenants.

Once substandard housing had been identified, tax information was then used to match mailing addresses, and to identify major landlords in Philly. Fay then explored the relationship between substandard housing indicators, LLC ownership, and demographics. Her goal was to determine the landlords responsible for substandard housing and those impacted by it. Fay found that while all communities of color are disproportionately impacted by substandard housing, black communities fare the worst. LLCs are also disproportionately responsible for this substandard housing, particularly housing that is impacted by hazardous violations and potential illegal rentals.

The scripts are available for recycling or replication on [Azavea’s Summer of Maps github](https://github.com/summer-of-maps/2019-public-interest-law-center-phila-housing).