---
published: true # change to true once ready to post
year: '2014'

title: "National Priorities Project" # project title or client name
excerpt: "Analysis of Federal Government Expenditure Data to Engage Citizens" # shows on project list page
client_website: "http://www.nationalpriorities.org"
category: "Elections & Civil Rights" #see list at `./_data/categories.yml`

seo_description: "" # goes in project meta description
# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

## Spatial Analysis Project:
The U.S. Federal Budget impacts everyone, yet few people understand how federal dollars are spent, especially at a state and local level. While bitter battles are being waged over taxes, deficit, and federal spending, there is little transparency about how federal dollars actually flow from taxpayers to the federal government and back into states. The government publishes limited state-level spending information (USASpending.gov), but the online interface is difficult to use and is clearly not designed with the average American in mind.

National Priorities Project’s Federal Priorities Database converts the available spending data to a format that is more accessible to budget novices. Currently, the data we scrub is displayed as state-level (and even county-level where available) heat maps showing annual federal spending on over 25 programs, from Head Start to Medicaid to Social Security Benefits. For user context, the site also maps over 30 social indicators, like poverty, unemployment, health insurance coverage, and energy consumption. Unfortunately, our current implementation doesn’t make the data as visually compelling and illustrative as it could be. We don’t have the in-house GIS expertise to make these maps more useful to our national audience.
#### Data available:
We have scrubbed grants data from USASpending.gov and aggregated it by year, program, and state (sometimes county where applicable). The states and counties are identified by FIPS code. A complete list:

Adult Education, Child and Adult Care Food Program, Children's Health Insurance Program (CHIP), College Work Study Program, Community Development Block Grant, Federal Aid to Individuals, Food Stamps, Head Start, Low-Income Home Energy Assistance Program (LIHEAP), Medicaid, Medicare Part A-Hospital Insurance, Medicare Part B-Supplementary Medical Insurance, Nuclear Energy Research and Development, Pell Grant Program, Public and Indian Housing, Rehabilitation Services-Basic Support, Renewable Energy Research and Development, School Lunch Program, Section 8 Housing Choice Vouchers, Social Security Disability Insurance, Social Security Retirement Insurance, Social Security Survivors Insurance, Special Education Grants, Supplemental Educational Opportunity Grants, Temporary Assistance to Needy Families (TANF), Title I Grants, WIC

In addition, we have indicator data pulled from various government agencies. These states (and counties where applicable) are identified by FIPS code:
Average Teacher Salary, Children in Poverty, Defense Dept Personnel, Electric Emissions (All Sources, Coal, Natural Gas, and Petroleum), Energy Consumption by Source, Energy Consumption

Per Person, Families in Poverty, Federal Tax Collection, Food Insecurity, Food Stamps Monthly Benefits Per Person, Food Stamps Participation by Person, Head Start Enrollment, Health Insurance Coverage, Health Insurance Coverage By Age, High School Dropouts, Housing Owners and Renters, Housing Units, Labor Force Participation, Median Household Income, Medicaid Persons Served, Medicare Enrollment, People in Poverty, Population by Gender, Pupil/Teacher Ratio, School Lunch Participation, State Children's Health Insurance Program Enrollment, State GDP, TANF (Cash Assistance) Participation, Total Students, Underemployment, Unemployment, WIC Monthly Benefits Per Person, WIC Participation

All of these are available via an internal API (the Federal Priorities Database website is built on this) but are also available in .csv format.

#### Maps and Reports that will be created:
The original intent of our database maps was to look at spending and indicators together to tell the human impact story of the federal budget (for example, food stamp benefits spending and unemployment rates on the same map would tell a compelling story); however, we have not yet been able to implement this functionality. Also, we’d love to find a way to visually compare states in relation to each other.

Any of these improvements to the Federal Priorities Database maps will help us provide important data to our partner organizations across the country in their advocacy. It will also help our audience of citizen constituents better understand how their tax dollars are being used nationally and within their own state.

#### How the maps and reports will be used:
In addition to showcasing the maps on our website, NPP will use them to highlight data stories about the federal budget through our blog and our social media channels, where we know from experience that people love maps. With added mapping capacity through any of the above projects, we would see significant improvement in our ability to tell the story of federal spending – and what it means for Americans nation-wide.

Our maps will be available to hundreds of partner organizations across the country and to the media. We frequently receive requests from journalists for innovative illustrations/maps that break complex issues like the federal budget into bite-sized pieces for a media audience. Additionally, our maps can be embedded in any website, allowing them to be easily distributed across the web by bloggers or other news aggregators. Similarly, our partner organizations working on a multitude of advocacy issues will use our maps to communicate to their own constituents about relevant federal spending choices.
