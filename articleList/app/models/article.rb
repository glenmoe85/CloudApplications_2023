class Article < ApplicationRecord

	def get_article_status
		if(self.published)
			return "Completed"
		else
			return "In Progress"
		end
	end
end

