Rails.application.config.middleware.insert_before 0, Rack::Cors, debug: false, logger: 
(-> {Rails.logger}) do
	allow do
		origins '*'
		resource '*',
		:header => :any,
		:methods => [:get, :post, :put, :delete]
	end
end