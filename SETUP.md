# Development instructions
## Installing Ruby (Ubuntu / WSL)

- Install Ruby:
  ```bash
  sudo apt install ruby-full build-essential zlib1g-dev
  ```

- Set Ruby Gems installation directory to `~/gems` so that gem installation doesn't require root:
  ```bash
  echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
  echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
  echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
  source ~/.bashrc
  ```

## Installing Jekyll
- Install Jekyll and Bundler:
  ```bash
  gem install jekyll bundler
  ```

- Install the bundle from Gemfile
  ```bash
  bundle install
  ```

## Launching live server

### VS Code Extension
- Install [Jekyll Run](https://marketplace.visualstudio.com/items?itemName=Dedsec727.jekyll-run)
- Set `Command Line Arguments` to `--livereload --force_polling` in extension settings
- Run `Jekyll Run` (Ctrl + F5)

### Command line
```
bundle exec jekyll serve --livereload --force_polling
```
_`--force_polling` is a workaround for WSL live reload (jekyll/jekyll#5233)_
