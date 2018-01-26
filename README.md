# summer-of-maps-website

The landing page for Azavea Summer of Maps website.

## Requirements

- Vagrant 2.0+
- VirtualBox 5.1+
- Ansible 2.4+

## Getting Started

From your workstation, execute the following command to bring up a Vagrant virtual machine with all of the necessary dependencies installed:

```bash
$ ./scripts/setup
```

Next, login to the Vagrant virtual machine and launch the Jekyll services:

```bash
$ vagrant ssh
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

## URLs

The Vagrant configuration creates a host-only private network between the virtual machine host and the Vagrant virtual machine. In order to access the content served by Jekyll, and the LiveReload endpoint, use the following links:

| Service    | URL                                                    |
|------------|--------------------------------------------------------|
| Jekyll     | [`http://192.168.50.4:4000`](http://192.168.50.4:4000) |
