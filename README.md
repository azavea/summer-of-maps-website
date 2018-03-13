

# Azavea Summer of Maps website

 1. [Developing locally](#developing-locally)
 2. [Site Structure](#site-structure)
 3. [Editing the site configuration](#editing-the-site-configuration)
 4. [Editing Pages](#editing-pages)
 5. [Project Shortlists](#project-shortlists)
 6. [Student Projects](#student-projects)
 7. [Data files](#data-files)

## Developing locally
### Requirements

- Vagrant 2.0+
- VirtualBox 5.1+
- Ansible 2.4+

### Getting Started

From your workstation, execute the following command to bring up a Vagrant virtual machine with all of the necessary dependencies installed:

```bash
$ ./scripts/setup
```

Next, login to the Vagrant virtual machine and launch the Jekyll services:

```bash
$ vagrant ssh
vagrant@vagrant-ubuntu-trusty-64:/vagrant$ 
```
```bash
vagrant@vagrant-ubuntu-trusty-64:/vagrant$ ./scripts/server
Recreating vagrant_jekyll_1
Attaching to vagrant_jekyll_1
jekyll_1  | Configuration file: /usr/src/app/_config.yml
jekyll_1  |             Source: /usr/src/app
jekyll_1  |        Destination: /usr/src/app/_site
jekyll_1  |  Incremental build: disabled. Enable with --incremental
jekyll_1  |       Generating...
jekyll_1  |                     done in 0.524 seconds.
jekyll_1  |  Auto-regeneration: enabled for '/usr/src/app'
jekyll_1  | Configuration file: /usr/src/app/_config.yml
jekyll_1  |  LiveReload Server: 192.168.50.4:35729
jekyll_1  |     Server address: http://192.168.50.4:4000/
jekyll_1  |   Server running... press ctrl-c to stop.
jekyll_1  |         LiveReload: Browser connected
```

In order to build Jekyll's static website output, use:

```bash
$ ./scripts/update
```

### URLs

The Vagrant configuration creates a host-only private network between the virtual machine host and the Vagrant virtual machine. In order to access the content served by Jekyll, and the LiveReload endpoint, use the following links:

| Service    | URL                                                    |
|------------|--------------------------------------------------------|
| Jekyll     | [`http://192.168.50.4:4000`](http://192.168.50.4:4000) |

## Site Structure

### Data: `./_data/`
Within the data folder are YAML files, holding structured data used by other components of the website.
- `categories.yml` These are the categories used in project-shortlists
- `dates.yml` This file should be updated every year. It contains the timeline breakdown of the session.
- `fellows.yml` Fellows/students from all time are listed in this file
- `mentors.yml` Mentors for the current session are listed in this file.

### Includes `./_includes/`
Includes are `html` partials used in creating the structure of the pages. These rarely are changed.. There are exceptions to the rule, but copy mostly is inherited via a page's front matter.

The homepage, projects and project archives have  includes unique to their structure, thus, have folders within.

### Layouts `./_layouts/`
Layouts are the skeleton of every page. These rarely change.

### Project shortlists `./_project-shortlist/`
See [Project Shortlist](#project-shortlists)

### Projects `./_projects/`
See [Student Projects](#student-projects)

### Sass `./_sass/`
We use `.scss` for styling.

### Site `./_site/`
The compiled jekyll site which is served on Github Pages. Do not edit files within.

### Assets `./assets/
Contains the favicon, svg icons, images and javascript. The most often accessed files here will be images. Inside you can find fellow and mentor photos, office photos and project images.

### CSS `./css/
Should contain only one file: `main.scss` which includes every file from the above sass directory.

## Editing the site configuration

### Jekyll Config

The `_config.yml` file contains a few very important site settings. This is a [YAML](https://github.com/Animosity/CraftIRC/wiki/Complete-idiot%27s-introduction-to-yaml) file. YAML keeps data stored as keys and values associated to those keys. For example:

```yaml
key: value
title: Azavea Summer of Maps
```

When you make changes to this file, you must rebuild the entire website for the changes to take effect. If you're working locally, this means you will want to restart `./scripts/server`. The most common settings to change are the following:

- SEO title and description and email
- Fellowship settings
- Application links

#### SEO Title, SEO Description and Email
The first section of the config controls the default SEO values used across the site (`title` and `description`).

Additionally, there is an option to set the email address for Summer of Maps. *This is currently used*

#### Fellowship settings
The fellowship settings are incredibly important for the functionality of the website. These options will dynamically determine what copy and layouts are used on every page. You can expect to see the following:

```yaml
fellowship:
  year: 2018
  timeframe: Summer 2018
  in_session: true
  stage: 
    nonprofit_signup: false
    nonprofit_review: false
    student_signup: false
    student_review: true
    fellowship_ongoing: false
```

- The `fellowship.year` key-value pair is used to define the current/upcoming session year. This will affect the project-shortlist displayed on the [projects](https://www.summerofmaps.com/projects/) page
- `fellowship.timeframe` is used in site copy. This makes quickly changing the general timeframe used in the copy a breeze.
- `fellowship.in_session` determines if we are currently in session *(are we accepting applications or have an ongoing fellowship?)*. If set to `true`, you must set one *and only one* `fellowship.stage.CHILD` to `true`
- `fellowship.stage` will determine what part of the process we are in if we are in session.
  - Note: do not add a value paring to the `stage` key itself.
  - Only one stage child should be set to `true` at a time. All others should be `false`.
  - If `in_session` is set to `false`, this will take precedence over all `stage` options. So no matter if a stage is set to `true` you will only see copy for when Summer of Maps is out of session.
- `in_session` and `stage.CHILD` only accept `true` or `false` as their value pairing.

#### Application links
Application link values should the the full url to the respective hiring application. These values will typically be used to create buttons throughout the site.

- `nonprofit_app_link` is used on the site when `fellowship.stage.nonprofit_signup` is set to `true`
- `student_app_link` is used on the site when `fellowship.stage.student_signup` is set to `true`


## Editing Pages
Main pages of the website can be located at the root directory of the repo. Every page begins with `page-` and ends with a descriptive string.

### Jekyll front matter
We take advantage of [front matter](https://jekyllrb.com/docs/frontmatter/) pretty heavily for copy editing. Front matter is defined via two lines of three dashes each with YAML inside.
```yaml
---
front-matter: true
---
```
Each page of our site uses front matter to inject copy into our html code. This makes it so you never have to dig through hundreds of lines of html to find the copy you want to change. In addition to copy we also define page variables such as the layout, permalink and seo overrides. Our front matter is typically laid out to follow the natural structure of our page. From top to bottom, the front-matter and actual computed page should line up.

**tl;dr**: front-matter allows us to use the power of YAML in our html files.

### List of pages
| Page               | permalink                      | file                           s|
|--------------------|--------------------------------|--------------------------------|
| Homepage           | `/`                            | `page-home.html`               |
| About              | `/about/`                      | `page-about.md`                |
| FAQ                | `/faq/`                        | `page-faq.md`                  |
| Contact            | `/contact/`                    | `page-contact.html`            |
| Projects           | `/projects/`                   | `page-projects.html`           |
| Project Archive    | `/projects/all`                | `page-project-all.html`        |
| Shortlist {{year}} | `/projects/shortlist/{{year}}` | `page-shortlist-{{year}}.html` |
| Fellow Guide       | `/fellow-guide/`               | `page-fellow-guide.md`         |
| Non Profit Guide   | `/nonprofit-guide/`            | `page-nonprofit-guide.md`      |
| Thank You          | `/thank-you/`                  | `page-thank-you-guide.html`    |

### Editing pages
- **Homepage**
All edits contained in front matter
- **About**, **FAQ**, **Fellow and nonprofit guide**
Hero copy within front matter. Everything else is outside of the front matter written as markdown
- **Contact** and **Project Shortlists**
Hero copy within front matter.
- **Projects** and **Project archives**
All edits contained in front matter
- **Thank you**
Copy outside of front matter in html

## Project Shortlists
Each year, non profits submit to the Summer of Maps project shortlist. Historically, we have manually created PDF's, but fortunately, Jekyll simplifies this process.

### Starting a new year
- Create a new folder within `./_project-shortlist/` with its name being the year for the shortlist. For example, if collecting shortlists for Summer of Maps 2019, name the folder `2019`.
- Clone one of the `page-shortlist-{{year}}.html` files in the root of the repo and rename it for the current year. In the case of SoM 2019, you would name it `page-shortlist-2019.html` 
  - Replace every instance of the old year within that file to the current year. Do a find a replace to make sure you don't miss one. VERY IMPORTANT!
  - This creates a unique page where we display only shortlists from that year.
- Update `./data/categories.yml` to include any new categories, but **DON'T** remove any. The file is used for all years for all time.
  - If you rename/remove a category, it will rename/remove the category through every year

### Creating a shortlist post
#### Shortlist template:
At the root of `./_project-shortlist/` there is a `_template.md` file containing the template of a shortlist post. You should always reference this file when creating a new post. Shortlist front matter explained:
- `published`: accepts `true` or `false` and determines if the file will be compiled when the site is built.
- `year`: should be the same year as it's parent folder. This is used for filtering.
- `title`: The title of the project. This typically ends up as the client name.
- `excerpt`: one to two lines shown on the shortlist list view. Not visible on individual post page.
- `client_website`: URL of client webpage
- `category`: Should be a valid entry from `./_data/categories.yml` 
- `seo_description`: Overrides the defaut site-wide description.

#### Naming the file:
Naming conventions are important in determining the page slug. Shortlist files should be named: `{{year}}-client-name.md` and should be [kebab-case](http://wiki.c2.com/?KebabCase)

#### Writing the shortlist post
Try to maintain consistency across all shortlist posts. Most posts use `<h2>` and `<h4>` within the body for headings. The first header is typically an `<h2>` while all others are `<h4>`.

## Student Projects
Every year, students should post a writeup of their projects. These write ups are all within `./projects/`

### Starting a new year
Every year Summer of Maps runs, a new folder named after that year should be made so students can post their projects.

### Creating a project post
#### Project template:
At the root of `./_projects/` there is a `_template.md` file containing the template of a project post. You should always reference this file when creating a new post. Project front matter explained:
- `published`: accepts `true` or `false` and determines if the file will be compiled when the site is built.
- `year`: should be the same year as it's parent folder. This is used for filtering.
- `title`: The title of the project. Shows on the project post page
- `client`: The client of the project. Shows on the project list page on the individual project card.
- `seo_description`: Overrides the defaut site-wide description.
- `fellow`: Should be a valid entry from `./_data/fellows.yml`. Check to make sure an entry exists for the fellow.
- `articles` *optional*  List of articles and press for this project.
  - All articles have two pairs of key-values pairings. A `title` and a `link`
- `blogs` *optional*  links to blog posts written about this project by the fellow.
  - All blogs have two pairs of key-values pairings. A `title` and a `link`
- `featured_image`: the name and filetype of the image, which should be placed inside of `./assets/images/projects/{{year}}/...` where {{year}} is the year of the project
  - example: `2017-speak-to-your-health-featured.png`
- `images`: a list of images by name and filetype, which should be placed inside of `./assets/images/projects/{{year}}/...` where {{year}} is the year of the project
  - each new image should be prepended with a single dash. `- image-name.jpg`

#### Naming the file:
Naming conventions are important in determining the page slug. Project files should be named: `{{year}}-client-name.md` and should be [kebab-case](http://wiki.c2.com/?KebabCase)

## Data files
### Categories
The categories for shortlists rarely change year-to-year. It is for this reason, we use a singular file to handle categories for all time. This means by editing any category, you are changing the values for past/current/future years.

- Each entry should start with a single dash
- Each entry should be a unique, lowercase single word
  - If editing an entry, you should make sure to update all projects using that entry as a category. Otherwise, the filtering will break.
- Under each entry is a key-value pairing of `name`: `"Full descript name of category"`

#### Dates
The dates should be updated once per year. They are dynamically rendered in the layout of a few pages. These are purely intended to be informational and will not influence the functionality of the site.

**Each entry should look like the following:**
```yaml
- date: Month DAY, YEAR
  description: Brief statement about this date
- date: December 4, 2017
  description: Organization application opens
  ...
```

### Fellows/student
As new fellows/students are accepted into the program they should be given an entry in `fellows.yml`. This will make creating project posts easier in the future as each project post references a fellow in this file.

**Each entry should look like the following:**
```yaml
sarahGates:
  name: Sarah Gates
  info: 'Master of Science candidate in Geographic Information Science for Development and Environment at Clark University'
  year: 2017
  image: sarahGates.jpg
```
*A note on the `image` key: the image referenced here should be a photo of the fellow and should be uploaded to `./assets/images/fellows/`*

### Mentors
Mentors are typically changing year-to-year, so this file should be updated every year with the current mentors only. This file is used to dynamically display the mentors on the homepage.

**Each entry should look like the following:**
```yaml
- name: Daniel McGlone
  shortName: Daniel
  profile: https://www.azavea.com/about/teammate/daniel-mcglone/
  image: mcglone.jpg
```
*A note on the `image` key: the image referenced here should be a photo of the fellow and should be uploaded to `./assets/images/mentors/`*