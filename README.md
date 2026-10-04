# Jolene Lai Art

This is a Jekyll site published from the `gh-pages` branch with GitHub Pages. The `github-pages` gem and its dependencies are pinned in `Gemfile.lock` so the local preview uses the same Jekyll and plugin versions as the project.

## Preview locally

The locked GitHub Pages bundle is older (GitHub Pages 198 / Jekyll 3.8.5). Run it in Docker with Ruby 2.7.8 and the Bundler version recorded in `Gemfile.lock`. From the repository root, start Docker Desktop and run:

```sh
docker run --rm -p 4000:4000 -v jekyll-bundle:/usr/local/bundle -v "$PWD:/site" -w /site ruby:2.7.8-bullseye sh -lc 'gem install bundler -v 1.17.3 && bundle _1.17.3_ install && bundle _1.17.3_ exec jekyll serve --host 0.0.0.0'
```

Open [http://localhost:4000](http://localhost:4000). Jekyll watches the source files and rebuilds the site as you edit; press `Ctrl+C` in the terminal to stop it. The `jekyll-bundle` Docker volume keeps installed gems between runs. The local site is served at the root path, matching this site's empty `baseurl` setting.

The same preview can run natively with Ruby 3.1.x or earlier by installing the locked gems with Bundler and running `bundle exec jekyll serve`.

If you change the dependencies, update `Gemfile.lock` deliberately and check that the versions remain compatible with GitHub Pages before deploying.
