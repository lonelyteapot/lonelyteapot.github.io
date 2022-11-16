source "https://rubygems.org"

gem "webrick", "~> 1.7"
gem "jekyll", "~> 4.3.1"

gem "sass-embedded", "~> 1.54.9"
gem "dotenv", "~> 2.8"

group :jekyll_plugins do
  gem "jekyll-default-layout"
  gem "jekyll-seo-tag"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.1", :platforms => [:jruby]
