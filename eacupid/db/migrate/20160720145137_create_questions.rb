class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.text :body
      t.jsonb :answers
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
