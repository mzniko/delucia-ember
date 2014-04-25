require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# Bower install

# Ember
module DeluciaEmber
  class Application < Rails::Application
    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
    config.generators do |g|
      g.test_framework :rspec,
                       fixtures: true,
                       view_specs: false,
                       helper_specs: false,
                       controller_specs: false,
                       routing_specs: false
      g.factory_girl true
    end
  end
end
