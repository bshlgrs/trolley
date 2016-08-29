class QuestionsController < ApplicationController
  before_action :authenticate_user!

  def index
    question = Question
  end
end
