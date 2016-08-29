class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.jsonb :profile_essays
      t.jsonb :details
      t.float :lat
      t.float :lon
      t.jsonb :looking_for

      t.timestamps
    end
  end
end
