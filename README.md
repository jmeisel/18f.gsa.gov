## 18F's Homepage

This repository contains 18F's website, https://18f.gsa.gov.

**Writing a blog post for 18F? You must read our [blog publishing guide](_posts/blogging.md).**

### Deployment and workflow

* The `staging` branch is **automatically deployed** to our [staging site](https://staging.18f.us).
* The `production` branch is **automatically deployed** to our [production site](https://18f.gsa.gov).

**All development and pull requests should be done against the `staging` branch.**

Deployments to production will be done by site admins, using PRs from `staging` to `production`.

### Adding yourself to the site

If you're a new teammate, add yourself to the website by:

1. Either fork the repository, or make a new branch inside the repo if you have write permissions.
2. Add your name to [`_data/team.yml`](_data/team.yml). Your `name` should be an all-lower-case handle, and **must be unique** among the team. Your `full_name` should be how you want your name to be displayed beneath your picture, and on your blog post bylines. Finally, make a separate entry for `first_name` and `last_name`. We use these last two fields to sort the pictures on the home page.
3. Add a 250x250 JPG of yourself to [`assets/images/team`](assets/images/team). The filename must be your unique team handle, e.g. `eric.jpg`.
4. (Optional) Verify that your photo and name looks right by [running the site locally](#developing-the-site).
5. Submit a pull request from your fork or branch to this repository's `staging` branch.
6. When your PR is merged, your face and name should appear automatically on [our staging site](https://staging.18f.us).

A site admin will take care of deploying you to the [live site](https://18f.gsa.gov). Feel free to poke them if they don't get around to it in a timely fashion!

### Publishing a blog post

For a guide to how 18F manages blogging, and technical guidelines for getting your blog post into the site, see the **[18F Blogging Guide](_posts/blogging.md)**.

### Developing the site

This is a [Jekyll](http://jekyllrb.com) website. Install Jekyll through Rubygems (you may need `sudo`), Bourbon, and Jekyll Sitemap:

```bash
script/bootstrap
```

You will also need **Python 2.7** installed and active, because syntax highlighting depends on [Pygments](http://pygments.org/). A `.python-version` file is included in this repository for those using [`pyenv`](https://github.com/yyuu/pyenv).

Sadly, [for the time being](https://github.com/jekyll/jekyll/issues/2327#issuecomment-55337023) you will also need **Node** to be installed, because Jekyll 2 couples a CoffeeScript runtime. This will eventually be removed.

So yes: this project requires Ruby, Python, and Node (for now). Aren't static site generators the simplest?

Launch with Jekyll:

```bash
script/server
```

The site will be visible at `http://localhost:4000`.

Before submitting a pull request, please ensure `script/cibuild` runs and exits cleanly.

### Deploying the site

You don't need to worry about deployment stuff for normal development -- any pushes to `staging` and `production` branches will auto-deploy.

But to dig into our deployment setup and code, visit [`deploy/`](deploy) for more details.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
