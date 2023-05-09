require "test_helper"

class ArticleTest < ActiveSupport::TestCase

	setup do
		#puts("i run before the test")
		@article = Article.new
		@testOne_article = articles(:test_One)
		@testTwo_article = articles(:test_Two)
	end

 test "should add new article" do
 	article = Article.new
 	assert article.save
 end	

 test "search for an article" do
 	@article.title = "glenda"
 	@article.body = "ghjghj"
 	@article.published = true
 	@article.save

 	expected_article = Article.find(@article.id)
 	assert_equal(expected_article.title, @article.title)
 	assert_equal(expected_article.body, @article.body)
 	assert_equal(expected_article.published, @article.published)
 end

 test "Delete article" do
 	@article.save
 	assert_difference("Article.count", -1) do
 		@article.destroy
 	end
 end

 test "Update article details" do
 	testTwo_update_title = "Testing the article"
 	@testTwo_article.update({
 		title: testTwo_update_title
 	})
 	assert_equal(testTwo_update_title, @testTwo_article.title)

 end

 test "should be completed when true" do
 	assert_equal(@testOne_article.get_article_status(), "Completed")
 end

test "should be in progress when false" do 	
 	assert_equal(@testTwo_article.get_article_status(), "In Progress")
 end

end
