---
published: true # change to true once ready to post
year: "2019"
completed: false # filename of project post without file type extension

title: "The Nature Conservancy in New York" # client name
excerpt: "Characterizing Potential and Need for Green Roofs across New York City" # project title, shows on project list page
client_website: "https://www.nature.org/en-us/about-us/where-we-work/united-states/new-york/?vu=r.v_ny"
category: "environment" #see list at `./_data/categories.yml`

seo_description: "" # goes in project meta description

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

## Spatial Analysis Project:
Green roofs are vegetated rooftops that can provide myriad benefits including absorption of stormwater, increase in energy efficiency of buildings, and reduction of the urban heat island effect, among others. At The Nature Conservancy (TNC), we recently developed a robust characterization of green roofs in NYC [(https://zenodo.org/record/1469674)](https://zenodo.org/record/1469674). Effective planning for future green roofs should be informed by an understanding of realistic potential for them (i.e., where are buildings generally suitable for green roofs) and need (e.g., where are benefits of green roofs most needed). We propose a Summer of Maps intern use available data to a) identify buildings that are likely to support a green roof based on existing guidelines, and b) evaluate data at the scales of Census Tracts and Community Districts to prioritize areas in greatest need of green roofs based on metrics related to social vulnerability, urban heat stress, and stormwater absorption needs.

#### Data available:
Various datasets are available that will support this work as follows:

General Dataset
- NYC green roof data layer, based on 2016 orthoimagery.

Data for Identification of Buildings with Potential to Support Green Roofs (based on Flat Roofs and Year Built):
- 3-D building data for NYC
- Digital Surface Model for NYC (1’ resolution, based on 2017 LiDAR data)
- Parcel Data for NYC

Spatial Prioritization Data:
- NYC Heat Vulnerability Index (based on 2014 data from NYC Dept. of Health & Mental Hygiene; available at NYC Community Board and potentially Census Tract scales)
- US Census-Data (American Community Survey-derived data on Social Vulnerability; available at Census Tract scale and similar data summarized for Community Districts)
- Estimates of Sewershed Boundaries and Priority Sewersheds for NYC.
- Open Space data such as parks and vegetated areas.

#### Maps and Reports that will be created:
A key product we anticipate being developed from this work is a list of buildings that are potentially suitable for green roofs based on existing guidelines [described in this report](http://urbandesignlab.columbia.edu/files/2015/04/4_urban_agriculture_nyc.pdf). We would also expect maps and reports to be produced that convey which areas (Census Tracts and Community Districts) should be prioritized for new green roof installations. Such products would incorporate information about existing green roofs and buildings identified as potentially suitable for green roofs, as well as data related to vulnerability of communities (based on heat vulnerability and social vulnerability metrics), stormwater management needs, and existing open space.

In addition to these products, we would expect explanations of how analyses were done, and if possible, reproducible scripts, such that analyses can be easily updated as new data become available.

#### How the maps and reports will be used:
Spatial prioritization of areas to target for new green roofs can help us inform effective plans and policies in NYC to maintain and increase greenspace, particularly in geographies of greatest need. Though some existing datasets and analyses inform this work already, we lack rigorous understanding of where there is potential for new green roofs, which is critical to ensuring targets are achievable. Results of the proposed work can be shared directly with planners and decision-makers to help convey the challenges and opportunities present in the areas they represent.

Furthermore, data on buildings with potential to support green roofs can be overlaid with data on land ownership to inform strategic outreach and coordination with landowners. For example, if individual institutions or companies own multiple buildings identified as suitable for green roofs, particularly in areas with greatest need, we can target outreach to these property owners to maximize our impact.
