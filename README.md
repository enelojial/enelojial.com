# Jolene Lai Art

This is a Jekyll site published from the `gh-pages` branch with GitHub Pages. The `github-pages` gem and its dependencies are pinned in `Gemfile.lock` so the local preview uses the same Jekyll and plugin versions as the project.

## Preview locally

The site uses the latest published GitHub Pages gem (232) with Jekyll 3.10.0. Run it in Docker with Ruby 3.0.7 and Bundler 2.4.22. From the repository root, start Docker Desktop and run:

```sh
docker run --rm -p 4000:4000 -v jekyll-bundle:/usr/local/bundle -v "$PWD:/site" -w /site ruby:3.0.7-bullseye sh -lc 'gem install bundler -v 2.4.22 && bundle _2.4.22_ install && bundle _2.4.22_ exec jekyll serve --host 0.0.0.0'
```

Open [http://localhost:4000](http://localhost:4000). Jekyll watches the source files and rebuilds the site as you edit; press `Ctrl+C` in the terminal to stop it. The `jekyll-bundle` Docker volume keeps installed gems between runs. The local site is served at the root path, matching this site's empty `baseurl` setting.

The same preview can run natively with Ruby 3.1.x or earlier by installing the locked gems with Bundler and running `bundle exec jekyll serve`.

If you change the dependencies, update `Gemfile.lock` deliberately and check that the versions remain compatible with GitHub Pages before deploying.
