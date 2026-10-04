# Jolene Lai Art

This is a Jekyll site published with GitHub Pages through GitHub Actions. Jekyll and the site's plugins are pinned in `Gemfile.lock` so local previews use the same versions as the production build.

## Preview locally

The site uses Jekyll 4.4.1 with Ruby 3.4.11 and Bundler 4.0.22. From the repository root, start Docker Desktop and run:

```sh
docker run --rm -p 4000:4000 -v jekyll-bundle:/usr/local/bundle -v "$PWD:/site" -w /site ruby:3.4.11-bookworm sh -lc 'gem install bundler -v 4.0.22 && bundle _4.0.22_ install && bundle _4.0.22_ exec jekyll serve --host 0.0.0.0'
```

Open [http://localhost:4000](http://localhost:4000). Jekyll watches the source files and rebuilds the site as you edit; press `Ctrl+C` in the terminal to stop it. The `jekyll-bundle` Docker volume keeps installed gems between runs. The local site is served at the root path, matching this site's empty `baseurl` setting.

The same preview can run natively with Ruby 3.4.11 by installing the locked gems with Bundler and running `bundle exec jekyll serve`.

If you change the dependencies, update `Gemfile.lock` deliberately and verify the GitHub Actions build before deploying.
