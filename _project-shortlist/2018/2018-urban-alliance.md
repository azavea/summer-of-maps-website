---
published: true # change to true once ready to post
year: "2018"

title: "The Urban Alliance" # project title or client name
excerpt: "Network Analysis to Support Urban Alliance's High School Internship Program" # shows on project list page
client_website: "https://theurbanalliance.org/ "
category: "education" #see list at `./_data/categories.yml`

seo_description: "" # goes in project meta description
# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

## Spatial Analysis Project:
The High School Internship Program (HSIP) at Urban Alliance (UA) provides paid internships to high school seniors in DC, Northern Virginia, Baltimore, and Chicago. Pre-work, the first stage of HSIP, is a professional development training course hosted at a local high school, college, or community center. After pre-work, interns are placed at jobsites for their internship experience. During both stages, some interns have low attendance rates or drop out of the program. One theory is that the geographical distances among school, the jobsite, and home may contribute to attendance issues from some interns.

#### Data available:
UA has location data for the past three years in Salesforce, which will be unidentified and shared with the Summer of Maps Fellow. The intern information includes the address of their school, home address, and assigned jobsite address. In addition, there is data on their pre-work attendance, jobsite attendance, and if they dropped out of the program. Finally, the pre-work locations addresses are available for each region.

#### Maps and Reports that will be created:
1.	The first analysis would use GIS and spatial statistical analysis to determine if there is a correlation between (1) travel time and intern attendance and (2) travel time and drop outs during both the pre-work and internship phases of the program.

2.	If travel time and attendance are related, the second round of analysis would use location-allocation network analysis to determine the best pre-work locations in each region. Typically, there is only one pre-work location in each city, but this analysis could reveal that if a second pre-work location was added, then it would then significantly reduce travel time for many interns.

3.	The final phase of the project would be for the Summer of Maps Fellow to develop a protocol for ranking jobsite placements based on the total travel time of the interns from school to the jobsite and then home.

#### How the maps and reports will be used:
The report and corresponding maps relating travel time and attendance will be used by UA to determine if travel time plays a role in attendance. UA believes there are many factors that may led to low attendance rates or dropping out of the program, but we have never delved deeply into travel time. The first step would be to identify a travel time threshold – over which interns are significantly more likely to have poor attendance or drop out of the program. If that is true, then the second phase would help identify pre-work locations to reduce, as much as possible, the travel time for most interns. The final phase would allow UA to continue using GIS and network analysis for jobsite placement of future interns. The travel time ranking of jobsite placements would be used in addition to other factors for determining the best placement for each intern.
