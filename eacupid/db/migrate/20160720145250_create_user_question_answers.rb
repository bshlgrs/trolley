class CreateUserQuestionAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :user_question_answers do |t|
      t.references :question, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :answer_index
      t.jsonb :acceptable_answers
      t.string :how_important

      t.timestamps
    end
  end
end
